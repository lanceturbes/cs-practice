// CS Practice Problems S2P4

// Task 1

// Write a function that processes an input array, returning an array with the difference between each two subsequent elements.

// For example, if the first two elements in the input are 10 and 6 and 15, then the first two elements in the output will be 4 and -9. (Because 10-6=4 and 6-15=-9.)

// Note that the output array will have one fewer elements than the input.

function task_1(a) {
  const differences = []

  for (let i = 0; i < a.length - 1; i++) {
    let difference = a[i] - a[i + 1]
    differences.push(difference)
  }

  return differences
}

// Task 2

// Write a function that moves a "window" over an array, processing the values under the window as it goes.

// For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves(window is the bar over the values):

// _____
// 6 2 8 3 7 9 1 0 5    Window over 6,2,8

//   _____
// 6 2 8 3 7 9 1 0 5    Window over 2,8,3

//     _____
// 6 2 8 3 7 9 1 0 5    Window over 8,3,7

// And the last window in that example would be 1, 0, 5.

// Your goal is to return an array of true / false values.True if all the numbers under the window are odd(not evenly divisible by 2), otherwise false.

// Try to do this without creating any new arrays except for the True / False result array.

function task_2(a, window_size) {
  const result = []

  for (let i = 0; i <= a.length - window_size; i++) {
    let allOdd = true

    for (let j = 0; j < window_size; j++) {
      if (a[i + j] % 2 == 0) {
        allOdd = false
      }
    }

    result.push(allOdd)
  }

  return result
}

// Task 3

// Write a function that moves a "window" over an array, processing the values under the window as it goes.

// For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves (window is the bar over the values):

//  _____
//  6 2 8 3 7 9 1 0 5    Window over 6,2,8

//    _____
//  6 2 8 3 7 9 1 0 5    Window over 2,8,3

//      _____
//  6 2 8 3 7 9 1 0 5    Window over 8,3,7
// Your goal is to return an array of averages of the values under the window as it moves.

function task_3(a, window_size) {
  const result = []

  for (let i = 0; i <= a.length - window_size; i++) {
    let windowTotal = 0

    for (let j = 0; j < window_size; j++) {
      windowTotal += a[i + j]
    }

    const windowAverage = windowTotal / window_size
    result.push(windowAverage)
  }

  return result
}

// Task 4

// You are given an array of integers a. Your task is to calculate how many numbers in the array are equal to the arithmetic mean of their immediate neighbors.

// In other words, count the number of indices i such that a[i] = (a[i - 1] + a[i + 1]) / 2.

// Note: If a[i - 1] or a[i + 1] don't exist, they should be considered equal to 0.

function task_4(a) {
  let result = 0

  for (let i = 0; i < a.length; i++) {
    // If neighbor undefined, set side value to 0
    const leftSide = a[i - 1] ? a[i - 1] : 0
    const rightSide = a[i + 1] ? a[i + 1] : 0

    if (a[i] === (leftSide + rightSide) / 2) {
      result++
    }
  }

  return result
}

// Task 5

// Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

// Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

// NOTES: The solution I came up with, below, is unoptimized -- there is definitely a better way to solve this problem, but this brute-force approach is functional for small inputs.

function task_5(s, x) {
  for (let i = 0; i <= s.length - x.length; i++) {
    let windowString = ""

    for (let j = 0; j < x.length; j++) {
      windowString += s[i + j]
    }

    if (x === windowString) {
      return i
    }
  }

  return -1
}
