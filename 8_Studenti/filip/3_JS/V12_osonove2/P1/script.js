var password = "012345678";

// 1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log("Opcija1: " + isUnique(password));

// Opcija 1a

function isUnique1a(str) {
  // const mySet = new Set(password);
  // console.log(mySet.size);

  return new Set(str).size == str.length;
}

console.log("Opcija1a: " + isUnique1a(password));

// opcija 1b

function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars += i;
  }

  return true;
}

console.log("Opcija1b: " + isUnique1b(password));

// 2Napisat funkciju koja pprovjerava da li su svi znakovi brojke

//opcija 2 loadsh

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log("Opcija2: " + isNum(password));

//opcija 2a
function isNum2a(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}
console.log("Opcija2a: " + isNum2a(password));
