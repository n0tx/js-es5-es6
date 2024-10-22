// let message = "3hey5hello2hi";
// let message = "hey5hello2hi";
let message = "3hey5hello2hi";
console.log(isAValidMessage(message));

function isAValidMessage(message) {
  const str = message.split(/[0-9]/g).filter((elm) => elm !== "");
  const num = message.split(/[A-Za-z]/g).filter((elm) => elm !== "");
  // return str;
  // return num;
  let result;
  if (message === "") {
    // ini karena permintaan soal
    return true;
  }
  if (/\s/.test(message)) {
    // di message ada mengandung whitespaces gk?
    // \s itu whitespace (spaces, tabs, new lines) dan negatedna itu \S
    return false;
  }
  if (/[A-Za-z]/.test(message[0])) {
    // di message huruf pertama itu harus angka
    return false;
  }
  for (let i = 0; i < Math.min(str.length, num.length); i++) {
    console.log(Math.min(str.length, num.length));
    console.log(+num[i]);
    if (str[i].length !== +num[i] || num.length !== str.length) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}
