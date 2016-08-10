"use strict";
const TsTypeInfo = require("ts-type-info");
const fs = require("fs");
const path = require("path");
const result = TsTypeInfo.getInfoFromFiles([__dirname + "/testclass.ts"]);
const property = result.getFile("testclass.ts")
    .getClass("TestClass")
    .getProperty((p) => {
    // console.log(JSON.stringify(p));
    return p.defaultExpression != null;
});
// console.log(result.getFile("testclass.ts").getInterface("TestInterface"));
console.log(result.getFile("testclass.ts").getClass((d) => {
    return d.isAbstract === true;
}));
console.log(property.name);
console.log(property.type.text);
const unionproperty = result.getFile("testclass.ts")
    .getClass("TestClass")
    .getProperty((p) => {
    // console.log(JSON.stringify(p) + "\n");
    return p.type.unionTypes.length > 0;
});
console.log(unionproperty.name);
console.log(unionproperty.type.text);
console.log(`###################################################`);
const file = TsTypeInfo.createFile({
    imports: [{
            moduleSpecifier: "testclass",
            //starImportName: "fs",
            //defaultImportName?: string;
            namedImports: [{ name: "TestInterface" }]
        }],
    classes: [{
            name: "TestGenClass",
            isExported: true,
            implementsTypes: [
                "TestInterface"
            ],
            methods: [{
                    name: "myMethod",
                    parameters: [{ name: "myParam", type: "string" }],
                    onBeforeWrite: writer => writer.write("// myMethod is here"),
                    onWriteFunctionBody: writer => {
                        writer.write(`if (myParam != null && myParam.length > 40)`).block(() => {
                            writer.write("alert(myParam)");
                        });
                        writer.newLine().write("return myParam;");
                    }
                }]
        }]
});
// add to it later
const myClass = file.getClass("TestGenClass");
myClass.isAbstract = true;
myClass.onBeforeWrite = writer => writer.write("@MyDecorator");
myClass.addProperty({
    name: "myProperty1",
    type: "string"
});
myClass.addProperty({
    name: "myProperty2",
    type: "number",
    defaultExpression: "4"
});
// write it out
console.log(file.write());
fs.writeFileSync(path.join(__dirname, "TestGenClass.ts"), file.write(), { encoding: "utf8", mode: "0700" });
//# sourceMappingURL=gettypeinfo.js.map