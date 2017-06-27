var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync');

gulp.task('default', ['copy'], function(){
	gulp.start('compact-img')
});

gulp.task('copy', ['clean'], function(){
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('compact-img', function(){
	gulp.src('dist/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))	
});

//gulp.task('minify-js', function(){
//	gulp.src('dist/js/**/*')
//		.pipe(uglify())
//		.pipe(gulp.dest('dist/js'))
//});

gulp.task('server', function(){
	browserSync.init({
		server:{
			baseDir: 'src'
		}
	});

	gulp.watch('src/**/*').on('change', browserSync.reload);
});