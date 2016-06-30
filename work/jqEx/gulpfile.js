var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('server',function(){
	gulp.src('app')
		.pipe(webserver({
			livereload : true,
			open: true
		}))
});

gulp.task('uglify',function(){
	gulp.src(['app/js/main.js'])
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
});

