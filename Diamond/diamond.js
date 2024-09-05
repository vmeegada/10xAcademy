// Diamond
// Given n, print the pattern like this: (For example, if n=5)

//     * 
//    ***
//   ***** 
//  ******* 
// ********* 
//  *******
//   *****
//    ***
//     * 
// Input
// One Integer, denoting n.

// Output
// Print the desired pattern.

// Example
// Input1:

// 3
// Output1:

//   *
//  ***
// *****
//  ***
//   *

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

let result = "";

// Upper part of the diamond (including the middle row)
for (let i = 0; i < n; i++) {
    let spaces = n - i - 1;     // Calculate spaces before stars
    let stars = 2 * i + 1;      // Calculate number of stars
    result += " ".repeat(spaces) + "*".repeat(stars) + "\n"; // Add the row to result
}

// Lower part of the diamond
for (let i = n - 2; i >= 0; i--) {
    let spaces = n - i - 1;     // Calculate spaces before stars
    let stars = 2 * i + 1;      // Calculate number of stars
    result += " ".repeat(spaces) + "*".repeat(stars) + "\n"; // Add the row to result
}

// Use a single console.log to print the entire result
console.log(result.trim());
