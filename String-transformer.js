/*
Given a string, return a new string that has transformed based on the input:
  Change case of every character, ie. lower case to upper case, upper case to lower case.
  Reverse the order of words from the input.

Note: 
You may assume the input only contain English alphabet and spaces.
You will have to handle multiple spaces, and leading/trailing spaces.

For example:
  "Example Input" ==> "iNPUT eXAMPLE"
*/


// Solution

function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => v == v.toUpperCase() ?
      v.toLowerCase() :
      v.toUpperCase())
    .join('');
}

// or

function stringTransformer(str) {
  let words = str.split(' ').reverse();
  let chars = words.join(' ').split('');
  let returnString = '';
  
  chars.forEach((char) => {
    returnString += (char == char.toUpperCase()) ? 
      char.toLowerCase() : char.toUpperCase();
  });
  
  return returnString;
}