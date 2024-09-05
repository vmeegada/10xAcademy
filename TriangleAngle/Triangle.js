// Triangle Angle
// Given two integers a and b denoting the two angles of a triangle (in degrees), find the third angle of the triangle (in degrees).

// Note: The given angles will always be of a valid triangle.

// Input
// First line contains an integer denoting a, the first angle.

// Second line contains an integer denoting b, the seocnd angle.

// Output
// One Integer, denoting the third angle of the triangle.

// Example
// Input:

// 30
// 110
// Output:

// 40

// let a = parseInt(readLine());
// let b = parseInt(readLine());
// let c = parseInt(180 - ( a + b ));
// console.log(c);

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

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = 180 - (a + b)

console.log(c)