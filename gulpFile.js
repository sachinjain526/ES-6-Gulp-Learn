const gulp = require("gulp");
const babel = require("gulp-babel");

// for js

gulp.task("es6", function () {
	console.log("writing");
	return gulp.src("./app/js/**/*.js")
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("./build"));
});
gulp.task("default", ["es6"], () => {
	gulp.watch("app/js/**/*.js", ['es6']);
})