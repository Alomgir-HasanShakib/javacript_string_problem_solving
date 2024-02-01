// Count how many times a string has the letter a

const str = "Alomgir Hasan Shakib";
const target = "a";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (target === str[i]) {
    count++;
  }
}
console.log(`There is ${count} times a found`);
