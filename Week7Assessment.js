
//this will have an O(n^ 2) runtime, so I'm going to guess it will take a little under a second, 900ms
const addToZero = nums => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === 0) {
          return true
        }
      }
    }
    return false
  }
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
  
console.log('--------------------------------------------------------------------')
//This should be O(n) because it only needs to iterate over the input once, 30ms
const hasUniqueChars = word => {
    const Chars = new Set()
    for (const char of word) {
      if (Chars.has(char)) {
        return false
      }
      Chars.add(char)
    }
    return true
  }
  console.log(hasUniqueChars('Monday'))
  console.log(hasUniqueChars('Moonday'))
  console.log('--------------------------------------------------------------------')

  //This should be an O(N) runtime, with worst case being a Pangram, 420ms
  const isPangram = sentence => {
    sentence = sentence.toLowerCase().replace(/[^a-z]/g, '')
    const charSet = new Set(sentence)
    return charSet.size === 26
  }
  console.log(isPangram('Pack my box with five dozen liquor jugs'))
  console.log(isPangram('hello'))
  console.log('--------------------------------------------------------------------')


  //O(n), time complexity is proportional to words on the list, 69ms
  const findLongestWord = words => {
    let longestWordLength = 0
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length
      }
    }
    return longestWordLength
  }
  
console.log(findLongestWord(['hello', 'Multidimensionalarray']))
