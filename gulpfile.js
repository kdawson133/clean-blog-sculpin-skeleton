var gulp    = require("gulp"),
    notify  = require("gulp-notify");
    del     = require("del");
    bower   = require("gulp-bower");
    shell   = require("gulp-shell");
    cssmin  = require('gulp-cssmin');
    rename  = require('gulp-rename');
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
    'source/assets',
    'output_dev',
    'output_prod'
  ]);
});
gulp.task('bower', function () {
  return bower({ cmd: 'update'});
});
gulp.task("copybower", function () {
    // jquery
    gulp.src("bower_components/jquery/dist/*.min.js")
      .pipe(gulp.dest("source/components/js"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    gulp.src("bower_components/jquery/dist/*.min.map")
      .pipe(gulp.dest("source/components/js"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // clean-blog
    gulp.src("bower_components/clean-blog/css/clean-blog.min.css")
      .pipe(gulp.dest("source/components/css"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    gulp.src("bower_components/clean-blog/js/clean-blog.min.js")
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
gulp.task('copyuser', function () {
    // user css
    gulp.src("user_assets/css/*.min.css")
      .pipe(gulp.dest("source/assets/css"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // user img
    gulp.src("user_assets/img/*.*")
      .pipe(gulp.dest("source/assets/img"))
      .pipe(notify("Found file: <%= file.relative %>!"));
    // user icons
    gulp.src("user_assets/icons/*.*")
      .pipe(gulp.dest("source/assets/icons"))
      .pipe(notify("Found file: <%= file.relative %>!"));
});
gulp.task('minify', function () {
    gulp.src('user_assets/css/extra.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('user_assets/css'));
});
gulp.task('dev', shell.task([
  'sculpin generate --watch --server'
]));
gulp.task('pro', shell.task([
  'sculpin generate --env=prod'
]));

gulp.task('default', ['copybower', 'copyuser']);
