// Count how many times a string has the letter a or A

const str = "Alomgir hasan shakib";
const target = "a";
const target1 = "A";
let count = 0
for(let i = 0; i<str.length; i++){
    if(str[i]=== target || str[i] === target1){
        count++
    }
}
console.log(`There is ${count} times a & A found`);
