# Node JS Intro // Backend Week

This respository demonstrates the basic functionalities which come with Node JS.
We will write to files on the computer´s file system, and read from them again.

We are going to write a HTTP Server which allows the creation of products and customers which are saved as records in a file database (JSON format).

Controllers and Routes will be added that allow us to do different things based on the route a user navigates to.

In between we will refactor the code a bit to make it better structured and comprehensable.

## Branches Overview

- `main`: Very basic node script that writes a message to a text file
- `1-node-arguments`: An `app.js` script that takes two arguments from the command line interface
- `2-es-modules`: Moving from `common JS` syntax to `ES modules` which allows `import` statements instead of `require`
- `3-express`: We are implementing a very basic HTTP server which renders a simple product form and replies with the product name, received from the `request.body`
- `4-express-controllers-1`: We extract our logic to controller functions and import them again
- `4-express-controllers-2`: We do the same for customer controller logic (render a form and reply with the form data which the server will process)
- `5-express-routes`: Now we introduce routes and use them as middleware (`app.use()`) in our `server.js` file
- `6-express-file-database`: Storage of our retrieved products in a file database (JSON format)
- `6-express-file-database-refactoring`: We extract the functions which operate with the file system into a separate file (`databaseHelpers.js`)
- `7-express-file-database-api-routes`: Instead of sending data through an HTML form we now use designated API routes to GET, POST product data
- `8-express-file-database-async-await`: We optimize the code in order to make it fully asynchronous, non-blocking with using `async` and `await`

## Available Scripts

In the project directory, starting from `3-express`, you can run:

```bash
$ npm start
```

This starts the development server in watch mode. Any changes in `server.js` will reload the server.
Open http://localhost:4000 to view it in the browser.
