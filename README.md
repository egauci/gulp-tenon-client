Tenon Web Accessibility Testing Gulp Plugin
============================================

This is a gulp plugin for [TENON](http://tenon.io/) - a web accessiblity testing API.

Tenon docs: http://tenon.io/documentation/

This gulp Tenon plugin is [open and free](https://github.com/egauci/gulp-tenon-client/blob/master/LICENSE).
However, access to the Tenon API must be granted by [Tenon](http://tenon.io/).
You will need to obtain an API key to use it.

Getting Started
---------------

Install with:

    npm install --save-dev gulp-tenon-client

The plugin uses a separate Tenon API interface module: https://github.com/egauci/tenon-api-client --
please check its documentation for hints on configuration parameters.

The Gulp Plugin
---------------

This is my first gulp plugin. Any feedback, issues, and contributions would be most
welcome.

In addition to the Tenon API and API client module options, there are these specific to the plugin:

- snippet -- true or false (default false) to include errorSnippet in the console output.
- saveOutputIn -- an (optional) path to a file that will receive all the results from the Tenon API. Default is no file output.
- config -- path to a JSON file containing options. Default is '.tenonrc' in the current working directory.
The file is processed by the API module and can contain API and API Module parameters.
This may be a good place to put your API key.


Here is a sample gulp task:

    var gulp = require('gulp'),
        gtenon = require('gulp-tenon-client')
    ;

    gulp.task('default', function() {
      gulp.src('dev/build/*html', {read: false})
      .pipe(gtenon({
        key: 'your Tenon API key',
        snippet: true,
        filter: [3, 31],
        saveOutputIn: 'allHtml.json'
      }));
    });
