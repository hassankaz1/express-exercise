//function to find mean
function mean(nums){
  if(nums.length === 0) return 0;


  counter = 0
  nums.forEach(nums => {
    counter += nums
  })

  return counter / nums.length;
}


// function to get mode
function mode(arr) {

  const tracker = {}
  let max_count = 0;
  let solution;

  arr.forEach(num => {
    if(tracker[num]){
      tracker[num]++;
    }else{
      tracker[num] = 1;
    }

    if(tracker[num] > max_count){
      max_count = tracker[num];
      solution = num
    }
  })

  return solution;
}

//function to find median
function median(nums){
  // sort and get the middle element

  nums.sort();

  let m = Math.floor(nums.length / 2);
  let solution;

  if (nums.length % 2 === 0) {
    solution = (nums[m] + nums[m - 1]) / 2;
  } else {
    solution = nums[m];
  }
  return solution
}

/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}






module.exports = {
  mean,
  median,
  mode,
  convertAndValidateNumsArray
};
