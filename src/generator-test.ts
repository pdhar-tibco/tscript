import {getNumberArray,numberGenerator,getNumbers} from "./num-generator";
import {analyze} from "./analyze"

let size = 10000000;
analyze("array",size,getNumberArray);
analyze("generator",size,numberGenerator);

// for(let num of getNumbers()){
//     console.log(num);
// }

