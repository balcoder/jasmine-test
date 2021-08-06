# Jasmine Testing 

## Looking at some common tests 
Using the Jasmine test framework to write tests and describe the code we are testing


## Development
The most frequently used script would be `gulp` which runs  `gulp default` which runs sass and browserSync server first before  watching for changes in scss, js,and html files in the app folder. Once a change is detected in app/scss the sass task is called and the scss files are converted to css and browser
reloaded. If a html or js file is changed the browser is reloaded.

## Production
For production ready code we run `gulp build` which empties the dist folder and
runs sass task in sequence first, once these complete it runs tasks useref,
images and fonts all simultaneously.