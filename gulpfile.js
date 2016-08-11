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

var FOLDER_SERVER  = "src/client";
var FOLDER_TYPINGS = "./typings";
var FOLDER_SRC     = "./src";
var FOLDER_DIST    = "./dist";
var FOLDER_TESTS   = "./dist/tests";


gulp.task("clean", function (cb) {
    return del([FOLDER_DIST + "/**/*"], cb);
});

gulp.task("typescript", ["clean","generate-client-side-code"], () =>  {
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

gulp.task("generate-client-side-code", ["clean"], (cb) => {
    var filesToGenerateCodeFrom = [
        "./src/server/noteroutes.ts"
    ];
    var code = serverBridge.getGeneratedCode({
        classMapping: {
            "NoteRoutes": "NoteApi"
        },
        libraryName: "server-bridge-superagent-client",
        files:filesToGenerateCodeFrom
    });

    fs.writeFile(path.join(__dirname, FOLDER_SERVER, "server.ts"), code, function(err) {
        if (err) throw err;
        cb();
    });
});

gulp.task("start-server", () => {
    exec("node dist/server/index.js", function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("tslint", () => {
    return gulp.src([FOLDER_SRC + "/**/*.ts"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});


gulp.task("default", ["typescript"]);