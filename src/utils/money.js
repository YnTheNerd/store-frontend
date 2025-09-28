export function formatMoney(amountCents){
    return `$${(amountCents / 100.00).toFixed(2)}` ; 
}