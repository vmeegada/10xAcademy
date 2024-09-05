// Train
// There is an N-car train.

// You are given an integer i. Find the value of j such that the following statement is true: "the i-th car from the front of the train is the j-th car from the back."

// Constraints
// 1 <= i <= N
// Input
// Two space seperated integers, denoting N,i respectively.

// Output
// One integer, denoting j.

// Example
// Input1:

// 4 2
// Output1:

// 3
// Explanation1:

// The second car from the front of a 4-car train is the third car from the back.


// let seq = readLine().split(" "); //[ '4', '2' ]
// //console.log(n);
// let N = parseInt(seq[0]);
// //console.log(N);
// let I = parseInt(seq[1]);
// //console.log(I);
// let J = (N-I)+1 ;
// console.log(J);

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

let a = readLine().split(" ")
let b = (a[0])
let c = (a[1])
let d = (b-c)+1
console.log(d)