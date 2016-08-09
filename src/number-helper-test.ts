// import {NumberHelper as nh,MyOtherClass as my}  from "./number-helper";
// import * as nh from "./number-helper";
// import NumberHelper = require("./number-helper");
import * as numberhelper from "./number-helper";

numberhelper.NumberHelper.sumParams(1,2,4,5,6);
let nums = [1,3,6,4,5];
let  [m,,n,...p] = nums;
console.log(m,n,p);
let newNums = [8,...nums];
numberhelper.NumberHelper.sumParams(...newNums);
let [x, y, ...remaining] = [1, 2, 3, 4];
[x, y] = [y, x];
console.log(x,y,remaining);
let my = new numberhelper.MyOtherClass();

const myObj = { value1: 5, value2: 6,value3:undefined,value4: { test1 : 7, test2:8 }};
let { value1 , value2, value4 } = myObj;
console.log(value1,value2,value4);
 let { value1:firstVal , value2:seconVal, value3:thirdVal=3, value4:lastVal } = myObj;
console.log(firstVal,seconVal,thirdVal,lastVal);
