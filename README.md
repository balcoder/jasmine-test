# Jasmine Testing

---

## Looking at some common tests using Jasmine Framework

Using the Jasmine test framework to write tests and describe the code we are testing. Some of the features are:

- **Fast** Low overhead, jasmine-core has no external dependencies.
- **BATTERIES INCLUDED** Comes out of the box with everything you need to test your code.
- **NODE AND BROWSER** Run your browser tests and Node.js tests with the same framework.

Tests are located in js/lib/test.js and loaded with the command gulp as explained below.

Jasmine Docs can be found at [https://jasmine.github.io/pages/docs_home.html](https://jasmine.github.io/pages/docs_home.html)

## Development

The most frequently used script would be `gulp` which runs `gulp default` which runs sass and browserSync server first before watching for changes in scss, js,and html files in the app folder. Once a change is detected in app/scss the sass task is called and the scss files are converted to css and browser
reloaded. If a html or js file is changed the browser is reloaded.

## Production

For production ready code we run `gulp build` which empties the dist folder and
runs sass task in sequence first, once these complete it runs tasks useref,
images and fonts all simultaneously.
