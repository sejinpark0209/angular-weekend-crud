angular
  .module('bookApp')
  .controller('bookShowController', bookShowController);
bookShowController.$inject = ['$http', '$routeParams', '$location'];

function bookShowController($http, $routeParams, $location) {
  console.log('bookshow ctrl running')
	var vm = this;
	var bookId = $routeParams.id;
	$http({
		method: 'GET',
		url: 'http://super-crud.herokuapp.com/books/' + bookId		
	}).then(function pokemonShowSuccess(json) {
		vm.books = json.data;
	}, function error(response) {
		console.log("show book error", response);
	});

  vm.updateBook = function(bookUpdate) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookUpdate._id,
      data: {
        title : bookUpdate.title,
        author : bookUpdate.author,
        image : bookUpdate.image,
        releaseDate : bookUpdate.releaseDate
      }
    }).then(function successCallback(json) {
      console.log(json);
      vm.books = json.data;
      $location.path('/');
    }, function errorCallback(response) {
      console.log("error on deleting", response);
    });
  }

  vm.deleteBook = function(books) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + books._id
    }).then(function successCallback(json) {
      $location.path('/');
      console.log("success delete", json.data)
    }, function errorCallback(response) {
      console.log("error on deleting", response);
    });
  }
}