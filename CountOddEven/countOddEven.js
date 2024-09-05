// Maximum number of submissions: 8
// Count odd even numbers
// Count number of odd and even number in given list.

// Input
// First line contains length of the list. Each line contains integer specifying each element in list.

// Output
// 2 integers in each line specifying count of odd and even numbers respectively.

// Example
// Input:

// 5

// 12

// 14

// 15

// 13

// 18

// Output:

// 2

// 3

// let n = parseInt(readLine());
// let oddcount = 0;
// let evencount = 0;

// for(let i =0;i<n;i++){
//     let seq = parseInt(readLine());
//     if(seq % 2 != 0 ) {
//         oddcount = oddcount + 1;
//     }
//     if(seq % 2 == 0){
//         evencount = evencount + 1;
//     }
// }
// console.log(oddcount);
// console.log(evencount);

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

let x = parseInt(readLine());
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i <x; i++) {
    let y = parseInt(readLine());
    if(y %2 === 0) {
        evenCount = evenCount + 1
    } else if (y % 2 !=0) {
        oddCount = oddCount + 1
    }   
}
console.log(oddCount)
console.log(evenCount)


