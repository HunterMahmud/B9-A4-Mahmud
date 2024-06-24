

function checkName(name) {

if(typeof(name) !== 'string') return "invalid";

let wordList = 'ayieouw';

name = name.toLowerCase();

return wordList.includes(name[name.length-1]) ? "Good Name":"Bad Name";

}
