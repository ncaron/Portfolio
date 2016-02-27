var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('index.html').on('change', browserSync.reload);
	gulp.watch('custom_components/*.html').on('change', browserSync.reload);
	gulp.watch('css/*.css').on('change', browserSync.reload);
	gulp.watch('js/*.css').on('change', browserSync.reload);
});