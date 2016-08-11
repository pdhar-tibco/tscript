var gulp = require("gulp");
var mocha = require("gulp-spawn-mocha");
var del = require("del");
var merge = require("merge2");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");
var header = require("gulp-header");
var exec = require("child_process").exec;
var serverBridge = require("server-bridge");
var fs = require("fs");
var path = require("path");

var FOLDER_SERVER  = "./../web-app/src/scripts/server";
var FOLDER_TYPINGS = "./typings";
var FOLDER_SRC     = "./src";
var FOLDER_DIST    = "./dist";
var FOLDER_TESTS   = "./dist/tests";


gulp.task("clean", function (cb) {
    return del([FOLDER_DIST + "/**/*"], cb);
});

gulp.task("typescript", ["clean"], function() {
    var tsProject = ts.createProject("tsconfig.json", {
        typescript: require("typescript")
    });

    var tsResult = gulp.src([FOLDER_TYPINGS + "/**/*.d.ts", FOLDER_SRC + "/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(FOLDER_DIST)),
        tsResult.js.pipe(sourcemaps.write("./")).pipe(gulp.dest(FOLDER_DIST))
    ]);
});