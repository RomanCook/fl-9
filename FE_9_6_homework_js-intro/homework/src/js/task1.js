// Your code goes here
let money, discount, price_discount, P

money = prompt('Enter amount of money',0)
discount = prompt('Enter the discount',0)
if (money < 0) {
 console.log('For input data',money,'(price) and',discount,'(discount):\n    ’Invalid data’')
} else {
    price_discount = money - money * discount / 100
    P = 0 - (price_discount - money)
    if (Math.ceil(price_discount) - price_discount === 0) {
 price_discount = Math.ceil(price_discount) 
} else {
price_discount = price_discount.toFixed(2) 
}
    if (Math.ceil(P) - P === 0) {
P = Math.ceil(P) 
} else {
 P = P.toFixed(2) 
}
    console.log('For input data',money,'(price) and',discount,'(discount):' +
        '\n    Price without discount:',money,'' +
        '\n    Discount:',discount,'%\n    Price with discount:',price_discount,'\n    Saved:',P)
}