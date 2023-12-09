// compilaciones
const {dest, src, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

// compilar la carpeta para css
function css(done){
    src('src/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'))
    done();
}



// valida si hay cambios, luego los acopla y los pasa al 
// archivo principal
function dev(){
    // css
    watch('src/scss/**/*.scss', css);

}




exports.css = css;
exports.dev = dev;

exports.default = series(css, dev);