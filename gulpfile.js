const {src,dest,gulp,series,parallel,watch,task} = require('gulp');
const minifyHtml = require('gulp-minify-html');// 压缩html
const minifyCss = require('gulp-minify-css');//压缩css
const uglify = require('gulp-uglify');//压缩js
const connect = require('gulp-connect');//自动刷新
const sass = require('gulp-sass');//编译sass
const imagemin = require('gulp-imagemin');//图片压缩
const concat = require('gulp-concat');//合并文件
const babel = require('gulp-babel');//将ES6转ES5
const plugin = require('gulp-load-plugins')();//自动加载
//login

task('getImg',function(){
    return src('./public/images/*.*')
    .pipe(dest('./dist/public/images'))
    .pipe(connect.reload())
})
//html
task('getHtml',function(){
    return src('./web/*.html')
   
    .pipe(dest('./dist/web'))
     .pipe(connect.reload())
    
});
//编译sass
task('transformSass',function(){
    return src('./scss/*.scss')
    .pipe(sass())
  
    .pipe(dest('./public/css'))
    
     .pipe(connect.reload())
});

//压缩js
task('uglify',function(){
    return src('./public/js/*.js')
    .pipe(uglify())
  
    .pipe(dest('./dist/public/js'))
     .pipe(connect.reload())
   
});
//压缩css
task('minifyCss',function(){
    return src('./public/css/*.css')
    .pipe(minifyCss())
    .pipe(dest('./dist/public/css'))
    .pipe(connect.reload())
})

//自动更新
task('reload',function(done){
    connect.server({
        livereload:true,
    })
    done();
})
//添加监听任务
task('watch',function(){
    watch('./web/*.html',series('getHtml'));
    watch('./scss/*.scss',series('transformSass'));
    watch('./public/js/*.js',series('uglify'));
    watch('./public/css/*.css',series('minifyCss'));
    watch('./public/images/*.*',series('getImg'))
})

exports.run = series('reload','watch');

// const gulp = require('gulp');//gulp包
// const sass = require('gulp-sass');//编译sass
// // const minifyHtml = require('gulp-minify-html');//压缩html
// // const uglify = require('gulp-uglify');//压缩js
// // const minifyCss = require('gulp-minify-css');//压缩css
// // const imagemin = require('gulp-imagemin');//压缩图片
// const connect = require('gulp-connect');//浏览器自动刷新



// gulp.task('sass',function (){  //编译Sass
//     return gulp.src('./scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./css'))
//     .pipe(connect.reload())
// });


// gulp.task('minifyHtmlIndex',function (){//index.html
//     return gulp.src('./web/*.html')
//     .pipe(gulp.dest('./dist/web'))
//     .pipe(connect.reload())
// });


// gulp.task('uglifyJs',function (){//js
//     return gulp.src('./js/*.js')
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(connect.reload())
// });

// gulp.task('minifyCss',function (){//css
//     return gulp.src('./css/*.css')
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(connect.reload())
// });


// gulp.task('reload',function (done){//自动更新
//     connect.server({
//         livereload: true,
//     });
//     done();
// });


// // 监视文件变化
// gulp.task('watchs',function (){
//     // 监视css文件夹中的所有.css文件的变化并执行copy任务
//     // gulp.watch('./css/*.css',gulp.series('copy'));
//     gulp.watch('./sass/*.scss',gulp.series('sass'));
//     gulp.watch('./css/*.css',gulp.series('minifyCss'));//监视css变化
//     gulp.watch('./js/*.js',gulp.series('uglifyJs'));//监视js变化
//     gulp.watch('./web/*.html',gulp.series('minifyHtmlIndex'));//监视Indexhtml变化
// });

// gulp.task('run',gulp.series('reload','watchs'));