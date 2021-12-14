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

/*

Task 2

Count all the words in a string, then produce a new string when the count of each word in parentheses follows each word.

If the string is empty, return an empty string.

*/

function task_2(s) {
  // initialize result string
  let result = ""

  // account for empty string edge case
  if (s.length === 0) {
    return result
  }

  // split the original string into an array of words
  const words = s.split(" ")

  // add each unique word to an object, with a count
  const uniqueWords = {}

  for (let word of words) {
    if (!(word in uniqueWords)) {
      uniqueWords[word] = 0
    }

    uniqueWords[word]++
  }

  // create desired output string using the word and the count
  for (let word of words) {
    result += `${word}(${uniqueWords[word]}) `
  }

  // return the output string, trimmed
  return result.trim()
}

/*

Task 3

Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.

If the string is empty, return an empty string.

*/

function task_3(s) {
  let result = ""
  if (s.length === 0) {
    return result
  }

  // make an array of all the words
  const words = s.split(" ")

  // loop over the word array, adding unique words to an object
  const uniqueWords = {}
  for (let word of words) {
    if (!(word in uniqueWords)) {
      uniqueWords[word] = 1

      // after adding unique words to uniqueWords, add the word to the result string
      result += `${word} `
    }
  }

  // trim the result string
  result = result.trim()

  // return the result string
  return result
}
