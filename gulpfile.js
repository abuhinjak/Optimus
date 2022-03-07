const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const browsersync = require('browser-sync').create();

// Compile SCSS to CSS
function compilescss() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/css'))
};

// Minify, concat JS
function jsmin(){
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terser({
      toplevel: true,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/js'));
}

// Image minify
function minifyImg() {
  return src('src/images/*{.jpg, .png}')
  .pipe(imagemin([
    imagemin.mozjpeg({ quality: 80, progressive: true }),
    imagemin.optipng({ optimizationLevel: 2 }),
  ]))
  .pipe(dest('dist/images'))
}

// Convert images to WEBP
function webpImage() {
  return src('dist/images/*.{jpg,png}')
    .pipe(imagewebp())
    .pipe(dest('dist/images'))
};

// BrowserSync
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  });
  cb(); 
} 

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Tasks
function watchTask(){
  watch('dist/*.html', browsersyncReload);
  watch(['src/scss/**/*.scss', 'src/js/*.js'], series(compilescss, jsmin, browsersyncReload)); 
  watch('src/images/*{.jpg, .png}', series(minifyImg, browsersyncReload));
  watch('dist/images/*{.jpg, .png}', series(webpImage, browsersyncReload));
}

exports.default = series(
  compilescss,
  jsmin,
  minifyImg,
  webpImage,
  browsersyncServe,
  watchTask
);