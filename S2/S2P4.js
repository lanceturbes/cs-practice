// CS Practice Problems S2P4

// Task 1

// Write a function that processes an input array, returning an array with the difference between each two subsequent elements.

// For example, if the first two elements in the input are 10 and 6 and 15, then the first two elements in the output will be 4 and -9. (Because 10-6=4 and 6-15=-9.)

// Note that the output array will have one fewer elements than the input.

function solution(a) {
  const differences = []

  for (let i = 0; i < a.length - 1; i++) {
    let difference = a[i] - a[i + 1]
    differences.push(difference)
  }

  return differences
}
