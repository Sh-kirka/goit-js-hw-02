function findLongestWord(string = "") {
  // Write code under this line
  let longestWord = "";
  const stringSplit = string.split(" ");
  for (i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longestWord.length) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'
