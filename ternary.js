

// simple if else statement jodi price 100 taka er besi ba soman hoy tahole youre regular customer hobe otherwise your'e my new customer hobe
const price = 90;

if(price >= 100){
    console.log('youre my regular customer');
}
else{
    console.log('youre my new customer');
}


// simple ternary statement

// first e condition ? condition true hole ja hobe : condition false hole ja hobeee

price >=100 ? console.log('youre my regular customer') : console.log('youre my new customer')



let price2 = 5100;
const isLeader = true;

if(isLeader === true){
    price2 =0;
}
else{
    price2 = price2 + 100;
}
console.log(price2)



price2 = isLeader === true ? 0 : price2 + 100
console.log(price2)


//  Simple nested ternary statement


if(isLeader === true){
    if(price2 >= 5000){
        price2 = price2 / 2;
    }
    else{
        price2 = 0;
    }
}
else{
    price2 = price2 + 100;
}
console.log(price2)



price2 = isLeader === true ? price2 >=5000 ? price2 / 2 : price2 = 0 : price2 + 100;
console.log(price2)