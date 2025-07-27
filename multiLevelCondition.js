const price = 10000;

if(price >= 10000){
    const discount = price * 10 / 100;
    const finalprice = price - discount;
    console.log(finalprice);
}
else{
    console.log(price)
}