/*	var sum = 0
	for(var i = 0; i<=100; i+=2){
		console.log(sum + '+' + i + '=', (sum+i))
		sum+=i
	}
	console.log('total =' +sum)*/

//while loop
	/*var something = true

	while(something){
		var rand = Math.floor(Math.random() * 10 + 1)
		if( rand === 3){
			console.log('winnner winnner chicken dinner')
			something = false
		}else{
			console.log('you have got ' + rand)
		}
	}*/



//nested loop
	/*var n = 5
	for(var i = 1; i<=n ; i++){
		var result = ''
		for(var j = 1; j<=i; j++){
		result += j 
		}
		console.log(result)
	}

	var n= 5
	for(var i=1; i<=n; i++){
		var result = ''
		for(var j=1; j<=n; j++){
			result += '*'
		}
		console.log(result)
	}*/

//continue statement
	/*for(var i=1; i<=10; i++){
		if( i==5 || i==7){
			 continue
		}
		else{
			console.log(i)
		}
	} */

	// var a = 'i am'
	// var b = 'Shahjalal rafi'
	// var c = a.concat(' ' +b)
	// var d = c.substr(5)
	// console.log(c)
	// console.log(d)
	// console.log(c.charAt(2))
	// console.log(a.startsWith('i'))
	// console.log(c.endsWith('rafi'))
	// console.log(c.toUpperCase())
	// console.log(c.toLowerCase())
	// console.log('     hskfh        '.trim())
	// console.log(c.split(' '))


	/*var str = 'some string here	'
	var length = 0

	while(true){
		if (str.charAt(length)=='') {
			break
		}
		else{
			length++
		}
	}
	console.log(length)*/

	/*var arr = [1, 2, 3, 4, 5, 6, 7, 8]
	var length = 0

	while(true){
		if(arr[length]== null){
			break
		}
		else{
			length++
		}
	}
	console.log(length)
//every index will  increase 2
	var arr = [4, 3, 7, 23, 6, 25]

	for(var i=0; i<arr.length; i++){
		arr[i] = arr[i] + 2
	}
		console.log(arr)

//sum of this array
	var sum = 0
	for(var i=0; i<arr.length; i++){
		sum += arr[i]
	}
	console.log(sum)
//even number of this array
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			console.log(arr[i])
		}
	}
//odd number of this array
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2==1){
			console.log(arr[i])
		}
	}

//sum of even numbers
	var sum = 0
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			sum += arr[i]
		}
	}
	console.log(sum)*/
//sum of odd numbers
/*	var sum1 = 0 
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2==1){
			sum1+= arr[i]
		}
	}
	console.log(sum1)
	console.log(sum + sum1)*/


/*	var num = [1, 43, 4, 5, 12, 32, 6, 9]
	var find = 6
	var isFound = false

	for(var i=0; i<num.length; i++){
		if(num[i]==find){
			console.log('data found at index '+i)
			isFound = true
			break
		}
	}
	if(!isFound){
		console.log('data is not found')
	}*/

/*	var arr = [
		[2, 8, 23, 7],
		[9, 12, 6,19],
		[8, 99, 23,5]
	]
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr[i].length; j++){
			console.log('Elements' + i + ':' + arr[i][j])
		}
	}

	var qwe = [9, 6, 3, 2, 7, 12]

	for( var i=0; i<(qwe.length/2); i++){
		var tem = qwe[i]
		qwe[i] = qwe[qwe.length - 1 - i]
		qwe[qwe.length - 1 - i] = tem
	}
	console.log(qwe)

	var num = [3, 4, 5, 6, 7, 84]

	for( var i=0; i<(num.length/2); i++){
		var temp = num[i]
		num[i]= num[num.length - 1 - i]
		num[num.length - 1 - i] = temp
	}
	console.log(num)
	console.log(num.reverse())

	var attach = [9, 6, 3, 2, 7, 12]
	 console.log(attach.join(' '))*/

	/* var num1 = [3, 4, 5, 6, 7, 84]
	 var num2 = [9, 6, 5, 15, 71, 4]

	 var num3 = num1.concat(num2)
	 console.log(num3)*/

	/* var obj = {
	 	a:10,
	 	b:20
	 }
	 console.log(obj)*/

//function
	/* function num(){
	 	var a = 10
	 	var b = 20
	 	console.log(a-b	)
	 }
	 num()

	
	function call(){
		console.log('this is my first function praactice')
	}

	for(var i = 0; i<10; i++){
		call()
	}*/

	/*var arr1 = [2, 4, 1, 2]
	var arr2 = [5, 7, 5, 2]
	var arr3 = [3, 5, 7, 9]

	function sumOfArray(arr){
		sum = 0
		for(var i = 0; i<arr.length; i++){
			sum += arr[i]
		}
		console.log(sum)
	}
	sumOfArray(arr1)



	function addAll(){
		var sum = 0
		for(var i = 0; i <arguments.length; i++){
			sum += arguments[i]
		}
		console.log(sum)
	}
	addAll(3,5,6)
	addAll(97,23,4556,6,8)

	function number(a,b,c){
		for(var i = 0; i < arguments.length; i++){
			console.log(arguments[i])
		}
	}
	number(3,3,6)


	function person(name,email){
		return{
			name: name,
			email: email
		}
	}
	var p1 = person('Shahjalal rafi', 'Shahjalalrafi5@gmail.com')
	console.log(p1)& */

	/*var addition = function(a, b){
		return(a+b)
	}
	addition(10,80)

	setTimeout(function(){
		console.log('i will call after 3 seconds')
	},3000)

	var another = addition
	console.log(addition(7,8))*/

	/*function something(greet, name) {
		function getFirstName() {
			if(name) {
				return name.split(' ')[0]
			}
		}
		var message =  greet + ' ' + getFirstName()
		console.log(message)
	} 
	something('good evening','Shahjalal rafi f')


	function anything(building, flat) {
		function getBuildingName() {
			if(building) {
				return building.split(' ')[0]
			}
		}
		var suply = getBuildingName() + ' ' + flat
		console.log(suply)
	}
	anything('provashi tower','flat no 702')*/

	/*function test(n) {
		function a(){
			return n%3 === 0
		}
		function b(){
			return n%5 == 0
		}

		if(a() && b()){
			console.log(n + ' is divisible by both 3 & 5')
		}
		else{
			console.log(n + ' its not divisible by every number')
		}
	}
	test(15)*/

	/*function add(a, b) {
		return a+b
	}

	var sum = add
	console.log(sum(4,5))


	arr = []
	arr.push(add)
	console.log(arr)
	console.log(arr[0](3,4))

	var obj = {
		sum : add
	}
	console.log(obj)
	console.log(obj.sum(10,6))*/


	/*function add(a, b) {
		return a+b
	}

	function manupulate(a, b, func) {
		var c = a+b
		var d = a-b

		function multiply(){
			var m = func(a, b)
			return c*d*m
		}
		return multiply
	}

	var multiply = manupulate(2,3,add)
	console.log(multiply())*/


// CALL BACK FUNCTION
	/*function sample(a, b, cb) {
		c = a + b
		d = a - b
		var result = cb(c, d)
		return result
	}

	function sum(a, b) {
		return a + b
	}

	var result = sample(5, 8, sum)
	console.log(result)

	var result2 = sample(3, 6, function(c,d) {
		return c-d
	})
	console.log(result2)

	var result3 = sample(3, 6, function(c,d) {
		return c/d
	})
	console.log(result3)*/

	//var arr = [1, 2, 3, 4, 5]
	// sum = 0

	// arr.forEach(function(value, index, arr){
	// 	console.log(value,arr,index)
	// 	sum += value
	// })
	// console.log(sum)

	/*function forEach(arr, cb) {
		for(var i = 0; i<arr.length; i++){
			cb(arr[i], i , arr)
		}
	}

	var sum = 0
	forEach(arr,function(value, index, arr){
		console.log(value, index, arr)
		sum += value
	})
	console.log(sum)

	forEach(arr,function(value, index, arr){
		arr[index] = value + 5
	})
	console.log(arr)*/

	// var sqrarr = arr.map(function(value){
	// 	// return Math.random()
	// 	return value * value
	// })

	// console.log(arr)
	// console.log(sqrarr)

	// var arr = [2, 4, 5, 6, 9]
	// function myMap(arr ,cb) {
	// 	var newArr = []
	// 	for(var i = 0; i < arr.length; i++){
	// 		var temp = cb(arr[i], i, arr)
	// 		newArr.push(temp)
	// 	}
	// 		return newArr
	// }

	// var qb = myMap(arr, function(value){
	// 	return value * value * value
	// })
	// console.log(qb)

	// var mten = myMap(arr, function(value){
	// 	return value * 10
	// })
	// console.log(mten)

	// var array = [2, 3, 5, 8]

	// function pap(arr, cab){
	// 	newArray = []
	// 	for(var i = 0; i < array.length; i++){
	// 		var temp = cab(arr[i], i, arr)
	// 		newArray.push(temp)
	// 	}
	// 	return newArray
	// }

	// var qube = pap(array, function(value) {
	// 	return value *5
	// })
	// console.log(qube)

	// var mul2 = pap(array, function(value) {
	// 	return value/2
	// })
	// console.log(mul2)

//filter function

	// var arr = [2, 3, 6, 9, 4, 12]

	// function myFilter(arr,jcb) {
	// 	newArr = []
	// 	for(var i = 0; i < arr.length; i++){
	// 		if(jcb(arr[i], i, arr)) {
	// 			newArr.push(arr[i])
	// 		}
	// 	}
	// 	return newArr
	// }

	// var upFive = myFilter(arr, function(value) {
	// 	return value > 4
	// })
	// console.log(upFive)

	// var odd = myFilter(arr, function(value) {
	// 	return value %2 === 0
	// })
	// console.log(odd)

// reduce function implementetion

	//var arr = [9, 2, 4, 6, 17, 13]

	// function myReduce(arr, cb, acc) {
	// 	for(var i = 0; i < arr.length; i++) {
	// 		acc = cb(acc, arr[i])
	// 	}
	// 	return acc
	// }

	// var sum = myReduce(arr, function(prev, curnt) {
	// 	return prev + curnt
	// },0)
	// console.log(sum)

	// var big = myReduce(arr, function(prev, curnt) {
	// 	return Math.max(prev, curnt)
	// },arr[0])
	// console.log(big)

	// var small = myReduce(arr, function(prev, curnt) {
	// 	return Math.min(prev, curnt)
	// },arr[0])
	// console.log(small)


	// var result = arr.find(function (value){
	// 	return value == 6
	// })
	// console.log(result)

	// var result = arr.findIndex(function (value) {
	// 	return value == 6
	// })
	// console.log(result)

	// function myFind(arr, cb) {
	// 	for(var i = 0; i < arr.length; i++) {
	// 		if(cb(arr[i])) {
	// 			// return arr[i]
	// 			return i
	// 		}
	// 	}
	// }

	// var result = myFind(arr, function(value){
	// 	return value == 6
	// })

	// console.log(result)


	// var arr = [3, 4, -7, 38, 9, -1 ,8, 7,2]

	// arr.sort(function(a, b) {
	// 	if(a > b){
	// 		return 1
	// 	}
	// 	else if(a < b){
	// 		return -1
	// 	}
	// 	else{
	// 		0
	// 	}
	// })
	// console.log(arr)


	// var person = [
	// 	{
	// 		name : 'Shahjalal',
	// 		age : 21
	// 	},
	// 	{
	// 		name : 'rafi',
	// 		age : 26
	// 	},
	// 	{
	// 		name : 'rakib',
	// 		age : 17
	// 	},
	// 	{
	// 		name : 'tasib',
	// 		age : 18
	// 	},
	// ]

	// person.sort(function(a,b) {
	// 	if(a.age > b.age){
	// 		return 1
	// 	}
	// 	else if(a.age < b.age){
	// 		return -1
	// 	}
	// 	else{
	// 		return 0
	// 	}
	// })
	// console.log(person)

	// function greet(msg) {
	// 	function greetings(name) {
	// 		return msg + ', ' + name + '!'
	// 	}
	// 	return greetings
	// }

	// var gm = greet('good morning')
	// var msg = gm('Shahjalal rafi')

	// console.log(msg)

	// function base(b) {
	// 	return function(n) {
	// 		result = 1
	// 		for(var i = 0; i < b; i++) {
	// 			result *= n
	// 		}
	// 		return result
	// 	}
	// }

	// var base10 = base(10)
	// console.log(base10(3))

	// var base5 = base(5)
	// console.log(base5(3))
	// console.log(base5(2))
	// console.log(base5(4))


	// function sum(n) {
	// 	if(n == 1){
	// 		return 1
	// 	}
	// 	return n + sum(n-1)
	// }
	// console.log(sum(10))

	// function fact(n){
	// 	if(n == 1) {
	// 		return 1
	// 	}
	// 	return n * fact(n-1)
	// }
	// console.log(fact(7))

	// function add(a, b) {
	// 	return a+b
	// }

	// var sum = add
	// console.log(sum(3,7))

	// var arr = []
	// arr.push(sum)
	// console.log(arr[0](5,5))

	// var obj = {
	// 	sum :add
	// }
	// console.log(obj.sum(2,3))

	// setTimeout (function() {
	// 	console.log('this is rafi')
	// },100)

	// function sample(a, b , cb) {
	// 	var c = a + b
	// 	var d = a - b
	// 	var result = cb(c, d)
	// 	return result
	// }

	// var result1 = sample(5, 8, function(c, d) {
	// 	return c + d 
	// })
	// console.log(result1)

	// var result2 = sample(5, 8, function(c, d) {
	// 	return c -d 
	// })
	// console.log(result2)

	// var result3 = sample(5, 8, function(c, d) {
	// 	return c * d
	// })
	// console.log(result3)

	// var result4 = sample(5, 8, function(c, d) {
	// 	return c/d
	// })
	// console.log( result4)

	// var arr = [2, 4, 5, 7, 12]

	// function haha(arr, cb) {
	// 	for(var i = 0; i < arr.length; i++) {
	// 		cb(arr[i], i, arr)
	// 	}
	// }

	// var sum = 0
	// haha(arr,function(value, index, arr) {
	// 	sum += value 
	// })
	// console.log(sum)

	// haha(arr,function(value, index, arr) {
	// 	arr[index] = value + 5
	// })
	// console.log(arr)

	// var arr = [2, 4, 5, 7, 12]

	// function myMap(arr, cb) {
	// 	var newArr = []
	// 	for(var i = 0; i < arr.length; i++) {
	// 		var temp = cb(arr[i], i, arr)
	// 		newArr.push(temp)
	// 	}
	// 	return newArr
	// }

	// var qb = myMap(arr, function(value) {
	// 	return value * value 
	// })

	// var mten = myMap(arr, function(value) {
	// 	return value * 10
	// })

	// console.log(arr)
	// console.log(qb)
	// console.log(mten)

	// var arr = [2, 4, 9, 17, 11, 5, 7, 12]

	// function myFilter(arr, cb) {
	// 	var newArr = []
	// 	for(var i = 0; i < arr.length; i++) {
	// 	if(cb(arr[i], i, arr)) {
	// 		newArr.push(arr[i])
	// 	}
	// 	}
	// 	return newArr
	// }

	// var odd = myFilter(arr, function(value) {
	// 	return value % 2 == 1
	// })
	// console.log(odd)
	 // var arr = [2, 4, 9, 17, 11, 5, 7, 12]

	 // function myReduce(arr, cb, acc) {

	 // 	for(var i = 0; i < arr.length; i++) {
	 // 		acc  = cb(acc, arr[i])
	 // 	}
	 // 	return acc
	 // }

	 // var sum = myReduce(arr, function(prev, curnt) {
	 // 	return prev + curnt
	 // },0)

	 // var max = myReduce(arr, function(prev, curnt) {
	 // 	return Math.max(prev, curnt)
	 // },0)

	 // var min = myReduce(arr, function(prev, curnt) {
	 // 	return Math.min(prev, curnt)
	 // },arr[0])

	 // console.log(sum, max, min)

	//  var myObj = {
	//  	name : "Shahjalal",
	//  	study : "science"
	//  }
	
	// var keys = Object.keys(myObj)
	// var values = Object.values(myObj)
	// var entries = Object.entries(myObj)
	// console.log(keys)
	// console.log(values)
	// console.log(entries)

	// function asd(a, ...params) {
	// 	console.log(a)
	// 	console.log(params)
	// }

	// asd(3, 54, 5, 6, 7)

	// function currying (a) {
	// 	return function (b) {
	// 		return function (c) {
	// 			return a + b + c
	// 		}
	// 	}
	// }

	// var result = currying(5)(10)(15)
	// console.log(result)

	// function print(inp) {
	// 	console.log(inp)
	// }

	// function fiveMul(n) {
	// 	return n * 5
	// }

	// function add(a, b) {
	// 	return a + b
	// }

	// print(fiveMul(add(5, 5)))

	// var x = 50
	//  function test () {
	 	
	//  	function another () {
	//  		console.log(x)
	//  	}
	//  	another ()
	//  }
	//  test ()

	// var rect = {
	// 	width : 100,
	// 	height : 100,

	// 	draw: function() {
	// 		console.log('i am a rectangle')
	// 		console.log('my width is ' + this.width)
	// 		console.log('my height is ' + rect.height)
	// 	}
	// }

	// rect.draw()

	// rect.height = 50
	// rect.draw()

	// var createRect = function(width, height) {
	// 	return{
	// 		width : width,
	// 		height : height,

	// 		draw: function() {
	// 			console.log('i am a rectangle')
	// 			this.printProperties()

	// 		},
	// 		printProperties: function() {
	// 			console.log('my width is ' + this.width)
	// 			console.log('my height is ' + this.height)
	// 		}
	// 	}
	// }

	// var rect1 = createRect(40,10)
	// rect1.draw()

	// var rect2 = createRect(80,100)
	// rect2.draw()


	//  function myFunc(c, d) {
	//  	console.log(this)
	//  	console.log(this.a + this.b + c + d)
	//  }

	//  myFunc.call({a:25, b:35},10, 5)
	//  myFunc.apply({a:25, b:35},[10, 5])
	//  var testbind = myFunc.bind({a:25, b:35})
	//  testbind(50,10)
	//  testbind(3,7)

	// var name = "rafi";

	// function toUpper (text) {
	// 	const upperCased = text.toUpperCase();
	// 	console.log(upperCased);
	// }
	// toUpper(name);

	// var name = 'rafi'
	// var age = 21

	// console.log('my name is ${name} and i am ${age} years old')

	
	 // function getBook(bookName, author) {
	 // 	return{
	 // 		bookName,
	 // 		author
	 // 	}
	// }

	// var book = getBook('herry poter', 'jk')
	// console.log(book)

	// function square(width) {
	// 	this.width = width
	// }

	// square.ptototype = {
	// 	draw: function() {
	// 		console.log('draw')
	// 	},
	// 	toString: function() {
	// 		return 'my width is = ' + this.width
	// 	}
	// }

	// var sqr1 = new square(5)
	// var sqr2 = new square(10)
	// console.log(sqr1,sqr2)

	// function extend(parent,child) {
	// 	child.prototype = Object.create(parent.prototype)
	// 	child.prototype.constractor = child
	// }
 
	// function shape(color) {
	// 	this.color = color
	// }

	// shape.prototype.common = function() {
	// 	console.log("i am a common method")
		
	// }

	// function square(width, color) {
	// 	shape.call(this, color)
	// 	this.width = width
	// }
	// extend(shape, square)

	// square.prototype.draw = function() {
	// 	console.log("drawing")
	// }

	// // var shape = new shape()
	// var sqr = new square(45, 'green')

	// function circle(radious, color) {
	// 	shape.call(this, color)
	// 	this.radious = radious
	// }

	// circle.prototype.common = function() {
	// 	shape.prototype.common.call(this)
	// 	console.log("i am calling from circle and i have overridden.")
	// }

	// var c = new circle(10, 'red')

	// function mixin(target, ...sources) {
	// 	Object.assign(target, ...sources)
	// }

	// var canEat = {
	// 	eat: function () {
	// 		console.log(Eating...)
	// 	}
	// }

	// var canWalk = {
	// 	walk: function () {
	// 		console.log(Walking...)
	// 	}
	// }

	// var canSwim = {
	// 	swim: function () {
	// 		console.log(Swiming...)
	// 	}
	// }

	// function person(name) {
	// 	this.name = name
	// }

	// mixin(person.prototype, canEat, canWalk)

	// var person = new person('Shahjalal rafi')
	// console.log(person)

	// function goldFish(name) {
	// 	this.name = name
	// }

	// mixin(goldFish.prototype, canEat, canSwim)
	// var fish = new goldFish('golden fish')

	// var name = 'rafi'
	// var age = 21

	// console.log(`my name is ${name} and i am ${age} years old.i am ${age < 18 ? 'not ' : ''} adult`)
	// console.log(name.padStart(15))
	// console.log(name.padEnd(15,'*'))
	// console.log('rafi '.repeat(10))

	// let obj = {
	// 	name : 'Shahjalal rafi',
	// 	print: function() {
	// 		setTimeout(() => {
	// 			console.log(`this is ${this.name}`)
	// 		},1000)
	// 	}
	// }

	// obj.print()

	// function sqr(n = 4) {
	// 	return n*n
	// }
	// console.log(sqr())

	// function greet(name = 'Shahjalal rafi', msg = 'hello') {
	// 	console.log(name.length)
	// 	console.log( `${msg}! ${name}`)
	// }
	// greet()

	// function sum() {
	// 	let sum = 0

	// 	for(let i = 0; i < arguments.length; i++){
	// 		sum += arguments[i]
	// 	}
	// 	return sum
	// }
	// console.log(sum(4, 5, 6, 2, 8))

	// let obj = {
	// 	a: 5,
	// 	b: 9,
	// 	c:12
	// }

	// let obj1 = {
	// 	...obj
	// }

	// let person = {
	// 	name: 'Shahjalal',
	// 	email: 'Shahjalalrafi5@gmail.com',
	// 	address: {
	// 		city: 'chittagong',
	// 		country: 'Bangladesh'
	// 	}
	// }

	// let {name, email, address, address: {city, country}} = person
	// console.log(email,name, country,city)

	// let about = {
	// 	name: 'Shahjalal',
	// 	age: '21',
	// 	address: {
	// 		locatio:'chittagong',
	// 		country: 'Bangladesh',
	// 		number: '019342974739'
	// 	}
	// }
	// let {name, age, address, address: {locatio, country, number}} = about
	// console.log(age, number)


	// var object = [
	// 	['a','whats up?'],
	// 	['b', 028497]
	// ]
	// console.log(Object.fromEntries(object))

	// var obj = {
	// 	a: 'hello',
	// 	b: 0273490
	// }

	// console.log(Object.entries(obj))

	//arr = [2, 3, 5, 7]
	// function createIterator (collection) {
		
	// 	let i = 0
	// 	return {
	// 		next() {
	// 			return {
	// 				done: i >= collection.length,
	// 				value: collection[i++]
	// 			}
	// 		}
	// 	}
	// }

	// let iterate = createIterator(arr)

	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())

	// let iterate = arr[Symbol.iterator]()

	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())

	// let str = 'hello'

	// let itrte = str[Symbol.iterator]()
	// console.log(itrte.next())
	// console.log(itrte.next())
	// console.log(itrte.next())
	// console.log(itrte.next())
	// console.log(itrte.next())
	// console.log(itrte.next())

	// let str = 'Shahjalal rafi'

	// for(let v of str){
	// 	console.log(v)
	// }

	// let arr = [4, 6, 7, 2, 9]
	// for(let v of arr) {
	// 	console.log(v)
	// }

	// let obj = {
	// 	start: 1,
	// 	end: 5,

	// 	[Symbol.iterator]: function* () {
	// 		let currentValue = this.start
	// 		while(currentValue <= this.end) {
	// 			yield currentValue++
	// 		}
	// 	}
	// }

	// let iterate = obj[Symbol.iterator]()

	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())
	// console.log(iterate.next())

	// arr = [12, 5, 7, 17]
	// function* generate(collection) {
	// 	for(let i= 0; i < collection.length; i++) {
	// 		yield collection[i]
	// 	}
	// }

	// let it = generate(arr)
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())

	// let arr = [4, 6, 2, 7]

	// function* gene(collection) {
	// 	for(let i = 0; i < collection.length; i++) {
	// 		yield collection[i]
	// 	}
	// }

	// let it = gene(arr)

	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())

	// let hmm = new Map([
	// 		['a', 10],
	// 		['b', 20],
	// 		['c', 30]
	// 	])
	// hmm.set('d', 40)
	// console.log(hmm)
	// console.log(hmm.keys())
	// console.log(hmm.values())
	// console.log(hmm.entries())
	// console.log(hmm.delete('b'))
	// console.log(hmm.entries())
	// hmm.set('m', 100)
	// console.log(hmm.entries())

	// class rectangle {
	// 	constractor(width, height) {
	// 		this.width = width
	// 		this.height = height
	// 	}

	// 	draw() {
	// 		console.log('drawing...')
	// 	}
	// }

	// let rect1 = new rectangle(24, 55)
	// console.log(rect1)
	// console.log(typeof rectangle)

	// class Person{
	// 	constractor(name, email) {
	// 		this.name = name,
	// 		this.email = email
	// 	}

	// 	print() {
	// 		console.log(this.name, this.email)
	// 	}
	// 	static create(str) {
	// 		let person = JSON.parse(str)
	// 		return new Person(person.name, person.email)
	// 	}
	// }

	// let str = '{"name": "Shahjalal rafi", "email": "Shahjalalrafi5@gmail.com"}'

	// let p1 = Person.create(str)
	// console.log(p1)
	// console.log(p1 instanceof Person)
	// p1.print()


	// const _name = Symbol()
	// const _email = Symbol()

	// class person {
	// 	constractor(name, email) {
	// 		this[_name] = name
	// 		this[_email] = email
	// 	}

	// 	draw() {
	// 		console.log('drawing....')
	// 	}
	// }

	// let p1= new person('Shahjalal', 'Shahjalalrafi5')
	// console.log(p1)

	// const _name = new WeakMap()
	// const _email = new WeakMap()
	// const _resize = new WeakMap()

	// class person {
	// 	constractor(name, email) {
	// 		this.size = 100
	// 		_name.set(this,name)
	// 		_email.set(this,email)
	// 		_resize.set(this,() => {
	// 			console.log(this.size)
	// 		})
	// 	}

	// 	draw() {
	// 		console.log('drawing....')
	// 		console.log(_name.get(this), _email.get(this))
	// 		_resize.get(this)()
	// 	}
	// }

	// let p1= new person('Shahjalal', 'Shahjalalrafi5')
	// console.log(p1)

	// const _name = new WeakMap()
	// const _email = new WeakMap()
	// const _resize = new WeakMap()

	// class person {
	// 	constractor(name, email) {
	// 		this.size = 100
	// 		_name.set(this,name)
	// 		_email.set(this,email)
	// 		_resize.set(this,() => {
	// 			console.log(this.size)
	// 		})
	// 	}

	// 	get name() {
	// 		return _name.get(this)
	// 	}

	// 	set name(v) {
	// 		return _name.set(this, v)
	// 	}

	// 	draw() {
	// 		console.log('drawing....')
	// 		console.log(_name.get(this), _email.get(this))
	// 		_resize.get(this)()
	// 	}
	// }

	// let p1= new person('Shahjalal', 'Shahjalalrafi5')
	// console.log(p1)

	// class shape {
	// 	constractor(color) {
	// 		this.color = color
	// 	}

	// 	draw() {
	// 		console.log('drawing...')
	// 	}
	// }

	// class rectangle extends shape {
	// 	constractor(color,width, height) {
	// 		Super(color)
	// 		this.width = width
	// 		this.height = height
	// 	}

	// 	calculate() {
	// 		return this.width * this.height
	// 	}
	// }

	// let r = new rectangle('green', 4, 5)
	// console.log(r)
	// r.draw()

	// function changeToInt(v) {
	// 	let result = Number.parseInt(v)
	// 	if(!result) {
	// 		return 'please provide a value which is able to convert integer'
	// 	}
	// 	return result
	// }

	// let res = changeToInt('34.983')
	// console.log(res)

	// function makeWords(text) {
	// 	try{
	// 		let str = text.trim()
	// 		let words = str.split(' ')
	// 		return words
	// 	}
	// 	catch(e) {
	// 		console.log('please provide a valid number')
	// 	}
	// }

	// let words = makeWords(83)
	// console.log(words)

	// try{
	// 	console.log('i am line 1')
	// 	throw new error('i am your error')
	// 	console.log('i am line 2')
	// 	console.log('i am line 3')
	// }
	// catch(e) {
	// 	console.log(e.message)
	// }


	// var actualArr = ['Apple', 'Apple', 'Banana', 'Mango', 'Strawberry', 'Banana'];

	// console.log('Actual Array: ' + actualArr);

	// var filteredArr = actualArr.filter(function(item, index) {
 // 	 if (actualArr.indexOf(item) == index)
 //    	return item;
	// });

	// console.log('Filtered Array: ' + filteredArr);


	// let arr = [4, 6, 9, 4, 8, 6, 8]

	// let filteredArr = arr.filter(function(item, index) {
	// 	if(arr.indexOf(item) == index)
	// 		return item
	// })
	// console.log(filteredArr)


	// const test = document.querySelector(".title")
	// const click = document.querySelector(".btn")

	// click.addEventListener('click',function () {
	// 	test.classList.toggle('change')
	// })

	// const manList = document.querySelectorAll('.name-list li')

	// for(user of manList) {
	// 	user.addEventListener('click',function() {
	// 		this.style.color = "red"
	// 	})
	// }




	
	// const btn = document.querySelector('button')

	// btn.addEventListener('mouseover',function() {
	// 	alert('hello')
	// 	console.log('hey, whats up?')
	// })
	

	// let arr = [2, 5, 7, 12, 23]

	// let newArr = arr.map(item => {
	// 	return item * 3
	// })
	// console.log(newArr)

	// let names = ['rafi', 'rakib', 'tasib']

	// let newName = names.map(item => {
	// 	return item 
	// })
	// console.log(newName)

	// arr = [4, 6, 7, 23, 9]

	// function add(a, b, c, d, e) {
	// 	return a + b + c + d + e 
	// }
	// console.log(add(...arr))
	// console.log(Math.max(...arr))

	// let product = {
	// 	name: "hp9273",
	// 	model: 39378594
	// }

	// let place = {
	// 	location: "lal khan bazar",
	// 	district: "chittagong"
	// }

	// let store = {...product, ...place}

	// console.log(store)


	// let list = document.getElementsByTagName('li')

	// let lists = [...list]

	// lists.forEach((li,ind) => {
	// 	let text = li.innerHTML
	// 	li.innerHTML= `${ind + 1}-${text}`
	// })


	// let li = createElements('li', 'list', 'four')
	// let p1 = createElements("p", "lead1", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
	// let p2 = createElements("p", "lead2", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")


	// let list = document.getElementById('unorder')
	// list.appendChild(li)

	// let div = createElements('div')
	// append(div,[p1,p2])
	// document.getElementsByClassName('hmm')[0].appendChild(div)

	// function createElements(tagName, className, innerHTML) {
	// 	let tag = document.createElement('tagName')
	// 	tag.className = className || ''
	// 	tag.innerHTML = innerHTML || ''
	// 	return tag
	// }

	// function append(parent, children) {
	// 	children.forEach(child => parent.appendChild(child))
	// }


//DOM PRACTICE

	//let li = createElements('li', 'list', 'four')
	// let para1 = createElements('p','lead1',"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
	// let para2 = createElements('p', 'lead2', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
	// let div = createElements('div')
	// append(div,[para1,para2])
	// // document.getElementsByClassName('hmm')[0].appendChild(div)
	// list.insertAdjacentElement('beforebegin',div)

	//let list = document.getElementById('unorder')
	//list.appendChild(li)
	


	// function createElements(tagName, className, innerHTML) {
	// 	let tag = document.createElement('tagName')
	// 	tag.className = className || ''
	// 	tag.innerHTML = innerHTML || ''
	// 	return tag
	// }

	// function append(parent,children){
	// 	children.forEach(child => parent.appendChild(child))
	// }

	// let lastChild = list.lastElementChild.cloneNode()

	// lastChild.innerHTML = 'five'
	// list.appendChild(lastChild)


	// let styleObj = {
	// 	background: 'red',
	// 	color: '#000',
	// 	fontSize: '30px'
	// }

	// let lists = document.getElementById('unorder');

	// [...lists.children].forEach(li=> Object.assign(li.style, styleObj))

	// Object.assign(lists.style, styleObj)

	// let btn = document.getElementById('btn')
	// let lists = document.getElementById('unorder')

	// btn.addEventListener('click', function(e) {
	// 	 let item = lists.lastElementChild.cloneNode(true)
	// 	 item.innerHTML = 'new list'
	// 	 lists.appendChild(item)
	// })

	// lists.addEventListener('click', function(e) {
	// 	if(this.contains(e.target)) {
	// 		e.target.remove()
	// 	}
	// })

	// let box = document.getElementById('box')

	// box.addEventListener('mouseover', function(e) {
	// 	document.getElementById('x-value').innerHTML = e.offsetX
	// 	document.getElementById('y-value').innerHTML = e.offsetY
	// 	if(e.offsetX === 50 && e.offsetY){
	// 		alert('50 50')
	// 	}
	// })

	// let input = document.getElementById('name')

	// input.addEventListener('keypress', function(e) {
	// 	if(event.key === 'Enter') {
	// 		document.getElementById('demo-id').innerHTML = `My name is ${event.target.value}`
	// 	}
	// 	 event.target.value = ''
	// })

	// let skills = document.getElementsByName('skill')
	// let result = document.getElementById('result')

	// checkedskills = [];

	// [...skills].forEach(skill => {
	// 	skill.addEventListener('change', function(e) {
	// 		if(e.target.checked) {
	// 			checkedskills.push(e.target.value)
	// 			outputSkills(result, checkedskills)
	// 		}else {
	// 			let ind = checkedskills.indexOf(event.target.value)
	// 			checkedskills.splice(ind, 1)
	// 			outputSkills(result, checkedskills)
	// 		}
	// 	})
	// })

	// let outputSkills = function(parent, skills) {
	// 	let result = ''
	// 	skills.forEach((skill, index) => {
	// 		result += `(${index + 1}) ${skill}  `
	// 	})
	// 	parent.innerHTML = result
	// }

	// let list = document.getElementById('unorder')

	// list.addEventListener('dblclick', function(event) {
	// 	if(this.contains(event.target)) {
	// 		let innertext = event.target.innertext
	// 		event.target.innerHTML = ''
	// 		let inputBox = createInputBox(innertext)
	// 		event.target.appendChild(inputBox)

	// 		inputBox.addEventListener('keypress', function(e) {
	// 			if (e.key === 'Enter') {
	// 				event.target.innerHTML = e.target.value
	// 			}
	// 		})
	// 	}
	// })
	
	// function createInputBox(value) {
	// 	let inp = document.createElement('input')
	// 	inp.type = 'text'
	// 	inp.className = 'input'
	// 	inp.value = value

	// 	return inp
	// }

	// let form = document.getElementById('form')

	// form.addEventListener('submit', function(e) {
	// 	e.preventDefault()

	// 	let isvalid = false
	// 	let formDAta = {};
	// 	[...this.elements].forEach(el => {
	// 		if(el.type !== 'submit') {
	// 			isvalid = validator(el)
	// 			if(isvalid){
	// 				formDAta[el.name] = el.value
	// 			}else{
	// 				alert(`${el.name} is required`)
	// 			}
	// 		}
	// 	})
	// 	if(isvalid) {
	// 		console.log(formDAta)
	// 		this.reset()
	// 	}
	// })

	// function validator(el) {
	// 	if(!el.value) {
	// 		return false
	// 	}
	// 	return true
	// }

		// let form = document.getElementById('form')

		// form.addEventListener('submit', function(e) {
		// 	e.preventDefault()

		// 	let isvalid = false
		// 	let formDAta = {};
		// 	[...this.elements].forEach(el => {
		// 		if(el.type !== 'submit') {
		// 			isvalid = validator(el)
		// 			if(isvalid) {
		// 				formDAta[el.name] = el.value
		// 			}else {
		// 				alert(`${el.name} is required`)
		// 			}
		// 		}
		// 	})
		// 	if(isvalid) {
		// 		console.log(formDAta)
		// 		this.reset()
		// 	}
		// })

		// function validator(el) {
		// 	if(!el.value) {
		// 		return false
		// 	}
		// 	return true
		// }

	// let arr = [35, 64, 45, 33, 20, 76, 23]

	// let lowestNumber = arr[0]
	// let largestNumber = arr[0]

	// for(let i = 1; i < arr.length; i++ ) {
	// 	if(lowestNumber > arr[i]) {
	// 		lowestNumber = arr[i]
	// 	}
	// 	if(largestNumber < arr[i]) {
	// 		largestNumber = arr[i]
	// 	}
	// }
	// console.log(lowestNumber)
	// console.log(largestNumber)

	// let response = new Array(9)

	// response.fill(false)

	// for(let i = 0; i < response.length; i++) {
	// 	let rand = Math.floor(Math.random() * 10 + 1)
	// 	response[i] = rand > 5 ? 'x' : 'o';
	// }
	// console.log(response)

	// arr1 = ['Shahjalal rafi', 'shahaziz rakib', 'samiha islam']

	// function update(arr) {
	// 	for(let i = 0; i < arr.length; i++) {
	// 		arr[i] = `${i+1}.${arr[i]}`
	// 	}
	// 	return arr
	// }
	// console.log(update(arr1))



	// let matrixA = [
 //    	[2, 6, 4],
 //    	[4, 2, 4],
 //    	[9, 6, 4],
	// ]
	// let matrixB = [
 //    	[3, 3, 4],
 //    	[2, 7, 4],
 //    	[9, 1, 4],
	// ]

	// let matrixSum = (matrixA, matrixB) => {
 //    let result = []
 //    for(let i = 0;i < matrixA.length; i++) {
 //        	let row = []
 //        	for(let j = 0; j < matrixA[i].length; j++) {
 //            	row.push(matrixA[i][j] + matrixB[i][j])
 //        	}
 //        	result.push(row)
 //    	}
 //    	return result
	// }

	// let matrixC = matrixSum(matrixA, matrixB)
	// console.log(matrixC)


	// let arr3 = [1, 2, 3, 5, 7, 9, 12]
	// let arr4 = [4, 6, 8, 10, 11]

	// arr3.splice(3, 0, ...arr4)
	// console.log(arr3)

	
	// function changeToInt(v) {
	// 	let result = Number.parseInt(v)

	// 	if(!result) {
	// 		return 	console.log('please input a number which one is readable...')
	// 	}
	// 	return result
	// }

	// result = changeToInt('')
	// console.log(result)

	// let inpu = document.getElementById('text-input')
	// let submit = document.getElementById('submit')

	// submit.addEventListener('click', function() {
	// 	let num = inpu.value
	// 	if(num < 5) {
	// 		throw "input is to low"
	// 	}else if (num >10) {
	// 		throw "input is to high"
	// 	}
	// })


	// let students = [
	// {id: 1, name: 'shahaziz'},
	// {id: 2, name: 'Shahjalal'},
	// {id: 3, name: 'samiha islam'},
	// {id: 4, name: 'jabed hossain'},
	// {id: 5, name: 'humaiyun ahmed'},
	// ]

	// let getId = 3
	// let changeName = 'tanha'

	// for(let i = 0; i < students.length; i++) {
	// 	if(getId === students[i].id) {
	// 		students[i].name = changeName
	// 		break
	// 	}
	// }
	// console.log(students)

	// let arr = [1, 3, 5, 6, 89, 23, 56]

	// arr.shift()
	// arr.pop()

	// console.log(arr)

	// let maxSize = 30

	// class stack {
	// 	constructor() {
	// 		this.list = new Array(maxSize)
	// 		this.top = -1
	// 	}
	// 	push(item) {
	// 		if(this.list >= maxSize) {
	// 			console.log('stackOverflow')
	// 			return false
	// 		}
	// 		this.list[++this.top] = item
	// 		return true
	// 	}
	// 	pop() {
	// 		if(this.isEmpty()) {
	// 			console.log('stackUnderflow')
	// 			return false
	// 		}
	// 		let item = this.list[this.top]
	// 		this.list[this.top]
	// 		this.top--
	// 		return item
	// 	}
	// 	peek() {
	// 		if(this.isEmpty()) {
	// 			console.log('stackUnderflow')
	// 			return false
	// 		}
	// 		return this.list[this.top]
	// 	}
	// 	isEmpty() {
	// 		return this.top < 0
	// 	}
	// }

	// let maxSize = 30 

	// class stack{
	// 	constractor() {
	// 		this.list = new Array(maxSize)
	// 		this.top = -1
	// 	}
	// 	push(item) {
	// 		if(this.list >= maxSize) {
	// 			console.log('stackOverflow')
	// 			return false
	// 		}
	// 		this.list[++this.top] = item
	// 		return true	
	// 	}
	// 	pop() {
	// 		if(this.isEmpty()) {
	// 			console.log('stackUnderflow')
	// 			return false
	// 		}
	// 		let item = this.list[this.top]
	// 		this.list[this.top]
	// 		this.top--
	// 		return item


	// 	}
	// 	peek() {
	// 		if(this.isEmpty()) {
	// 			console.log('stackUnderflow')
	// 			return false
	// 		}
	// 		this.list[this.top]
	// 	}
	// 	isEmpty() {
	// 		return this.top < 0
	// 	}
	// } 




	// const maxSize = 30

	// class queue {
	// 	constructor() {
	// 		this.front = 0
	// 		this.rear = 0
	// 		this.queue = new Array(maxSize)
	// 	}

	// 	enqueue(item) {
	// 		if(this.rear == maxSize) {
	// 			console.log('queue is full')
	// 			return false
	// 		}
	// 		this.queue[this.rear++] = item
	// 	}

	// 	dequeue() {
	// 		if(this.front == this.rear) {
	// 			console.log('queue is isEmpty')
	// 			return false
	// 		}
	// 		item = this.queue[this.front]
	// 		for( let i = this.front; i < this.rear-1; i++) {
	// 			this.queue = this.queue[i - 1]
	// 		}
	// 		delete this.queue[--this.rear] 
	// 		return
	// 	}

	// 	showQueue() {
	// 		if(this.front == this.rear) {
	// 			console.log('queue is isEmpty')
	// 			return false
	// 		}
	// 		for( let i = this.front; i < this.rear; i++) {
	// 			console.log(this.queue[i])
	// 		}
	// 	}

	// 	next() {
	// 		if(this.front == this.rear) {
	// 			console.log('queue is isEmpty')
	// 			return false
	// 		}
	// 		return this.queue == this.front
	// 	}
	// }

	// const li = new queue()

	// li.enqueue('item one')
	// li.enqueue('item two')
	// li.enqueue('item three')
	// console.log(li)
	// li.showQueue()
	// console.log(li)

	// function myForeach(arr, cb) {
	// 	for(let i = 0; i < arr.length; i++) {
	// 		cb(arr[i], i, arr)
	// 	}
	// }

	// let hmm = [2, 4, 7, 2]
	// let sum = 0

	// function sunFunc(v) {
	// 	sum += v
	// }

	// myForeach(hmm, sunFunc)
	// console.log(sum)

	// let length = 100

	// for(let i = 0; i<= length; i+=2) {
	// 	console.log(i)
	// }


	// let qw = {
	// 	name: 'hsh',
	// 	age: 34
	// }
	// let k = Object.keys(qw)
	// console.log(k)



	// for ( let i = 1; i <= 100; i++) {
	// 	if(i % 3 == 0 && i% 5 == 0) {
	// 		console.log('its multiple by both number')
	// 	}else if(i % 3) {
	// 		console.log('multiple by 3')
	// 	}
	// 	else if(i % 5) {
	// 		console.log('multiple by 5')
	// 	}
	// 	else(console.log(i))
	// }
	
	// let length = 10

	// for(let i = 0; i < length; i++) {
	// 	if(i >= 3 && i <= 7){
	// 		console.log(i)
	// 	}
	// }

// 	function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '*';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '*';
//     }
// }

// //then call the function
// generatePyramid();

	
	// const reverse = (num) => {
	// 	reversed = ''

	// 	while(num > 0) {
	// 		reversed += (num % 10)
	// 		num = Math.floor(num / 10)
	// 	}
	// 	return parseInt(reversed)
	// }

	// const isPalindrome = (num) => {
	// 	if(num === reverse(num)){
	// 		return true
	// 	}
	// 	return false
	// }

	// console.log(isPalindrome(121))

	// const studentArray = [
	// { id: 1, name: 'Shahjalal rafi', cgpa: 3.44, email: 'shahjalalrafi5@gmail.com'},
	// { id: 2, name: 'Shahaziz rakib', cgpa: 2.44, email: 'shahaziz@gmail.com'},
	// { id: 3, name: 'Samiha islam tabassum', cgpa: 3.24, email: 'samihaislam@gmail.com'},
	// { id: 4, name: 'ohidul islam tasib', cgpa: 3.74, email: 'ohidul@gmail.com'}
	// ]

	// const mapedArray = studentArray.map((value) => {
	// 	return{
	// 		...value,
	// 		title: `hello ${value.name} your result has been published`,
	// 		msg: `hello ${value.name} your result has been published and you got ${value.cgpa}.which means you ${value.cgpa > 3 ? 'passed' : 'failed'}`
	// 	}
	// })
	// console.log(mapedArray)

// 	function FileName(extention){
//     if(entention.endsWith('pptx')){
//         return  console.log(`this is a ${extention} file`);
//     }else if(entention.endsWith('pdf')){
//         return console.log(`this is a ${extention} file`);
//     }else if(entention.endsWith('png')){
//         return console.log(`this is a ${extention} file`)
//     }else if(entention.endsWith('jpeg')){
//         return console.log(`this is a ${extention} file`)
//     }else{
//         return console.log(`this is out of our topic`)
//     }

// }

// FileName('pdf')


	// let file = prompt('...')

	// if(file.endsWith('pptx')){
 //         console.log(`this is a ${file} file`);
 //    }else if(file.endsWith('pdf')){
 //        console.log(`this is a ${file} file`);
 //    }else if(file.endsWith('png')){
 //        console.log(`this is a ${file} file`)
 //    }else if(file.endsWith('jpeg')){
 //        console.log(`this is a ${file} file`)
 //    }else{
 //        console.log(`this is out of our topic`)
 //    }

 // let file = prompt('..')

 // if(file.endsWith('df')) {
 // 	console.log('this is pdf file')
 // }else {
 // 	alert('please input pdf file')
 // }


 // let file = ['pdf', 'psd', 'jpeg', 'png']

	// for(let i = 0; i < file.length; i++){
	// 	if(i == file.i.endsWith('pdf')){
	// 		console.log('this is pdf file')
	// 	}else if(i = file.i.endsWith('psd')){
	// 		console.log('this is psd file')
	// 	}else if(i = file.i.endsWith('peg')){
	// 		console.log('this is jpeg file')
	// 	}else if(i = file.i.endsWith('png')){
	// 		console.log('this is png file')
	// 	}else{
	// 		console.log('not file')
	// 	}
	// }
	// console.log(file)

	// let name = "hello Bangladesh"
	// let name = "Lovely Bangladesh";
	// for( let i = 0; i <= name.length; i++) {
	// 	if(name[i] == 'l' || name[i] == 'L'){
	// 		console.log(i)
	// 	}
	// }
	// console.log(name)



// 	let msg = `The file concerned may have been damaged
//  moved, deleted, or a bug may have caused the error.
// Alternatively, the file simply might not exist, or the 
// ser has mistyped its name. More frequent on command
// line interfaces than on graphical user interfaces where
// files are presented iconically and users do not type file names.`
	

// 		if(msg.includes('error')) {
// 		console.log('this is error')
// 	}
// 	else{
// 		console.log('succesfull')
// 	}

// 	

	// let studentArray = [
	// { id: 1, name: 'Shahjalal rafi', cgpa: 3.44, email: 'shahjalalrafi5@gmail.com', ammount:0},
	// { id: 2, name: 'Shahaziz rakib', cgpa: 2.44, email: 'shahaziz@gmail.com', ammount: 2300},
	// { id: 3, name: 'Samiha islam tabassum', cgpa: 3.24, email: 'samihaislam@gmail.com', ammount: 0},
	// { id: 4, name: 'ohidul islam tasib', cgpa: 3.74, email: 'ohidul@gmail.com', ammount: 2300}
	// ]

	// const mapedArray = studentArray.map((value) => {
	// 	return{
	// 		...value,
	// 		title: `hello ${value.name} your result has been published`,
	// 		msg: `hello ${value.name} your result has been published and you got ${value.cgpa}.which means you ${value.cgpa > 3 ? 'passed' : 'failed'}`
	// 	}
	// })
	// console.log(mapedArray)
	
	// let passed = studentArray.filter( value => value.cgpa > 3)
	// console.log(passed)
	// let due = studentArray.filter( value => value.ammount )
	// console.log(due)

	// let msg = passed.map( (value) => {
	// 	return{
	// 		...value,
	// 		msg: `study more or work hard`
	// 	}
	// })
	// console.log(msg)

	// let arr = [2, 4, 6, 12, 75, 34]

	// for( let i = 0; i < arr.length; i++) {
	// 	if(arr[i] < 5) {
	// 		return true
	// 	}
	// 	else {
	// 		return false
	// 	}
	// }

	// console.log(arr)

	// for(let i = 0; i < arr.length; i++) {
	// 	function myFunction(num) {
	// 		return num >= 18
	// 	}
	// }

	// let hmm =arr.some(myFunction)
	// console.log(hmm)

	// let numbers = [2, 4, 7, 1, 45]


	// function sum(acc, cur) {
	// 	return acc += cur
	// }

	// let total = numbers.reduce(sum)
	// console.log(total)

	// const total = numbers.reduce((acc, cur) => {
	// 	return acc += cur
	// })
	// console.log(total)

	// const average = numbers.reduce((acc, cur, index, arr) => {
	// 	 acc += cur
	// 	if( index === arr.length-1) {
	// 		return acc / arr.length
	// 	}
	// 	return acc
	// })
	// console.log(average)


	// let arr = [[2, 4], 7, [3, 9], [8]]

	// let flatarr = arr.flat()
	// console.log(flatarr)

	// let flatarr1 = arr.reduce((acc, cur) => {
	// 	return acc.concat(cur)
	// },[])
	// console.log(flatarr1)

	//let arr = [3, 5, 7, 8]

	// let map = arr.map((x) => {
	// 	return x*2
	// })
	// console.log(map)

	// let reducedArray = arr.reduce((acc, cur) => {
	// 	return acc.concat(cur * 2)
	// },[])
	// console.log(reducedArray)


	



	// function myReduce(arr, cb, int) {
	// 	let acc = int, start = 0
	// 	if(!int) {
	// 		acc = arr[0]
	// 		start = 1
	// 	}

	// 	for(let i = start; i < arr.length; i++) {
	// 		acc = cb(acc, arr[i], i, arr)
	// 	}
	// 	return acc
	// }

	// let arr = [2, 4, 5, 8, 2]

	// let sum = myReduce(arr, (acc, cur) => {
	// 	return acc + cur
	// })

	// console.log(sum)

	// let skill = [
	// 	'java',
	// 	'python',
	// 	'javascript',
	// 	'c-programing',
	// 	'java',
	// 	'java',
	// 	'javascript',
	// 	'python'
	// ]
		
	// let countable = myReduce(skill,(acc, cur) => {
	// 	if(acc[cur]) {
	// 		acc[cur]++
	// 	}else {
	// 		acc[cur] = 1
	// 	}
	// 	return acc
	// },{})
	// console.log(countable)




	// let arr = [
	// 	[3, 5],
	// 	[4, 2],
	// 	[9, 5]
	// ]
	// let reducedright = arr.reduceRight((acc, cur) => {
	// 	return acc.concat(cur)
	// })

	// console.log(reducedright)

	// let num = [2, 4, 6, 7]

	// let sum = num.reduceRight((acc, cur) => {
	// 	console.log(`acc - ${acc}, cur- ${cur}`)
	// 	return acc + cur
	// },0)

	// console.log(`sum = ${sum}`)

	


	// let product = [
	// 	{name: 'javascript cookbook', price: 350},
	// 	{name: 'java book', price: 250},
	// 	{name: 'python all you need to know', price: 380},
	// 	{name: 'javascript cookbook', price: 350},
	// 	{name: 'javascript cookbook', price: 350},
	// 	{name: 'html book', price: 350},
	// 	{name: 'javascript cookbook', price: 350}
	// ]

	// let invoice = product.reduce((acc, cur) => {
	// 	if(acc[cur.name]) {
	// 		acc[cur.name].quantity++
	// 		acc[cur.name].price += cur.price
			
	// 	}else {
	// 		acc[cur.name] = {
	// 			price: cur.price,
	// 			quantity: 1
	// 			// product.price += sum
	// 		}
	// 	}
	// 	return acc
	// 	return sum
	// }, {})
	// console.log(invoice)



	// let repeat = function repeat(hello, count) {
	// 	if(typeof(count) == 'undifiend') {
	// 		count = 1
	// 	}
	// 	return count < 1 ? '' : new Array(count + 1).join(hello)
	// }
	// console.log(repeat('Ha!',4));



	// //length of string without using library
	// let len = 'hello, whats up?'
	// for(let i = 0; i < len.length; i++) {
	// 	console.log(len)
	// }


	// // count the total number of words in a string.
	// let str = 'hello, whats up?'

	// let answer = str.split(' ')
	// console.log(answer)


	// const name = 'shahaziz'

	// function reversed(a) {
	// 	console.log(name)
		
	// 	return(name.split('').reverse().join(''))
	// }

	// console.log(reversed())


	// let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'B', 'C', 'D', 'E']
	// const charecterCount = (str) => {
	// 	let vowel = 0
	// 	let consonent = 0

	// 	for(let i = 0; i < str.length; i++) {
	// 		if(str)
	// 	}
	// }


	// let number = [2, 5, 8, 23, 27, 78, 34, 6, 64, 743]


	// let count = (num) => {
	// 	for(let i = 0; i < number.length; i++) {
	// 		let small = 0
	// 		let large = 0
	// 	if(number[i] <= 50) {
	// 		small += number[i]
	// 	}else if (number[i] <= 100) {
	// 		large += number[i]
	// 	}else{
	// 		console.log('no need')
	// 	}
	// 	return small = large
	// }
	// }
	


	// const sum = (arr) => {
	// 	let lowestNumber = 0
	// 	let highesstNumber = 0
	// 	let a = arr

	// 	a.forEach((n) => {
	// 		if(n > 0  && n<=50) {
	// 			lowestNumber += n
	// 		}else if(n >50 && n <= 100) {
	// 			highesstNumber += n
	// 		}else{
	// 			console.log('no')
	// 		}
	// 	})
	// 	console.log(`LowerSum = ${lowestNumber}`);
 //  		console.log(`HigherSum = ${highesstNumber}`)
	// }

	// sum([2,5,33,77,22,95,999,0,-1,10]);



	// function elementMatch(number, element) {
 //  		let repeat = 0;
 //  		while (number > 0) {
 //    		if (number % 10 == element) repeat++;
 //    		number = Math.floor(number / 10);    
 //  		}

 //  		console.log(repeat);
  
	// }

	// elementMatch(134545444, 4); //5



	// for(let i = 0; i < 3; i++) {
	// 	document.querySelectorAll('.button')[i].addEventListener('click', function(e) {
	// 		let text = this.innerHTML

	// 		switch(text) {
	// 			case'a':
	// 				var audio = new Audio('sounds/a.mp3')
	// 				audio.play()
	// 				break;
			
	// 			case'b':
	// 				var audio = new Audio('sounds/b.mp3')
	// 				audio.play()
	// 				break;

	// 			case'c':
	// 				var audio = new Audio('sounds/c.mp3')
	// 				audio.play()
	// 				break;

	// 		}
	// 	})
	// }



	// function largestWord(str) {
	// 	let words = str.split(' ')
	// 	let largestWord = ''

	// 	for(let word of words) {
	// 		if(word.length > largestWord.length) {
	// 			largestWord = word
	// 		}
	// 	}
	// 	return largestWord
	// }

	// console.log(largestWord(largestWord('i wake up early in the morning')))
	// console.log(largestWord(largestWord('could you please, give me some money?')))


	// function mathSequence(arr) {
	// 	let arth = new Set()
	// 	let geo = new Set()

	// 	for(let i = 1; i < arr.length; i++) {
	// 		let number1 = arr[i] - arr[i-1]
	// 		arth.add(number1)
	// 		let number2 = arr[i] / arr[i-1]
	// 		geo.add(number2)
	// 	}
	// 	if(arth.size === 1 ) {
	// 		return 'arithmetic'
	// 	}
	// 	if(geo.size === 1) {
	// 		return 'geomethric'
	// 	}
	// 	return -1
	// }

	// console.log(mathSequence([2, 4, 6, 8]))
	// console.log(mathSequence([2, 4, 8, 16]))
	// console.log(mathSequence([2, 4, 8, 14]))


	// const menu = [
	// {name: 'burger',
	//  category: 'breakfast'
	// },
	// {name: 'fried-rice',
	//  category: 'lunch'
	// },
	// {name: 'coffe',
	//  category: 'breakfast'
	// },
	// {name: 'coke',
	//  category: 'lunch'
	// },
	// {name: 'soap',
	//  category: 'dinner'
	// },
	// ]


	// const categories = ['all', ...new Set(menu.map((item) => item.category))]
	// console.log(categories)

	// const button = document.querySelector('.result')
	// button.innerHTML = categories.map((category) => {
	// 	return `<button>${category}</button>`
	// }).join('')






	// const reverse = function(str) {
	// 	let arr = str.split(' ')
	// 	return arr.map((item) => {
	// 		return item.split('').reverse().join('')
	// 	}).join(' ')
	// }

	// console.log(reverse("I evol uoy os !hcum"))





	//let arr = [3, 7, 1, 23, 64, 76 , 23, 8]

	// let odd = arr.reduce((acc, cur) => {
	// 	if(cur % 2 === 1) {
	// 		acc.push(cur)
	// 	}
	// 	return acc
	// }, [])

	// console.log(odd)


	// let square = arr.reduce((acc, cur) => {
	// 	acc.push(cur * cur)
	// 	return acc
	// }, [])
	// console.log(square)



	// let filterAndMap = arr.reduce((acc, cur) => {
	// 	if(cur % 2 == 0) {
	// 		acc.push(cur * 2)
	// 	}
	// 	return acc
	// }, [])

	// console.log(filterAndMap)




	// let javascript = {
	// 	name: 'javascript all you need to know',
	// 	author: {
	// 		name: 'Hm nayeem',
	// 		email: 'hmnayeem@gmail.com'
	// 	},
	// 	content: {
	// 		video: {
	// 			count: 240
	// 		},
	// 	},
	// };

	// let node = {
	// 	name: 'node js everything',
	// 	author: {
	// 		name: 'Hm nayeem',
	// 		email: 'hmnayeem@gmail.com'
	// 	},
	// 	content: {
	// 		video: {
	// 			count: 240
	// 		},
	// 	},
	// };

	// let react = {
	// 	name: 'javascript all you need to know',
	// 	author: {
	// 		name: 'Hm nayeem',
	// 		email: 'hmnayeem@gmail.com'
	// 	},
	// 	content: {
	// 		video: {
	// 			count: 240
	// 		},
	// 		article: {
	// 			count: 15
	// 		},
	// 		quiz: {
	// 			count: 10
	// 		},
	// 	},
	// };

	// const courses = [javascript, node, react]

	// const inspectArticle = (course) => {
	// 	const path = 'content.article.count'
	// 	return path.split('.').reduce((acc, cur) => {
	// 		if(acc) {
	// 			return acc[cur]
	// 		}
	// 		return 0
	// 	}, course)
	// }

	// courses.forEach((course) => {
	// 	console.log(`${course.name} has - article: ${inspectArticle(course)}`)
	// })



	// const links = [
	// 	{name: 'Facebook', url: 'www.shahjalalrafi/Facebook.com'},
	// 	{name: 'Youtube', url: 'www.shahjalalrafi/Youtube.com'},
	// 	{name: 'Linkedin', url: 'www.shahjalalrafi/Linkedin.com'},
	// 	{name: 'instagram', url: 'www.shahjalalrafi/instagram.com'},
	// 	{name: 'twitter', url: 'www.shahjalalrafi/twitter.com'}
	// ]


	// let template = `<ul>{{links}}</ul>`

	// let linkList = links.reduce((acc, cur) => {
	// 	acc += `<li><a href="${cur.url}">${cur.name}</a></li>`
	// 	return acc
	// },'')

	// template = template.replace('{{links}}', linkList)
	// console.log(template)



	// let words = [
	// 	'one',
	// 	'three',
	// 	'fourtyfive',
	// 	'sixteen',
	// 	'ten',
	// 	'tweleve',
	// 	'eleven',
	// ]

	// let group = words.reduce((acc, cur) => {
	// 	let len = cur.length
	// 	if(acc[len]) {
	// 		acc[len].push(cur)
	// 	}else {
	// 		acc[len] = [cur]
	// 	}
	// 	return acc
	// }, {})

	// console.log(group)

	// let everyCourse = [
	// 	{
	// 		id:'oc1',
	// 		name: 'javascript all you need to know',
	// 		topic: 'fundamental',
	// 		price: 2500
	// 	},
	// 	{
	// 		id:'oc2',
	// 		name: 'react advanced',
	// 		topic: 'advanced',
	// 		price: 2500
	// 	},
	// 	{
	// 		id:'oc3',
	// 		name: 'node js',
	// 		topic: 'basic to advanced',
	// 		price: 3000
	// 	},
	// 	{
	// 		id:'oc4',
	// 		name: 'make fun of javascript Array',
	// 		topic: 'core',
	// 		price: 1700
	// 	}
	// ]

	// let discountPrice = {
	// 	oc1: 2099,
	// 	oc2: 2099,
	// 	oc3: 2499,
	// 	oc4: 1399	
	// }
		

	// let updatedCourse = everyCourse.reduce((acc, cur) => {
	// 	if(discountPrice[cur.id]) {
	// 		cur.discountPrice = discountPrice[cur.id]
	// 	}
	// 	else{
	// 		cur.discountPrice = 0
	// 	}
	// 	acc.push(cur)
	// 	return acc
	// }, [])
	// console.log(updatedCourse)








	// let contact = [
	// 	{name: 'samir',
	// 	 number: '492 394 9202',
	// 	 email: 'samir@gmail.com'
	// 	},
	// 	{name: 'amir',
	// 	 number: '2122 394 9202',
	// 	 email: 'amir@gmail.com'
	// 	},
	// 	{name: 'bashet',
	// 	 number: '92 394 9202',
	// 	 email: 'bashet@gmail.com'
	// 	},
	// 	{name: 'jedan',
	// 	 number: '392 394 9202',
	// 	 email: 'jedan@gmail.com'
	// 	},
	// 	{name: 'fahim',
	// 	 number: '892 394 9202',
	// 	 email: 'fahim@gmail.com'
	// 	},
	// 	{name: 'tanver',
	// 	 number: '792 394 920',
	// 	 email: 'tanver@gmail.com'
	// 	},
	// 	{name: 'rimon',
	// 	 number: '192 394 9202',
	// 	 email: 'rimon@gmail.com'
	// 	},
	// 	{name: 'rafi',
	// 	 number: '492 394 9202',
	// 	 email: 'rafi@gmail.com'
	// 	},
	// 	{name: 'morshed',
	// 	 number: '492 394 9202',
	// 	 email: 'morshed@gmail.com'
	// 	},
	// 	{name: 'nishan',
	// 	 number: '492 394 9202',
	// 	 email: 'nishan@gmail.com'
	// 	},
	// ]


	// contact.sort((a, b) => {
	// 	if(a.name > b.name) return 1
	// 		if(b.name > a.name) return -1
	// 			return 0
	// })

	// const groupContact = contact.reduce((acc, cur) => {
	// 	let groupName = cur.name.charAt(0).toUpperCase()
	// 	if(acc[groupName]) {
	// 		acc[groupName].push(cur)
	// 	}else{
	// 		acc[groupName] = [cur.name]
	// 	}
	// 	return acc
	// }, {})

	// const desplayedList = (item) => {
	// 	console.log('desplaying contact information')
	// 	console.log('==============================')

	// 	const keys = Object.keys(item)

	// 	keys.forEach((key) => {
	// 		console.log(`group ${key}`)
	// 		console.table(group[key])
	// 	})
	// }
	// desplayedList(groupContact)


	// let myArray = [6, 12, 32, 8, 8, 10, 42, 17]

	// const bubleSort = (array, cb) => {
	// 	for(let i = 0; i < array.length - 1; i++) {
	// 		for(let j = 0; j < array.length - 1; j++) {
	// 			if(cb(array[j], array[j+1]) > 0) {
	// 				let temp = array[j]
	// 				array[j] = array[j + 1]
	// 				array[j + 1] = temp
	// 			}
	// 		}
	// 	}
	// }


	// let arr = [6, 12, 32, 8, 8, 10, 42, 17]
	// bubleSort(arr,(a, b) => a- b)
	// console.log(arr)

	// const team = [
	// 	{id: 3, name: 'shahaziz'},
	// 	{id: 8, name: 'samir'},
	// 	{id: 6, name: 'morshed'},
	// 	{id: 2, name: 'bashet'},
	// 	{id: 12, name: 'jedan'},
	// 	{id: 56, name: 'nishan'},
	// 	{id: 9, name: 'tanver'},
	// ]



	// const linearSearch = (arr, cb) => {
	// 	for(let i = 0; i < arr.length; i++) {
	// 		if(cb(arr[i])) {
	// 			return i 
	// 		}
	// 	}
	// 	return -1
	// }

	// const s1 = linearSearch(team, (item) => {
	// 	item.name == 'morshed'
	// })
	// console.log(s1)



	// let array = [4, 64, 23, 56, 87, 21, 3, 76, 25]

	// const binarySearch = (arr, key) => {
	// 	let lowest = 0
	// 	let highest = arr.length -1

	// 	while(lowest <= highest) {
	// 		let mid = Math.floor((lowest + highest)/ 2)
	// 		if(arr[mid] == key) {
	// 			return mid
	// 		} 
	// 		if(arr[mid] < key) {
	// 			lowest = mid + 1
	// 		}
	// 		if(arr[mid] > key) {
	// 			highest = mid -1
	// 		}
	// 	}
	// 	return -1
	// }

	// array.sort((a, b) => a - b)
	// console.log(array)

	// let hmm = binarySearch(array, 25)
	// console.log(hmm)




	// let f =(num) => {
	// 	sum = 0
	// 	for(let i = 0; i <= num/2; i++) {
	// 		if(num % i == 0) {
	// 			sum += i
	// 		}
	// 	}
	// 	if(sum == num) {
	// 		console.log('its a correct number')
	// 	}else {
	// 		console.log('its not a correct number')
	// 	}
	// }

	// f(28)


	// let a = [2, 5, 7]
	// let index = a.findIndex((item) => item == 5)
	// console.log(index)


	// let arrr = ['one', 'two', 'one', 'three', 8]
	// let iArr = arrr[Symbol.iterator]()

	// console.log(iArr.next())
	// console.log(iArr.next())
	// console.log(iArr.next())
	// console.log(iArr.next())
	// console.log(iArr.next())
	// console.log(iArr.next())

	// let numb = ['apple', 'ball', 'cat']

	// let keys = numb.keys()
	// let values = numb.values()
	// let entries = numb.entries()

	// console.log(keys)
	// // console.log(keys.next())
	// // console.log(keys.next())
	// // console.log(keys.next())
	// // console.log(keys.next())

	// console.log(values)
	// // console.log(values.next())
	// // console.log(values.next())
	// // console.log(values.next())
	// // console.log(values.next())

	// console.log(entries)
	// // console.log(entries.next())
	// // console.log(entries.next())
	// // console.log(entries.next())
	// // console.log(entries.next())

	// const loop = (it, name) => {
	// 	for(let v of it) {
	// 		console.log(`[${name}] - ${v}`)
	// 	}
	// }

	// loop(keys, 'key')
	// loop(values, 'value')
	// loop(entries, 'entri')



	// let ar1 = [2, 3, 4, 5]
	// let ar2 = [2, 3, 4, 5]


	// const compare = (ar1, ar2) => {
	// 	if(ar1.length !== ar2.length) {
	// 		return false
	// 	}
	// 	for(let i = 0; i < ar1.length; i++) {
	// 		if(ar1[i] !== ar2[i]) {
	// 			return false
	// 		}
	// 		return true

	// 	}
	// }

	// console.log(compare(ar1, ar2))


	
	// function validate() {
	// 	let text = document.getElementById('inp1')
	// 	let pass = document.getElementById('inp2')

	// 	if(text.value.trim() == '') {
	// 		text.style.border = '3px solid red'
	// 		return false
	// 	}else if(pass.value.trim() == '') {
	// 		pass.style.border = '3px solid red'
	// 		return false
	// 	}else if(pass.value.trim().length < 5) {
	// 		alert('password is to short')
	// 		return false
	// 	}else {
	// 		true
	// 	}
	// }


	// function findLongestWord(str) {
	// 	let words = str.split(' ')
	// 	let longest = ''
	// 	for(let word of words) {
	// 		if(word.length > longest.length) {
	// 			longest = word
	// 		}
	// 	}
	// 	console.log(longest)
	// }

	// findLongestWord('the quick brown fox jumped over the lazy dog')


	// function reg() {
	// 	let username = document.getElementById('regx').value
	// 	let regularexpression = /^([a-z 0-9]+)@([a-z 0-9]+).([a-z]{2,8})$/;

	// 	if(regularexpression.test(username)) {
	// 		alert('valid username')
	// 	}else{
	// 		alert('invalid username')
	// 		document.getElementById('regx-label').style.visibility = 'visible'
	// 	}
	// }


	// let array = [1, 2, 3, 4, 5, 6]

	// for(let i = 1; i < array.length-1; i++) {

	// 	let anotherArray = []
	// 	let next = array[i+1]
	// 	let multiple = i * next
	// 	anotherArray.push(multiple)
	// 	console.log(anotherArray)
	// }

	

	// for(let i = 1; i <= 5; i++) {
	// 	let result = ''
	// 	for(let j = 1; j <= i; j++) {
	// 		result += '* '
	// 	}
	// 	console.log(result)
	// }


	// for(var i=0; i<6; i++){
 //    	var res= ''
 //    	for(var j=0; j<=i; j++){
 //     	res += String.fromCharCode(65+j)+ ' ';
        
 //    	}
 //    	console.log(res)
	// }



	// for(let i = 1; i< 10; i++) {
	// 	if(i == 3 || i == 7) {
	// 		continue
	// 	}else{
	// 		console.log(i)
	// 	}
	// }


	// function title(str) {
	// 	let words = str.toLowerCase().split(' ')
	// 	for(let i = 0; i < words.length; i++) {
	// 		words[i] = words[i][0].toUpperCase() + words[i].slice(1)
	// 	}
	// 	return words.join(' ')
	// }

	// title("I'm a little tea pot")


	// function titleCase(str) {
	// 	let titled = str.toLowerCase().split(' ').map((item) => {
	// 		return item[0].toUpperCase() + item.slice(1)
	// 	})
	// 	return titled.join(' ')
	// }
	// titleCase("I'm a little tea pot")
	

	// function largestOfFour(arr) {
	// 	let maxes = []
	// 	for(let i = 0; i < arr.length; i++) {
	// 		let tempMax = arr[i][0]
	// 		for(let j =0; j < arr[i].length; j++) {
	// 			let currentElement = arr[i][j]
	// 			if(currentElement >= tempMax) {
	// 				tempMax = currentElement
	// 			}
	// 		}
	// 		maxes.push(tempMax)
	// 	}
	// 	return maxes
	// }

	// largestOfFour([[3, -8, -9, 6], [13, 15, 11, 29], [44, 12, 64, 98], [100, 97, 101, 23]])


// // JAVASCRIPT EVERY METHOD
// 	function isBigEnough(element) {
//   		return element < 10;
// 	}
// 	[3, 5, 7, 2, 8, 9].every(isBigEnough)
	
// // JAVASCRIPT FILTER METHOD

// 	let numbers = [13, 15, -11, 29]

// 	let filtered = numbers.filter(n => n >0)
// 	console.log(filtered)

// // JAVASCRIPT INCLUDES METHOD

// 	let include = numbers.includes(13)
// 	console.log(include)

// // JAVASCRIPT MAP METHOD
	 
// 	let maped = numbers.map((n, i, arr) => n*2)
// 	console.log(maped)

// // JAVASCRIPT SORT METHOD

// 	let sorted = numbers.sort((a,b) => {
// 		return a-b
// 	})
// 	console.log(sorted)

// // JAVASCRIPT REVERSE METHOD

// 	let numb = [2, 3, 5, 6]

// 	let reversed = numb.reverse()
// 	console.log(reversed)

// // JAVASCRIPT JOIN METHOD
	
// 	let str = 'i will make one join method'

// 	let joined = str.split(' ').join(' ')
// 	console.log(joined)

// // JAVASCRIPT PUSH METHOD

// 	var fruits = ["Banana", "Orange", "Apple", "Mango"];
// 	console.log(fruits.push("Kiwi"))

// // JAVASCRIPT POP METHOD

// 	let number = [3, 45, 6, 9]
// 	console.log(number.pop())


// 	let a = 'bashet'
// 	let b = 'zedan'

// 	console.log(a > b)

	//let name = 'i am shahjalal rafi'

	// console.log(name.substr(5, 9))
	// console.log(name.startsWith('i'))
	// console.log("     i am shahjalal rafi         ".trim())
	// console.log(name.split(' '))

	// let length = 0

	// while(true) {
	// 	if(name.charAt(length) == '') {
	// 		break
	// 	}else{
	// 		length++
	// 	}
	// }
	// console.log(length)
	

	// let number = [3, 2, 89, 6, 56]

	// let sum = 0
	// for(let i = 0; i < number.length; i++) {
	// 	sum += number[i]
	// }
	// console.log(sum)

	// for(let i = 0; i< number.length; i++) {
	// 	if(number[i] % 2 == 0) {
	// 		console.log(number[i])
	// 	}
	// }


	// let found = 6
	// let isFound = false

	// for(let i = 0; i < number.length; i++) {
	// 	if(number[i] == found) {
	// 		console.log(`data is found at index ${i}`)
	// 		isFound = true
	// 		break
	// 	}
	// }
	// if(!isFound) {
	// 	console.log('data is not found anywhere')
	// }


	// function targetFunc(str, target) {
	// 	// console.log(str.substr(-target.length))
	// 	if(str.substr(-target.length) == target) {
	// 		console.log(true)
	// 	}else {
	// 		console.log(false)
	// 	}
	// }

	// targetFunc('hellp world', 'd')


	// function repeatStringTimesNum(str, num) {
	// 	let final = ''
	// 	if(num < 0) return ''
	// 		// for(let i = 0; i< num; i++) {
	// 		// 	final += str
	// 		// }
	// 		// console.log(final)
	// 		// console.log(str.repeat(num))
	// 		if(num === 1) console.log(str)
	// 			let h = str + repeatStringTimesNum(str, num -1)
	// 			console.log(h)
	// }

	// repeatStringTimesNum('hi ', 5)


	// function isPerfectSquare(num) {
	// 	let res = parseInt(Math.sqrt(num))
	// 	return num == (res ** 2)
	// }

	
	// function isPerfectSquare(num) {
	// 	let res = parseInt(Math.sqrt(num))
	// 	return num == (res ** 2)
	// }

	// let arr = [3, 56, 36, 7, 23, 6, 43]

	// let max = -Infinity
	// for(let i = 0; i < arr.length; i++) {
	// 	if(!isPerfectSquare(arr[i])) {
	// 		if(arr[i] > max) {
	// 			max = arr[i]
	// 		}
	// 	}
	// }
	// console.log('max number is ', max)

	// let arr = [
	// 	[76, 53, 78, 97],
	// 	[74, 73, 79, 87],
	// 	[66, 83, 88, 87],
	// 	[96, 63, 78, 87]
	// ]

	// for(let i = 0; i< arr.length; i++) {
	// 	for(let j = 0; j < arr[i].length; j++) {
	// 		console.log(`element is ${i} of ${arr[i][j]}`)
	// 	}
	// }

	// let arr = [ 23, 5, 6, 7, 65]

	// for(let i = arr.length-1; i < arr[i]; i--) {
	// 	console.log(arr[i])
	// }

	// let obj = {
	// 	x: 20,
	// 	y: 30
	// }
	// console.log(obj)

	// let props = 'z'
	// obj[props] = 40
	// console.log(obj)
	// console.log(obj.x + obj.z)

	// let obj = {
	// 	x: 20,
	// 	y: 30
	// }

	// let obj1 = Object.assign({}, obj)
	// obj1.x = 30

	// console.log(obj)
	// console.log(obj1)
	

	// let arr1 = [3, 6, 8, 9]
	// let arr2 = [32, 61, 12, 2]
	// let arr3 = [13, 16, 8, 19]

	// function func(arr) {
	// 	let sum = 0
	// 	for(let i = 0; i < arr.length; i++) {
	// 		sum += arr[i]
	// 	}
	// 	console.log(sum)
	// }
	// func(arr1)
	// func(arr2)
	// func(arr3)

	// function test() {
	// 	let sum = 0
	// 	for(let i = 0; i < arguments.length; i++) {
	// 		sum += arguments[i]
	// 	}
	// 	console.log(sum)
	// }
	// test(2, 4, 56)



	// let a, b, c, weight1, weight2, weight3, avg;
	// a = 5.2
	// b = 6.4
	// c = 7.5
	// weight1 = a * 2
	// weight2 = b * 3
	// weight3 = c * 5
	// avg = ((weight1 + weight2 + weight3) / 10).toFixed(1)
	// console.log(avg)


	// let addition = function(greet, name) {
	// 	function sayHi() {
	// 		console.log(greet + ' ' + name)
	// 	}
	// 	sayHi()
	// } 

	// addition('good morning', 'shahjalalrafi')


	// let a = 10
	// function x() {
	// 	function y() {
	// 		console.log(a)
	// 	}
	// 	y()
	// }
	// x()

	// function num(n) {
	// 	function x() {
	// 		return n % 3 ==0
	// 	}

	// 	function y() {
	// 		return n % 5 == 0
	// 	}

	// 	if(x() && y()) {
	// 		console.log(n + ' ' + 'is divisible by 3 and 5')
	// 	}else{
	// 		console.log('not a valid number')
	// 	}
	// }
	// num(30)


	// function sqrt(n) {
	// 	return n * n
	// }
	// let res = sqrt(2)
	// console.log(res)

	// let point = {
	// 	x: 10,
	// 	y: 20
	// }
	// console.log(point)

	// function printFunction(point) {
	// 	point.x = 100
	// 	point.y = 200
	// 	point.z = 300
	// 	console.log(point)
	// }
	// printFunction(point )
	// console.log(point)

	// let arr = [3, 5, 7, 2, 4]

	// let sum = 0
	// arr.forEach((a,b, c) => {
	// 	sum += a
	// 	console.log(b)

	// })
	// console.log(sum)



	// let arr = [3, 5, 7, 2, 78]
	// function forEach(arr, cb) {
	// 	for(let i = 0; i < arr.length; i++) {
	// 		cb(arr[i], i, arr)
	// 	}
	// }

	// var sum = 0
	// forEach(arr, function(value, index, arr) {
	// 	sum += value
	// })
	// console.log(sum)

	// forEach(arr, function(v, i , arr) {
	// 	arr[i] = v + 5
	// })
	// console.log(arr)


// 	let arr = [9, 5, 8, 3, 6]
	// function map(arr, cb) {
	// 	let newArr = []
	// 	for(let i = 0; i < arr.length; i++) {
	// 		let temp = cb(arr[i], i , arr)
	// 		newArr.push(temp) 
	// 	}
	// 	return newArr
	// }

	// let qb = map(arr, function(value) {
	// 	return value * value * value
	// })
	// console.log(qb)

	// let mten = map(arr, function(value) {
	// 	return value * 10
	// })
	// console.log(mten)


	// function filteredArr(arr, cb) {
	// 	let newArr = []
	// 	for(let i = 0; i < arr.length; i++) {
	// 		if(cb(arr[i], i, arr)) {
	// 			newArr.push(arr[i])
	// 		}
	// 	}
	// 	return newArr
	// }

	// let fourUp = filteredArr(arr, function(value) {
	// 	return value > 4
	// })
	// console.log(fourUp)

	// let odd = filteredArr(arr, function(value) {
	// 	return value % 2 == 1
	// })
	// console.log(odd)


	// let text = '#2A2A2A'
	// let regex = /#?([\da-zA-Z]{2})([\da-zA-Z]{2})([\da-zA-Z]{2})/g

	// const matches = text.match(regex)

	// const index = text.search(regex)

	// const replaced = text.replace(regex, '#88888')

	// const testing = regex.test(text)

	// console.log(matches, index, replaced, testing)


	// let arr = [3, 6 , 2, 53, 23, 43, 56, 8]

	// let fin =  arr.find((value) => {
	// 	return value == 53
	// })
	// console.log(fin)

	// let findIndex = arr.findIndex((value) => {
	// 	return value == 53
	// })
	// console.log(findIndex)


	// let num = [
	// 	{
	// 		name: 'A',
	// 		age: 20
	// 	},
	// 	{
	// 		name: 'B',
	// 		age: 30
	// 	},
	// 	{
	// 		name: 'C',
	// 		age: 26
	// 	},
	// ]

	// num.sort((a,b) => {
	// 	return a.age - b.age
	// })
	// console.log(num)


	// let arr = [2, 35 ,6, 7, 9]

	// let res1 = arr.some((value) => {
	// 	return value >30
	// })
	// console.log(res1)

	// let res2 = arr.every((value) => {
	// 	return value > 1
	// })
	// console.log(res2)

	// function greet(msg) {
	// 	function greetings(name) {
	// 		return msg + ', ' + name + '!'
	// 	}
	// 	return greetings	
	// }
	// let text = greet('good morning')
	// console.log(text('Shahjalal'))


	// function base(n) {
	// 	return function(b) {
	// 		let result = 0
	// 		for(let i = 1; i <= n; i++) {
	// 			result += n
	// 		}
	// 		return result
	// 	}
	// }

	// let bten = base(10)
	// console.log(bten(2))

	// function sayHi(n) {
	// 	if(n == 0) {
	// 		return 1
	// 	}
	// 	console.log(n)
	// 	sayHi(n-1)
	// }
	// sayHi(10)

	// function sum(n) {
	// 	if(n == 1) {
	// 		return 1
	// 	}
	// 	return n + sum(n-1)
	// }
	// console.log(sum(5))

	// function fact(n) {
	// 	if(n == 1) {
	// 		return 1
	// 	}
	// 	return n * fact(n-1)
	// }
	// console.log(fact(4))


	// let arr = [2, 3, 5, 7]
	// function sumofArray(arr, lastIndex) {
	// 	if(lastIndex < 0) {
	// 		return 0
	// 	}
	// 	return arr[lastIndex] + sumofArray(arr, lastIndex-1)
	// }
	// console.log(sumofArray(arr, arr.length-1))

	// let rege = /#?([\da-zA-Z]{2})([\da-zA-Z]{2})([\da-zA-Z]{2})/g
	// const matches = text.match(regex)

	// const index = text.search(regex)

	// const replaced = text.replace(regex, '#88888')

	// const testing = regex.test(text)

	// console.log(matches, index, replaced, testing)


// search a date within a string using regex.

// 	let date = '22-08-1999'
// 	let searchDate = /(2{2})/

// 	const search = date.search(searchDate)
// 	console.log(search)

// 	let vowel = /[aeiou]/g

// // count the number of vowels in a given string using regex.
// 	let vowelCount = function(item) {
// 		let matches = item.match(vowel)
// 		return matches.length

// 	}
// 	console.log(vowelCount('hello'))


// let str = "hi how are you. Hi I am fine. hi hello hi";
// let re = /hi/ig;

// let arr = [];
// let match;
// do {
//     match = re.exec(str);
//     if(match) {
//         arr.push(match)
//     }

// }
// while(match != null)
// console.log(arr);

// let a = arr[2].index+1
// console.log(a)


// let str = "hi how are you. Hi I am fine. hi hello hi";
// let i = str.match(/i/gi)
// console.log(i.length)
// // let res = str.match(/hi/ig);
// // console.log(res);

// // for(let i = 0; i < res.length; i++) {
// // 	res[i]
// // }


// let str1 = "hi howI are you. Hi I am Ifine. hi hello hi"
// let res = str1.match(/i/g)
// let res1 = str1.match(/I/g)
// console.log(res)
// console.log(res1)
// if(res > res1) {
// 	console.log(res)
// }else{
// 	console.log(res1)
// }
// console.log(str.replace('hi', 'bye'))

// let str = "hi howI HI are you. Hi I am Ifine. hi hello"
// let x = /hi/gi
// let res = str.replace(x, "bye")
// console.log(res)


// let hmm = 'hey how are you?'
// let r = hmm.match(/hey/gi)
// let rep = hmm.replace(r, 'arif')
// console.log(rep)


// var testCase = parseInt(readline())
// while(testCase--) {
// 	var res
// 	var candies = parseInt(readline())
// 	if(candies%2 ==0) {
// 		res = (candies/2) -1
// 	}else{
// 		res = parseInt(candies/2)
// 	}
// 	print(res)
// }



	// function a() {
	// 	b()
	// 	console.log('i am console A')
	// }

	// function b() {
	// 	d()
	// 	console.log('i am console B')
	// }

	// function c() {
	// 	console.log('i am console C')
	// }

	// function d() {
	// 	c()
	// 	console.log('i am console D')
	// }

	// var x = 100
	// a()
	// console.log('i am global')


	// for(let i = 1; i <= 5; i++) {
	// 	setTimeout(function() {
	// 		console.log(i)
	// 	},1000 * i) 
	// }

	

	// function createCircle(radius) {
	// 	return {
	// 		radius,
	// 		draw: function() {
	// 		console.log('draw something')
	// 	}
	// 	}
	// }
	// const circle = createCircle(1)
	// console.log(circle)
	// circle.draw()


	// var phone = '0181234567'
	// var obj = {
	// 	robi: /(\+88)?[01]8[(0-9){8}]/,
	// 	gp: /(\+88)?[01]7[(0-9){8}]/,
	// 	bl: /(\+88)?[01]9[(0-9){8}]/
	// }

	// if(phone.match(obj.robi)) {
	// 	console.log('robi rumber ')
	// }
	// else if(phone.match(obj.gp)) {
	// 	console.log('gp rumber ')
	// }
	// else if(phone.match(obj.bl)) {
	// 	console.log('bl rumber ')
	// }
	// else{
	// 	console.log('not a valid number')
	// }

	// let obj = {value: 10}

	// function increase(obj) {
	// 	obj.value++
	// }

	// increase(obj)
	// console.log(obj)

	// function circle(radius) {
	// 	this.radius = radius
	// 	this.defaultLocation = {x: 0, y: 0}
	// 	this.compute = function(factor) {
	// 		console.log('my factor is ', factor)
	// 	}
	// 	this.draw = function() {
	// 		this.compute(0.1)
	// 		console.log('draw')
	// 	}
	// }

	// const Circle = new circle(10)
	// Circle.draw()




	// for(let key in Circle) {
	// 	if(typeof Circle[key] !== 'function') {
	// 		console.log(key,Circle[key])
	// 	}
	// }

	// if('radius' in Circle) {
	// 	console.log('Circle has a radius')
	// }

	// function person(name, age) {
	// 	this.name = name
	// 	this.age = age
	// 	console.log(`${this.name} is ${this.age} years old`)
	// }

	// var sakib = new person('sakib', 23)
	// console.log(sakib)


	// var createRect = function(width, height) {
	// 	return {
	// 		width: width,
	// 		height: height,
	// 		draw: function() {
	// 			console.log('draw a rectangle')
	// 			this.printProperties()
	// 			console.log(this)
	// 		},
	// 		printProperties: function() {
	// 			console.log('my width is ' + this.width)
	// 			console.log('my height is ' + this.height)
	// 		}
	// 	}
	// }

	// var rect1 = createRect(7, 10)
	// rect1.draw()


	// var createRect = function(width, height) {
	// 		this.width= width,
	// 		this.height= height,
	// 		this.draw= function() {
	// 			console.log('draw a rectangle')
	// 			this.printProperties()
	// 			console.log(this)
	// 		},
	// 		this.printProperties= function() {
	// 			console.log('my width is ' + this.width)
	// 			console.log('my height is ' + this.height)
	// 		}
	// 	}

	// var rect1 = new createRect(7, 10)
	// rect1.draw()

	// function myFunc(c,d) {
	// 	console.log(this)
	// 	console.log(this.a + this.b + c + d)
	// }

	// myFunc()
	// myFunc.call({a: 10,b: 5},5, 2)
	// myFunc.apply({a: 20,b: 5},[6, 4])

	// let r = myFunc.bind({a: 4,b: 6})
	// r(5,5)


	// function largestLine(line) {
	// 	let word = line.split(' ')
	// 	word.map((value) => {
	// 		let lengt = value.length
	// 		console.log(lengt)
	// 		for(let i = 0; i < word.length; i++) {
	// 			console.log(word)
	// 		}
	// 	})
	// }

	// largestLine('everything is perfect')


// 	var myCustomObj = {
//    name: 'Zonayed Ahmed',
//    age: 21,
//    job: 'Student',
//    anotherObj: {
//       name: 'Ahmed Zonayed',
//       value: function() {
//          console.log('My name is ' + this.name);
//       }
//    }
// }

// myCustomObj.anotherObj.value();
// myCustomObj.anotherObj.value.call(myCustomObj)


// var karim = {
//    name: 'Karim Rahman',
//    dob: 1999,
//    age: function(currentYear, msg) {
//       console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//    }
// }

// var rahim = {
//    name: 'Rahim Abdu',
//    dob: 1989
// }

// karim.age(2020, 'Hello World!')
// karim.age.apply(rahim,[2020,'hello world'])


// var myObj = {
//    name: 'Zonayed Ahmed',
//    age: 21,
//    timer: function() {
//       setTimeout(function() {
//          console.log('My name is ' + this.name);
//       }, 1000)
//     }
// }

// myObj.timer()
  

// function main() {
//     var t = parseInt(readline());
//     var chars = ['a', 'b', 'c'];
//     for (var i = 0; i < t; i++) {
//         var result = '';
//         var ar = readline().split(' ').map(n => parseInt(n));
//         var n = ar[0];
//         var k = ar[1];     
        
//         for (var j = 0; j < n; j++) {
//             result += chars[j % 3];
//         }
//         console.log(result);
//     }
// }


// var shop = [
//   {
//     a: {
//       total: 100,
//       name: "apple"
//     },
//     b: {
//       total: 50
//     }
//   },
//   {
//     a: {
//       total: 50,
//       name: "banana"
//     },
//     b: {
//       total: 50
//     }
//   }
// ];

// 	//console.log(shop[0].a.total + shop[1].a.total)
// 	var res=0;
// shop.map(price=>{
// 	res += price.a.total;
// })
// console.log(res);


	// var rectangle = function(width,height) {
	
	// 	this.width = width
	// 	this.height = height
	// 	var position = {
	// 		x : 56,
	// 		y : -100
	// 	}

	// 	Object.defineProperty(this, 'position', {
	// 		get: function() {
	// 			return position
	// 		},
	// 		set: function(value) {
	// 			position = value
	// 		}
	// 	})
	// }

	// var rect1 = new rectangle(45,35)
	// console.log(rect1.position)
	// rect1.position = {
	// 	x : 234,
	// 	y : 345
	// }
	// console.log(rect1.position)

	// function person(name,age) {
	// 	this.name = name
	// 	this.age = age
	// }

	// var baseObj = Object.getPrototypeOf(person)
	// console.log(baseObj)
	// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
	// console.log(descriptor)

	// person.prototype = {
	// 	printAge() {
	// 		console.log(this.age)
	// 	}
	// }

	// var p1 = new person('shahjalal', 30)
	// p1.printAge()

	// let a = ['javascript', 'python', 'c++', 'php', 'ruby', 'rust']

	// a.copyWithin(-4,-3,-2)
	// console.log(a)

	// const captain = {
	// 	name: 'mashrafee',
	// 	age : 36,
	// 	country: 'Bangladesh'
	// }

	// const player =  Object.create(captain)

	// console.log(player.age)

	// function square(width) {
	// 	this.width = width
	// }

	// square.prototype= {
	// 	draw: function() {
	// 		console.log('DRAW ' + this.width)
	// 	},
	// 	toString: function() {
	// 		return 'my width is = ' + this.width
	// 	}
	// }

	// let p1 = new square(10)
	// console.log(p1)
	// console.log(p1.draw())
	// console.log(p1.toString())


	// function person(name, age) {
	// 	this.name = name
	// 	this.age = age
	// }

	// function cricketer(name, age, type, country) {
	// 	person.call(this)
	// 	this.name = name
	// 	this.age = age
	// 	this.type = type
	// 	this.country = country
	// }

	// person.prototype = {
	// 	play: function() {
	// 		console.log(`${this.name} is playing cricket`)
	// 	}
	// }

	// cricketer.prototype = Object.create(person.prototype)
	// cricketer.prototype.constructor = cricketer

	// let player = new cricketer('sakib', 35, 'all rounder', 'Bangladesh')
	// console.log(player.type)


	// function f(item) {
	// 	return 
	// 	[item]
	// }
	// console.log(f(10))

	// class Person {
	// 	constructor(name, age) {
	// 		this.name = name
	// 		this.age = age
	// 	}
	// }

	// class Cricketer extends Person {
	// 	constructor(name, age, type, country){
	// 		super(name, age)
	// 		this.name = name
	// 		this.age = age
	// 		this.type = type
	// 		this.country = country
	// 	}
	// 	play() {
	// 		console.log(`${this.name} is playing cricket`)
	// 	}
	// }

	// let player = new Cricketer('sakib', 35, 'all rounder', 'Bangladesh')
	// player.play()
	// console.log(player.type)



	// class Person {
	// 	constructor(name, age) {
	// 		this.name = name
	// 		this.age = age
	// 	}
	// 	eat() {
	// 		console.log(`${this.name} Eating dinner`)
	// 	}
	// 	get setName() {
	// 		return `${this.name}`
	// 	}
	// 	set setName(name) {
	// 		this.name = name
	// 	}
	// }

	// let player = new Person('sakib', 35)
	// console.log(player.setName)
	// player.setName = 'rafi'
	// console.log(player)



	// function hi() {
	// 	console.log('hello')
	// }

	// (0-5) && hi()

	// function printMe(num, str) {
	// console.log(str)
	// num--
	// num && printMe(num, str)
	
	// }
	// printMe(5,'hello')


	// function binarySearch(elements, key) {
	// 	var arr = elements
	// 	var start = 0
	// 	var end = arr.length
	// 	var mid 
	// 	while(start <= end) {
	// 		mid = parseInt((start + end)/2)
	// 		if(arr[mid] == key) return mid
	// 			else if(key > arr[mid]) {
	// 				start = mid+ 1
	// 			}
	// 			else{
	// 				end = mid -1
	// 			}
	// 	}

	// }
	// let myArr = [3, 5, 7, 23, 65, 70, 82, 99]
	// let key = 23
	// let position = binarySearch(myArr, key)
	// console.log(position)
	// function extend(parent, child) {
	// 	child.prototype = Object.create(parent.prototype)
	// 	child.prototype.constructor = child

	// }

	// function Shape(color) {
	// 	this.color
	// }

	// Shape.prototype.common = function() {
	// 	console.log('i am a common method')
	// }

	// function Square(width, color) {
	// 	Shape.call(this, color)
	// 	this.width = width
	// }

	// extend(Shape, Square)

	// Square.prototype.draw = function() {
	// 	console.log('drawing')
	// }

	// var shape = new Shape()
	// var square = new Square(45, 'green')

	// console.log(square.common())

	// function Circle(radius, color) {
	// 	Shape.call(this,color)
	// 	this.radius = radius
	// }

	// extend(Circle, shape)


	// function Shape(color) {
	// 	this.color = color
	// }

	// Shape.prototype.common = function() {
	// 	console.log('i am common method')
	// }

	// function Square(width,color) {
	// 	Shape.call(this, color)
	// 	this.width = width
	// }

	// Square.prototype = Object.create(Shape.prototype)
	// Square.prototype.constructor = Square

	// Square.prototype.draw = function () {
	// 	console.log('drawing')
	// }

	// Square.prototype.common = function() {
	// 	console.log('i am calling from square and i have overridden')
	// }

	// var sqr = new Square(45, 'red')
	// var s = new Shape('black')

	// function mixin(target, ...sources) {
	// 	Object.assign(target, ...sources)
	// }

	// var canEat = {
	// 	eat: function (){
	// 		console.log('Eating...')
	// 	}
	// }

	// var canWalk = {
	// 	walk: function (){
	// 		console.log('Walking...')
	// 	}
	// }

	// var canSwim = {
	// 	swim: function () {
	// 		console.log('swimming...')
	// 	}
	// }

	// function person(name) {
	// 	this.name = name
	// }

	// mixin(person.prototype, canWalk, canEat)


	// var p = new person('rafi')
	// console.log(p)

	// function fish(name) {
	// 	this.name = name
	// }

	// mixin(fish.prototype, canEat, canSwim)

	// var fish = new fish('shdfk')
	// console.log(goldFish)


	// function sum(n) {
	// 	if(n === 0) {
	// 		return 0
	// 	}else{
	// 		return sum(n-1) + n
	// 	}
	// }

	// console.log(sum(5))

// 	function stringReverese(str) {
//    return str.split('').reverse().join('');
// }

// console.log(stringReverese('Hello World!'))
// console.log(stringReverese('Zonayed Ahmed'))

// function stringReverese(str) {
//    let reversed = '';
//    for(let char of str) {
//       reversed = char + reversed;
//    }
//     return reversed; 
// }
// console.log(stringReverese('Hello World!'))

	
// class PersonClass {
// 	constructor(name, age, job) {
// 		this.name = name
// 		this.age = age
// 		this.job = job
// 	}
// 	dateOfBirth() {
// 		console.log(`${this.name} born in ${2020 - this.age}`)
// 	}
// }


// class TeacherClass extends PersonClass{
// 	constructor(name, age, job, subject) {
// 		super(name, age, job)
// 		this.subject = subject
// 	}
// }

// const oursir = new TeacherClass('shumit sir', 33, 'ceo of analyzen', 'cse')
// console.log(oursir)

// let obj = {
// 	name: 'shahjalal rafi',
// 	print: function() {
// 		setTimeout(() => {
// 			console.log(this)
// 			console.log(`hello ${this.name}`)
// 		})
// 	}
// }
// obj.print()

// var name = 'hmm'

// var user = function(name) {
// 	this.name = name
// 	this.draw = function() {
// 		console.log('drawing')
// 	}
// }
// var p = new user('rafi')
// console.log(p)


// let obj = {
// 	start: 1,
// 	end: 10,
// 	[Symbol.iterator] : function () {
// 		let currentValue = this.start
// 		let self = this
// 		return{
// 			next() {
// 				return {
// 					done: currentValue > self.end,
// 					value: currentValue++
// 				}
// 			}
// 		}
// 	}
// }

// for(let v of obj) {
// 	console.log(v)
// }

// let obj = {
// 	start: 1,
// 	end: 10,
// 	[Symbol.iterator]: function() {
// 		let currentValue = this.start
// 		let self = this
// 		return {
// 			next() {
// 				return {
// 					done: currentValue > self.end,
// 					value: currentValue++
// 				}
// 			}
// 		}
// 	}
// }

// for(let v of obj) {
// 	console.log(v)
// }

// let obj = {
// 	a: 10,
// 	b: 20,
// 	c: 30
// }

// let o = {
// 	...obj
// }
// console.log(o)

// function unique(str) {
// 	for(let i = 0; i< str.length; i++) {
// 		// if(str.lastIndexOf(str[i]) !== i) {
// 		// 	return false
// 		// }
// 		console.log(str.lastIndexOf(str[i]))
// 	}
// 	return true
// 	// let values = []
// 	// for(let letter of str) {
// 	// 	if(values.indexOf(letter) !== -1) {
// 	// 		return false
// 	// 	}
// 	// 	values.push(letter)
// 	// 	// console.log(values)
// 	// }
// 	// return true
// }

// // console.log(unique('abcde'))
// console.log(unique('zkhfsasjk'))

// function arraySum(arr) {
// 	let sum = 0
// 	for(let i = 0; i < arr.length-1; i++) {
// 		sum += arr[i]
// 	}
// 	console.log(sum)
// 	let p = arr.length.pop()
// 	console.log(p)
// 	// if(arr.length-1 === sum) {
// 	// 	return true
// 	// }else{
// 	// 	return false
// 	// }
// }
// console.log(arraySum([2, 3, 5, 7, 17]))
// console.log(arraySum([2, 3, 8, 23, 34]))


// function arraySum(arr) {
// 	let tempArr = arr.sort((a,b)=> {
// 		return a - b
// 	})
// 	let largestNumber = tempArr.pop()
// 	let number = 0
// 	tempArr.forEach((item) => (number += item))
// 	// return largestNumber = number
// 	if(largestNumber === number) {
// 		return true
// 	}else{
// 		return false
// 	}
// }

// console.log(arraySum([2, 5, 3, 7, 17]))
// console.log(arraySum([2, 5, 3, 7, 9]))

// var person = {
// 	name: 'rafi',
// 	email: 'shahjalalrafi5@gmail.com',
// 	address: {
// 		city: 'chattagram',
// 		country: 'Bangladesh'
// 	}
// }

// let {name, email, address: {city, country}} = person
// console.log(name, country)


// function arraySum(arr) {
// 	let tempArr = arr.sort((a,b)=> {
// 		return a-b
// 	})
// 	let largestNumber = tempArr.pop()
// 	let sum = 0
// 	tempArr.forEach((item) => sum += item)
// 	if(sum === largestNumber) {
// 		return true
// 	}else{
// 		 return false
// 	}
// }

// console.log(arraySum([2, 5, 3, 7, 17]))
// console.log(arraySum([2, 5, 3, 7, 19]))

// let arr = [1, 2, 4, 5, 7]
// let [first, second, , , last] = arr
// console.log(first,second, last)


// let arr = [3, 5, 6, 8]

// function createIterator(collection) {
// 	let i = 0
// 	return {
// 		next() {
// 			return{
// 				done : i >= collection.length,
// 				value: collection[i++]
// 			}
// 		}
// 	}
// }

// let iterate = createIterator(arr)

// let iterate = arr[Symbol.iterator]()

// console.log(iterate)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let obj = {
// 	start : 1,
// 	end: 5,
// 	[Symbol.iterator]: function() {
// 		let currentValue = this.start
// 		let self = this
// 		return {
// 			next() {
// 				return {
// 					done: currentValue > self.end,
// 					value: currentValue > self.end ? 'undifiend' : currentValue++				}
// 			}
// 		}
// 	}
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// console.log(iterate.next())


// let arr = [2, 4, 6, 8]

// let set = new Set(arr)
// set.add(5)
// set.delete(4)
// console.log(set.values())
// console.log(set)

// let map = new Map([
// 		['a', 10],
// 		['b', 20],
// 		['c', 30]
// 	])

// map.set('d', 40)
// console.log(map.keys())

// for(let [k,v] of map) {
// 	console.log(k,v)
// }

// let cricket = Symbol.for('this is cricket Symbol')

// let obj = {
// 	name: 'rafi',
// 	[cricket]: 'Bangladesh'
// }

// console.log(obj)

// class product {
// 	constructor(title) {
// 		this.title = title
// 	}
// 	[Symbol.search](string) {
// 		return string.indexOf(this.title) >= 0 ? 'Found' : 'Not Found'
// 	}
// }

// let laptop = new product('laptop')

// console.log('hp laptop'.search(laptop))

// let num = [2, 3, 5, 7,[3,['ds'], 5,7,[3,6,7],['e']]]
// let flatNum = num.flat(6)
// console.log(flatNum)

// let num = new Set('abcdefabn')
// console.log(num)

// function unique(str) {
// 	let tempArr = new Set()

// 	for(let elem of str) {
// 		if(tempArr.has(elem)) {
// 			return false
// 		}else{
// 			tempArr.add(elem)
// 		}
		
// 	}
// 	return true
// }

// console.log(unique('abcd'))
// console.log(unique('abcdefac'))

// let str = 'rafi'
// let repeated = str.repeat(2.9)
// console.log(repeated)

// let product = [
// 	{
// 		title: 'iphone 8',
// 		company: 'apple'
// 	},
// 	{
// 		title: 'glaxy',
// 		company: 'samsung'
// 	},
// 	{
// 		title: 'iphone 9',
// 		company: 'apple'
// 	},
// 	{
// 		title: 'n91',
// 		company: 'nokia'
// 	}
// ]

// function uniqueProduct(arr) {
// 	let tempArr = arr.map((value) =>{
// 		return value.company
// 	})
// 	return [...new Set(tempArr)]
// }

// console.log(uniqueProduct(product))

// function countLetter(str) {
// 	let tempArr = str.split(' ')
// 	tempArr = tempArr.map((value) => {
// 		let tempValue = value.toLowerCase().split('')
// 		return tempValue.reduce((acc,cur) => {
// 			acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
// 			if(acc[cur] > acc.max){
// 				acc.max = acc[cur]
// 			}
// 			return acc
// 		},{max:1, word: value})
		
// 	})

// 	let ammount = 1
// 	let word = ''
// 	for(let item of tempArr) {
// 		if(item.max > ammount) {
// 			ammount = item.max
// 			word = item.word
// 		}
// 	}
// 	if(ammount > 1) {
// 		return word
// 	}

// 	return -1
// }

// console.log(countLetter('javascript is one of the greatest programing language'))

// function multiply(a,b,c) {
// 	return a*b*c
// }

// function multiply(a) {
// 	return function(b) {
// 		return function(c) {
// 			return a*b*c
// 		}
// 	}
// }

// let step1 = multiply(5)
// let step2 = step1(6)
// let step3 = step2(7)
// console.log(step3)
// console.log(multiply(5)(6)(7))

// function discount(disc) {
// 	return (price)=> {
// 		return price - price * disc
// 	}
// }

// let tenPercentDiscount = discount(.1)
// let twentyPercentDiscount = discount(.2)
// let customer1 = tenPercentDiscount(600)
// let customer2 = tenPercentDiscount(700)
// let customer3 = tenPercentDiscount(800)

// let customer4 = twentyPercentDiscount(1200)
// console.log(customer1)
// console.log(customer2)
// console.log(customer3)
// console.log(customer4)

// function discount(disc) {
// 	return (price)=> {
// 		return price - price * disc
// 	}
// }

// let tenPercentDiscount = discount(.1)
// let customer1 = tenPercentDiscount(600)
// console.log(customer1)


// function curry(func) {
// 	return function curried(...args) {
// 		if(args.length >= func.length) {
// 			return func.apply(this, args)
// 		}else{
// 			return function(...agrs2) {
// 				return curried.apply(this, args.concat(agrs2))
// 			}
// 		}
// 	}
// }

// function sum(a,b,c) {
// 	return a + b + c
// }

// let curriedSum = curry(sum)

// console.log(curriedSum(1,3,3))
// console.log(curriedSum(1)(3,3))
// console.log(curriedSum(1)(3)(3))




// String.prototype[Symbol.iterator] =function () {
// 	let count = this.length
// 	return {
// 		next() {
// 			if(count > 0) {
// 				count--
// 				return {done: false, value: 'js'}
// 			}
// 			return {done: true}
// 		}
// 	}
// }
// console.log([..."hello"])


// let arr = [3,3,5,5,63]
// let obj = {
// 	s: 5,
// 	r: 0
// }

// console.log(new Set(arr).add(4).add({a:4,b:9}).add({a:4,b:9}).add(obj).add(obj))

// let a = [1,2,3]
// let b = [4,5,3]

// let union = new Set(a)

// let a = ['str']
// console.log([...new Set(a).add(5).add(2).add(5).add(2)])

// let ob = [2,3,4] 
// console.log(new Set(ob))

// let A = new Set([2,3,4])
// let b = new Set([3,6,9])

// // let union = new Set([...A, ...B])
// // console.log(union)

// let intersection = new Set([...A].filter(x=> b.has(x)))
// console.log(intersection)


// function modifier(string, ...values) {
// 	const m = string.reduce((acc,cur) =>{
// 		return acc + cur  + (values.length ? 'mr.' + values.shift() : '')
// 	},'')
// 	return m
// }

// let player1 = 'sakib'
// let player2 = 'tamim'

// console.log(modifier`we have ${player1} and ${player2} in our cricket team`)



// function range(start, end , step) {
// 	let current = start
// 	return {
// 		[Symbol.iterator]: function() {
// 			return {
// 				next() {
// 					let result
// 					if(current <= end) {
// 						result = {
// 							done: false,
// 							value: current
// 						}
// 						current += step
// 						return result
// 					}
// 					return {
// 						done: true
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// console.log([...range(1,10,2)])


// let map = new Map([
// 		['a', 10],
// 		['b', 20],
// 		['c', 30],
// 		['d', 40],
// 	])

// map.set('e', 50)
// // console.log(map)
// console.log(map.get('b'))


// for(let [k,v] of map) {
// 	console.log(k,v)
// }

// class rectangle{
// 	constructor(width, height) {
// 		this.width = width
// 		this.height = height
// 	}
	
// 	draw() {
// 		console.log('drawing...')
// 	}
// }

// let rect = new rectangle(3,4)
// console.log(rect.draw())


// function insertionSort (arr) {
// for (let i = 0; i < arr.length; i++) {
// let j = i-1;
// let temp = arr[i];
// while (j>=0 && arr[j]>temp) {
// arr[j+1] = arr[j];
// j--;
// }
// arr[j+1] = temp;
// }
// return arr;
// }
// var arr = [5, 8, 7,-1, 2, 6, 4, 3, 9];
// var sortedArr = insertionSort(arr);
// console.log(sortedArr);


// const multiply = (a)=> (b) => (c) => a*b*c
// console.log(multiply(5)(6)(7))

// function* generator() {
// 	yield 1
// 	yield 2
// 	yield 3
// 	yield 4
// }

// let ite = generator()

// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())

// let obj = {
// 	vale: 1,
// 	valu: 2,
// 	vaue: 3,
// 	alue: 4
// }

// function * generator(ob) {
// 	let entries = Object.entries(ob)
// 	for(let element of entries) {
// 		yield element[1]
// 	}
// }

// const iterator = generator(obj)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// console.log(obj)

// Object.prototype[Symbol.iterator] = function() {
// 	const entries = Object.entries(this)
// 	let count = entries.length
// 	let index = 0
// 	return{
// 		next() {
// 			if(count > 0) {
// 				let result = {done: false, value: entries[index][1]}
// 				count--
// 				index++
// 				return result
// 			}
// 			return {done: true}
// 		}
// 	}
// }

// for(let element of obj) {
// 	console.log(element)
// }
// console.log([...obj])

// function * range(start, end, step) {
// 	let current = start

// 	while(current <= end) {
// 		yield current
// 		current += step
// 	}
// }

// let iterator = range(1, 20, 2)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// function *generator(a,b) {
// 	let k = yield a + b
// 	let m = yield a + b + k
// 	yield a + b + k + m
// }

// let iterator = generator(10,20)
// console.log(iterator.next())
// console.log(iterator.next(30))
// console.log(iterator.next(80))


// const hasMeeting = false

// const meeting = new Promise((resolve,reject)=> {
// 	if(!hasMeeting) {
// 		const meetingDetails = {
// 			name: 'technical meeting',
// 			location: 'google meet',
// 			time: '10:00 pm'
// 		}
// 		resolve(meetingDetails)
// 	}else{
// 		reject(new Error('meeting already schedule'))
// 	}
// })

// meeting
// .then((res) => {
// 	console.log(JSON.stringify(res))
// })
// .catch((err)=> {
// 	console.message(err.message)
// })


// const promise1 = Promise.resolve(`promise 1 is resolve`)
// const promise2 = new Promise((resolve,reject) => {
// 	setTimeout(()=> {
// 		resolve(`promise 2 resolve`)
// 	},1000)
// })

// // promise1.then((res)=> console.log(res))
// // promise2.then((res)=> console.log(res))

// Promise.race([promise1,promise2]).then((res)=> {
// 	console.log(res)
// })

// async function friendly() {
// 	return 'hello'
// }

// console.log(friendly())

// function divide(a,b) {
// 	return new Promise(function(resolve, reject) {
// 		if(b == 0) {
// 			reject(new Error(`you cannot devide by 0`))
// 			return 
// 		}
// 		resolve(a/b)
// 	})
// }

// divide(10,0).then(function(result) {
// 	console.log(`division succesfull : ${result}`)
// }).catch(function(error) {
// 	console.log(`there was an error with the division!`)
// 	console.log(new Error)
// })

// function wait(ms) {
// 	return new Promise(function(resolve,reject) {
// 		if(ms <=0) {
// 			reject(new Error('can not wait 0 or less than 0'))
// 			return
// 		}
// 		setTimeout(function() {
// 			resolve()
// 		},ms)
// 	})
// }

// wait(1000).then(function() {
// 	console.log('we have waited 1 second')
// }).catch(function(error) {
// 	console.log(`there was an error: ${error.message}`)
// })

// var a = 100
//  var b = 200
//  var c = 400
// function A() {
// console.log(a)
// function B() {
// 	console.log(b)
// 	function C() {
// 		console.log(c)
// 	}
// 	C()
// }
// B()
// }

// A()


// let _radius = Symbol()
// let _name = Symbol()

// class Circle{
// 	constructor(radius, name) {
// 		this[_radius] = radius
// 		this[_name] = name
// 	}
// 	draw() {
// 		console.log('drawing...')
// 	}
// }

// let c1 = new Circle(2,'cred')
// console.log(c1)

// console.log(Object.getOwnPropertyNames(c1))

// let key = Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])


let _radius = new WeakMap()
let _name = new WeakMap()
let _resize = new WeakMap()

// class Circle{
// 	constructor(radius, name) {
// 		this.size = 100
// 		_radius.set(this, radius)
// 		_name.set(this, name)
// 		_resize.set(()=> {
// 			console.log(this.size)
// 		})
// 	}

// 	get radius() {
// 		return _radius.get(this)
// 	}

// 	set radius(v) {
// 		_radius.set(this,v)
// 	}

// 	draw() {
// 		console.log('drawing...')
// 		console.log(_radius.get(this),_name.get(this))
// 	}
// }

// let c1 = new Circle(2,'cred')
// console.log(c1)
// c1.draw()
// c1.radius = 100
// console.log(c1.radius)

// console.log(Object.getOwnPropertyNames(c1))

// let key = Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])


class shape {
	constructor(color) {
		this.color = color
	}
}

class rectangle extends shape {
	constructor(width,height,color) {
		super(color)
		this.width = width
		this.height = height
	}

	calculate() {
		return this.width + this.height
	}
}

let r = new rectangle(2,3,'green')
console.log(r)