import {series, parallel } from "gulp";
import {pugToHtml} from "./gulp-tasks/pug";
import {styles} from "./gulp-tasks/styles";
import {script} from "./gulp-tasks/script";
import {imgMin} from "./gulp-tasks/img";
import {fonts} from "./gulp-tasks/fonts";
import {server} from "./gulp-tasks/server";



const build = parallel(pugToHtml, styles, script, imgMin, fonts);

const start = series(build, server);

export { build , start};