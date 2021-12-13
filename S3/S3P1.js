/*

Task 1

Count the number of occurrences of certain letters in a string.

We want to know the counts of each of a set of letters in the input string. For instance, we might want to know how many as, xs, and js there are.

You'll return the list of requested counts as an array.

If letters is an empty string, return an empty array.

*/

function task_1(s, letters) {
  const result = []
  const letter_counts = {}

  for (let l of s) {
    if (!(l in letter_counts)) {
      letter_counts[l] = 0
    }
    letter_counts[l]++
  }

  for (let l of letters) {
    if (l in letter_counts) {
      result.push(letter_counts[l])
    } else {
      result.push(0)
    }
  }

  return result
}
