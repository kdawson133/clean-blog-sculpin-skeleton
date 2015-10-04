var gulp    = require("gulp"),
    notify  = require("gulp-notify");
    del     = require("del");
    bower   = require("gulp-bower");
    shell   = require("gulp-shell");
/**
 * Copy any needed files.
 *
 * Do a 'gulp copyfiles' after bower updates
 */
var config = {
  paths: {
    src: ["bower_components"],
    dest: "source/components"
  }
}
gulp.task("clean", function () {
  return del([
    'source/components',
    'output_dev',
    'output_prod'
  ]);
});
gulp.task('bower', function () {
  return bower({ cmd: 'update'});
});
gulp.task("copyfiles", function () {
    // jquery
    gulp.src("bower_components/jquery/dist/*.min.js")
      .pipe(gulp.dest("source/components/js"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // bootstrap css
    gulp.src("bower_components/bootstrap/dist/css/*.min.css")
      .pipe(gulp.dest("source/components/css"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // bootstrap js
    gulp.src("bower_components/bootstrap/dist/js/*.min.js")
      .pipe(gulp.dest("source/components/js"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // bootstrap fonts
    gulp.src("bower_components/bootstrap/dist/fonts/*.*")
      .pipe(gulp.dest("source/components/fonts"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // font-awesome css
    gulp.src("bower_components/font-awesome/css/*.min.css")
      .pipe(gulp.dest("source/components/css"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // font-awesome fonts
    gulp.src("bower_components/font-awesome/fonts/*.*")
      .pipe(gulp.dest("source/components/fonts"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // highlightjs js
    gulp.src("bower_components/highlightjs/*.min.js")
      .pipe(gulp.dest("source/components/js"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // highlightjs css
    gulp.src("bower_components/highlightjs/styles/tomorrow-night-bright.css")
      .pipe(gulp.dest("source/components/css"))
      .pipe(notify("Found file: <%= file.relative %>!"));
});
gulp.task('dev', shell.task([
  'sculpin generate --watch --server'
]));
gulp.task('pro', shell.task([
  'sculpin generate --env=prod'
]));

gulp.task('default', ['copyfiles']);
