// Special Range
// Given a range, as [m, n] both inclusive, print all non-negative integers in the range.

// Input
// First line contains an integer which is starting value of range, say m

// Second line contains an integer which is ending value of range, say n

// Output
// Print all non-negative integers in that range. One integer per line.

// If no such integers exist, print -1.

// Example
// Input:

// -5

// 4

// Output:

// 0

// 1

// 2

// 3

// 4


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

let x = parseInt(readLine())
let y = parseInt(readLine())

if (x < 0 && y < 0) {
    console.log("-1");
} else {
    if (x < 0) x = 0;
    let output = [];
    for (let i = x; i <= y; i++) {
        output.push(i);
    }
    console.log(output.join('\n'));
}

// if (x < 0 && y < 0) {
//     console.log("-1");
// } else {
//     if (x < 0) x = 0;
//     for (let i = x; i <= y; i++) {
//         console.log(i);
//     }
// }


// if(x > 0 || y > 0) {
// for (let i = 0; i <=x ||i<=y; i++) {
// console.log(i)        
// }
// } else {
// console.log("-1")
// }