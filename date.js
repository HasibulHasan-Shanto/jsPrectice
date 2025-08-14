const today = new Date()
console.log(today)
const date = new Date(2062-10-26)
console.log(date)
console.log(date.getMonth())
console.log(date.getDay())

const specificDate = new Date(2091,0,26)
console.log(specificDate)
specificDate.setMonth(10)
console.log(specificDate.toLocaleTimeString)


for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}