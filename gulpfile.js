const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('library/**/*.sass')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html']}))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['library/**/*.sass', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)