const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const arrayOfArrays = [
    { name: "tinyArray", array: tinyArray },
    { name: "smallArray", array: smallArray },
    { name: "mediumArray", array: mediumArray },
    { name: "largeArray", array: largeArray },
    { name: "extraLargeArray", array: extraLargeArray }
]




// How long does it take to double every number in a given 
// array? 

// Try it with first function
for (let i = 0; i < arrayOfArrays.length; i++) {
const array = arrayOfArrays[i]
perf.start();                     // Starts timer
doublerAppend(array.array);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log(`Results for ${array.name}`);
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
console.log('----------------------------------------------------')
}