import config from "./config";
import {ConfigStructure} from "./structure/config-structure";
import * as path from "path";


const currentDir = path.resolve(__dirname);

// deep clone
const testConfig = JSON.parse(JSON.stringify(config)) as ConfigStructure;
// test specific changes to configuration
testConfig.STORAGE.DIR = path.join(currentDir, "../storage/data-tests");

export default testConfig;