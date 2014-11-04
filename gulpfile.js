/*
 * Sample gulpfile for gulp-tenon-client
 */
'use strict';

var gulp = require('gulp'),
    gtenon = require('gulp-tenon-client')
;

gulp.task('default', function() {
  gulp.src('tests2/*.html', {read: false})
  .pipe(gtenon({
    key: 'your Tenon API key',
    snippet: true,
    filter: [3, 31, 38, 44, 58],
    saveOutputIn: 'savedOut.json'
  }));
});
