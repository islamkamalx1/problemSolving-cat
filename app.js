// 1- Sum of numbers between any tow given numbers
let sumInRange = (x, y) => {
  let arr = [x, y];
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let total = 0;
  
  for (let i = start; i <= end; i++) {
    total += i;
  }
  console.log(total);
  return total;
};
sumInRange(2, 5); // 14

// 2- Number of Occurrences of each Character
let countCharacters = (str) => {
  let tempStr = str.split("");
  const count = {};

  for (const char of tempStr) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  console.log(count);
  return count;
};
countCharacters("hello"); // {h:1, e:1, l:2, o:1}
