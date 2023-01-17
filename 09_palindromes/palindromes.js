const palindromes = function (str) {
  const array = str
    .toLowerCase()
    .split("")
    .filter((e) => e <= "z" && e >= "a");

  const str1 = array.join("");
  const str2 = array.reverse().join("");

  return str1 === str2;
};

// Do not edit below this line
module.exports = palindromes;
