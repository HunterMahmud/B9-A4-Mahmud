

function monthlySavings(arr , livingCost) {

if(!Array.isArray(arr) || typeof(livingCost)!== "number") return "invalid input";

let totalSavings = arr.reduce((totalSavings,salary) => {

salary >= 3000 ? totalSavings += salary * .80 : totalSavings += salary;

return totalSavings;

},0);

return (totalSavings-livingCost) >= 0 ? (totalSavings-livingCost) : "earn more";

}