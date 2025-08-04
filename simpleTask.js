// simpleTask with if else statement
// jodi burger price 500 taka er besi ba soman hoy tahole you will get a free coke
// otherwise you will be give us 30 taka for coke

let burgerPrice = 18;

if(burgerPrice >= 500){
    console.log('you will get a free coke')
}
else{
    console.log('you will be give us 30 taka for coke')
}

// simpleTask with ternary statement
// jodi burger price 500 taka er besi ba soman hoy tahole you will  get a free coke
// otherwise you will be give us 30 taka for coke

burgerPrice >= 500 ? console.log('you will get a free coke') : console.log('you will be give us 30 taka for coke')


let BMI = 23;
let weight;

if(BMI < 18.5){
    weight = 'you are underweight'
}else if(BMI >= 18.5 && BMI <=24.9){
    weight = 'you are normal'
}
else if(BMI >=25 && BMI <=29.9){
    weight = 'you are overweight'
}
else{
    weight = 'you are obese'
}

// simpleTask with nested ternary statement

BMI <18.5 ? console.log('you are underweight') : 
BMI >= 18.5 && BMI <=24.9 ? console.log('you are normal') : 
BMI >=25 && BMI <=29.9 ? console.log('you are overweight') : 
console.log('you are obese')


let marks = -105;
let grade;

if(marks >= 90 && marks <=100){
    grade = 'A';
}else if(marks >= 80 && marks<= 89){
    grade = 'B';
}else if(marks >= 70 && marks<= 79){
    grade = 'C';
}else if(marks >= 60 && marks <= 69){
    grade = 'D';
}
else if(marks >= 0 && marks <= 59){
    grade = 'F';
}
else{
    grade = 'Invalid marks';
}
console.log(grade);

// simple ternary statement for grade

marks >= 90 && marks <=100 ? grade = 'A' : 
marks >= 80 && marks<= 89 ? grade = 'B' : 
marks >= 70 && marks<= 79 ? grade = 'C' : 
marks >= 60 && marks <= 69 ? grade = 'D' : 
marks >= 0 && marks <= 59 ? grade = 'F' : 
grade = 'Invalid marks';