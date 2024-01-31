// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const str =
  " There is another way that xou can solve your Problems or this is the method that Xou can solve this.";
let newStr = "";

for (const char of str) {
  if (char === "x") {
    newStr += "y";
  } else if (char === "X") {
    newStr += "Y";
  } else {
    newStr += char;
  }
}
console.log(newStr);
