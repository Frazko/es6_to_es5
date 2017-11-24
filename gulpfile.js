const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const pump = require("pump");

gulp.task("es5", () =>
  gulp
    .src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["es2015"]
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"))
);

gulp.task("compress", ["es5"], function(cb) {
  pump([gulp.src("dist/**/*.js"), uglify(), gulp.dest("compressed")], cb);
});

// Este es
gulp.task("default", ["compress"]);

// solo transpile (testing)
gulp.task("transpile", function() {
  return gulp
    .src(["src/**/*.js"])
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
