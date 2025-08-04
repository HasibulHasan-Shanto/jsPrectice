

// kono akta string sob gulo latter ke capital and small latter korte cailee toUppercase and toLowercase function bebohar kora hoy
// Example
const name ='Hasibul Hasan Shanto';
console.log(name);
console.log(name.toLowerCase());
console.log(name.toUpperCase())

// jokhon 2 ta sring ke sothik vabe compare kora hoy 
const area = "Dhaka";
const newArea = "dhaka";
if(area.toLowerCase() === newArea.toLowerCase()){
    console.log('Right')
}
else{
    console.log('youre wrong')
}

// jokhon kono String e kono space thake tokhon seta ke compare korar jonno trim() use kora hoy 
// Example

const nam = ' shanto';
const names = 'shanto ';
 if(nam.trim() === names.trim()){
    console.log('sob thik ase');
 }
 else{
    console.log('sob vul')
 }