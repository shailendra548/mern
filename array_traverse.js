let nums = [12, 34, 64, 31, 88, 52]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        console.log(nums[i]);
    }
}
console.log('..........\n');

let newArr = [];
//for each loop: for-of loop
for (let n of nums) {
    if (n % 2 == 0) {
        // console.log(n);
        newArr.push(n);
    }
}
console.log(newArr);

let res = nums.filter((n) => { return n % 2 == 0 }); //filter function apply operation in given array.
console.log(res);

let res2 = nums.map((a) => { return a * 2 }); //map function change element in given array.
console.log(res2);

// const prices = [1200 , 350, 3250, 5890, 3990];
// let result = prices.map( (p)=>{return p - p/10} );
// console.log(result);

// console.log(900 - 900/10)




//homework.

// Ques1:
console.log('₹3400');
console.log(parseInt('₹3400'.slice(1)));

let prices = ['₹3400', '₹845', '₹20', '₹940', '₹3700'];

let newPrices = prices.map((p) => { return parseInt(p.slice(1)) });
console.log(newPrices);

// Ques2:
let nums1 = [2, 3, 4, 5, 6, 9, 16, 36, 35, 44];

let perfects = nums1.filter((n) => { return n ** 0.5 === parseInt(n ** 0.5) });
console.log(perfects);

// Ques3:
const eleRem = (arr, i) => {
    arr.splice(i, 1);
    return arr;
}
let res1 = eleRem(nums1, 3);
console.log(res1);