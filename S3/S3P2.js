/*

Task 1

Compute the value f(n) for a number of input integers, nums, where f() is an expensive, time-consuming function.

Return the results of f(n) in an array.

Hint: cache the results of previous calls to keep them from timing out.

Add this function f() before your code for solution():

function f(n) {
    let r = 1;
    
    for (let i = 0; i < 5000000; i++)
        r = ((r + n) * n) % 9973;
        
    return r;
}

*/

function f(n) {
  let r = 1;

  for (let i = 0; i < 5000000; i++)
    r = ((r + n) * n) % 9973;

  return r;
}

function task_1(nums) {
  const result = []
  const cache = {}

  for (let num of nums) {
    if (!(num in cache)) {
      cache[num] = f(num)
    }

    result.push(cache[num])
  }

  return result
}
