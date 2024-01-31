// Check whether a string contains all the vowels a, e, i, o, u

let str = "This is test string with all the vowel includes";
str = str.toLowerCase();

const checkVowel =
  str.includes("a") &&
  str.includes("e") &&
  str.includes("i") &&
  str.includes("o") &&
  str.includes("u");

console.log(checkVowel);
