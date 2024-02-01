// Capitalize Every first Letter of each word in a String

const str =
  "this is the simple way to converat first word in every sigle sentench";

let capitalStr = str.split(" ");
console.log(capitalStr);

for (let i = 0; i < capitalStr.length; i++) {
  const currentWord = capitalStr[i]
  if (currentWord.length > 0) {
    capitalStr[i] = currentWord[0].toUpperCase() + currentWord.substring(1);
  }
}

const result = capitalStr.join(" ");
console.log(result);
