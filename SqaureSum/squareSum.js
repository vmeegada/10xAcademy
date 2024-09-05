// Square Sum
// Given a natural number n as input, find the sum of squares of first n natural numbers.

// Input
// One Integer, denoting n.

// Output
// One Integer, denoting the required sum.

// Example
// Input: 3

// Output: 14

// Explanation:

// 1*1+2*2+3*3 = 14

// let n = parseInt(readLine());
// let sumofsquares = (n*(n+1)*(2*n+1))/6;
// console.log(sumofsquares);

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let result = [n*(n + 1)*(2*n+1)] / 6

console.log(result);