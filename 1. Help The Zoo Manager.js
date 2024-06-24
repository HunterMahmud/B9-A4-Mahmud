function calculateMoney(ticketSale) {

if(ticketSale < 0) return "Invalid Number";

return (ticketSale*120) - ((8*50)+500);

}