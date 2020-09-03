// 统计各个字符的数量

let str = "stiabsstringapbs";
let obj = {};
for (let i = 0; i < str.length; i++) {
  let key = str[i];
  if (!obj[key]) {
    obj[key] = 1;
  } else {
    obj[key]++;
  }
}
let max = -1;
let max_key = "";
let key;
for (key in obj) {
  if (max < obj[key]) {
    max = obj[key];
    max_key = key;
  }
}
console.log("max:" + max + " max_key:" + max_key);
