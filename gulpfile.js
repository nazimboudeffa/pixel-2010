var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/pixel.js',
    'src/asset.js',
    'src/engine.js',
    'src/entity.js',
    'src/fps_counter.js',
    'src/layer.js',
    'src/player.js',
    'src/polyfills.js',
    'src/sound.js',
    'src/sprite.js',
    'src/animated_sprite.js',
    'src/sprite_sheet.js',
    'src/tile.js'
    ])
    .pipe(concat('pixel.js'))
    .pipe(gulp.dest('./build/'));
});
