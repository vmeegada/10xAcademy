// Count first
// You have been given a sequence of n integers. Lets say the given sequence is a0, a1, a2, a3 ... an-1.

// You need to find the number of occurrences of the first value (i.e. a0) in the given sequence.

// Input Format:
// First line contains an integer n, denoting the length of the sequence.

// Next n lines contains one integer each.

// Output Format:
// One integer, denoting the result, as mentioned above.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 10
// Output:

// 2
// Explanation:

// First line contains 5, meaning the sequence has 5 integers.
// First element is 10.
// In the given sequence, 10 occurs 2 times. So, the output is 2.

// let seqlength = parseInt(readLine());  //5        
// let firstnum = parseInt(readLine()); //10 idx=0      
// let count = 1;                                
// for(let i=1;i<seqlength;i++) //  20/ 30/ 40 /10            
// {                                                       
//     let sequence= parseInt(readLine());        
//     {                                           
//         if (sequence === firstnum)//10==20,30,40,10
                             
//         {                                       
//             count = count+1                        
//         }                                         
        
//     }                                           
// }
// console.log(count);



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

let x = readLine() 
let y = readLine() 
let a = 1

for (let i = 1; i < x; i++) {
    let z = readLine()
    if(z == y){
        a = a + 1
    }    
}

console.log(a)