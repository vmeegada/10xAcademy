// Pattern122333
// Write a program to make such a pattern like right angle triangle with a number which will repeat a number in a row, as shown below.

// For n = 4, the pattern should be like:

// 1
// 22
// 333
// 4444
// Input
// One Integer, denoting n.

// Output
// The required pattern

// Example
// Input1:

// 5
// Output1:

// 1
// 22
// 333
// 4444
// 55555


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
let x = readLine();
for (let i = 1; i <= x; i++) { 
    let y = ""
    for (let j = 1; j <= i; j++) {
        y = y + i
    }  
    console.log(y)  
}
