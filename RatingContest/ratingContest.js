// Rating Contest
// A programming competition site regularly holds programming contests at different levels.

// The first level contest is called ABC, which is open for contestants with ranking less than 1200.

// The contest level after the ABC is called ARC, which is open for contestants with ranking less than 2800.

// The contest level after the ARC is called AGC, which is open for all contestants.

// Help Ramesh in figuring out which is the next level for him given his current rank 'R'.

// Input
// One Integer, denoting R.

// Output
// Print the name of the next contest rated for Ramesh (ABC, ARC or AGC).

// Example
// Input1:

// 1199
// Output1:

// ABC
// Explanation1:

// 1199 is less than 1200, so ABC will be rated.
// Input2:

// 1200
// Output2:

// ARC

// let rank = parseInt(readLine());
// if (rank < 1200) {
//     console.log("ABC");
// } else if (rank >=1200 && rank < 2800) {
//     console.log("ARC");
// } else if (rank >= 2800) {
//     console.log("AGC");
// }


let fs = require("fs");
const { Readline } = require("readline/promises");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let a = readLine();

if(a < 1200) {
    console.log("ABC")
} else if (a < 2800){
    console.log("ARC")
} else {
    console.log("AGC")
}