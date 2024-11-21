const name = "harsh "
const repocount = 50

// console.log(name + repocount + " value")

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('harshs')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-1,3)
console.log(anotherString);
const newStr = "     harsh       "
console.log(newStr);
console.log(newStr.trim());

const url = "https:/harsh.com/harsh%20sisodiya"

console.log(url.replace('%20','-'))

console.log(url.includes('harry'))



