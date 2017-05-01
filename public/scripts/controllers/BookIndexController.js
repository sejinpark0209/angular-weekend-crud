angular
  .module('bookApp')
  .controller('bookIndexController', bookIndexController);
bookIndexController.$inject = ['$http'];

function bookIndexController ($http) {
  console.log('bookIndexController running!');
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error', response);
  });


}