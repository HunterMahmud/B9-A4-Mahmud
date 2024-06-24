

function password(obj) {

if(Object.keys(obj).length != 3 || obj.name == undefined || obj.siteName== undefined || obj.birthYear == undefined || !(obj.birthYear > 999 && obj.birthYear<9999)) return "invalid";

return obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;

}