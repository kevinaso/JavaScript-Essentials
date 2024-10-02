"use strict";
// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError


//Practice task
{var myVar=69;
    let myLet=19;
    const myConst=56;

    console.log(myVar)
    console.log(myLet)
    console.log(myConst)

    myVar=4345435;
    myLet=454676;
    

    console.log(myVar)
    console.log(myLet)
    // myConst=54534;
    // console.log(myConst)

}

myVar=43450005;
    let myLet=476;
    const myConst=534;
    console.log(myVar)
    console.log(myLet)
    console.log(myConst)

    