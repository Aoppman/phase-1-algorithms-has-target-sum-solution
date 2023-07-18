function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    //for the current num, identify a complement that adds to the target 
  
    const complement = target - array[i]
    // iterate through the redt of the array
    for (let j = i + 1; j < array.length; j++)
    // check if any number is our complement
    //  if so, return true
    if (array[j] === complement) return true;
  }
  return false
};

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25)
hasTargetSum([1, 2, 5], 4)
hasTargetSum([-7, 10, 4, 8], 3)
hasTargetSum([1, 2, 3, 4], 5)
hasTargetSum([2, 2, 3, 3], 4)
hasTargetSum([4], 4)
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate through each number in the array
  for the current num, identify a compliment that adds to the target (comp = target - num)
  iterate through the rest of the array
  check if any number is our compliment
  if so retuarn true

if i reach the end of the array, return false
  */

/*
  Add written explanation of your solution here
  

  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

/* 
make a function 'hasTargetSum' that checks if two numbers from the array
add up to some target. For example, if i have an array '[1, 3, 3, 4]'
and the target is '6' I should rteturn true because 2 and 4 add to 6.
for each number check if there's a number that adds to the target. */