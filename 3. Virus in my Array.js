
function deleteInvalids(array) {

if(!Array.isArray(array)) return "Invalid Array";

return array.filter((number) => (typeof(number) == "number" && !isNaN(number)));

}