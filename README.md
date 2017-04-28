<!--
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Choose Your Own CRUD App


### Goals

Practice setting up an angular app, using `$http` to access a RESTful API, and routing with `ngRoute`.


### Overview

In this lab, you'll be creating a simple CRUD app to keep track of something - **not** pokemons.

When a user goes to `/`, they should see a list of all of the things in the API. When a user goes to `/things/:id`, they should see a single thing. On the `/things/:id` page, a user should be able to edit or delete a thing.

The non-pokemon things available in the super-crud API are books and wine. Please choose one of those things and inspect its JSON to discover the features of its model.

### Expectations

Your finished product will:

  1. Route the user to an **index page** at `/`. That page will:
    * display all of the things.
    * show some summary information about each thing.
    * include a link to the show thing page on the name or title of each thing.
    * include a form to add a new thing.
  2. Route the use to a **show thing page** at `/things/:id` for any existing thing id. The show page will:
    * display all of the data about the specific thing.
    * have a **delete button** that deletes the specific thing from the database and, when successfully deleted, redirects the user to the home page.
    * have an **edit button** that reveals a form for the user to edit the attributes of the thing.
      * the edit form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
      * the edit form will have a cancel button that does not save any of the changes the user just made.
  3. **Add filters to organize the things index page:** add a search bar to filter the things by your search, or buttons to sort them by some significant field in their data.


### Hints:

* You can use your pokemon app as a reference, but do start this new app over some scratch. Repetition will help you solidify concepts!

* Once you add client-side routing,  Angular will need to be served from a server. Make sure you're running `budo`, and that the URL you're looking at starts with `localhost`, NOT `file://`.
