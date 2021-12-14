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

/*

Task 2

Produce a histogram of word frequency in a string.

The function should return an array of strings, where each string takes the form:

word: ####

word is the word in question, followed by a colon and a space, followed by a number of hash marks that corresponds to the number of times that word appears in the input string.

The result array should be sorted alphabetically. This can be done by calling .sort() of the array before returning it.

If the input string is empty, return an empty array.

*/

function task_2(s) {
  const result = []
  const cache = {}
  const words = s.split(" ")

  if (s.length === 0) {
    return result
  }

  for (let word of words) {
    if (!(word in cache)) {
      cache[word] = 1
    } else {
      cache[word]++
    }
  }

  for (let word in cache) {
    let entry = `${word}: `

    for (let i = 0; i < cache[word]; i++) {
      entry += "#"
    }

    result.push(entry)
  }

  return result.sort()
}

/*

Task 3

Write a function that returns the nth number of the Fibonacci sequence.

Cache the results of each run to ensure the function does not perform duplicate calculations.

*/

const cache = { "0": 0, "1": 1 }

function task_3(n) {
  if (!(n in cache)) {
    cache[n] = task_3(n - 2) + task_3(n - 1)
  }

  return cache[n]
}
