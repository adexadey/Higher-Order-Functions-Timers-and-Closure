/*
1. countdown
● Write a function called countdown that accepts a number as a parameter and
every 1000 milliseconds decrements the value and console.logs it. Once the
value is 0 it should log "DONE!" and stop.
countDown( 4 );
// 3
// 2
// 1
// "DONE!"
*/

function countDown(time) {
	var timer =setInterval(function() {
		time--;
		if (time <= 0) {
			clearInterval(timer);
			console.log("DONE!");
		} else {
			console.log(time);
		}
		
	}, 1000)
}
countDown(4)



/*
2. randomGame
● Write a function called randomGame that selects a random number between 0
and 1 every 1000 milliseconds and each time that a random number is picked,
add 1 to a counter. If the number is greater than .75 , stop the timer and return
the number of tries it took before we found a number greater than .75.
*/

randomGame = function() {
	
	var counter = 0;
	var timer = setInterval(function() {
		counter ++;
		if ((Math.random()) > 0.75) {
			clearInterval(timer);
			console.log(`It took us ${counter} tries.`);
		}
	}, 1000)
}

randomGame()

/*
3. isEven
● Write a function called isEven which takes in a number and returns true if the
number is even and returns false if it is not
isEven( 2 ); // true
isEven( 3 ); // false
*/

num = prompt("enter a number");

function isEven(num) {
return (num%2 === 0)
}

isEven()

/*
4. isOdd
● Write a function called isOdd which takes in a number and returns true if the
number is odd and returns false if it is not
isOdd( 3 ); // true
isOdd( 14 ); // false
*/

num = prompt("enter a number");

function isOdd(num) {
return (num%2 !== 0)
}

isOdd()

// Task 1 - 4 completed
//
//
// Task 5 - 8 incomplete
0243889047 
/*
5. isPrime
● Write a function called isPrime which takes in a number and returns true if the
number is a prime number (is greater than 1 and can only be divided in whole
by itself and 1), otherwise returns false
isPrime( 8 ); // false
isPrime( 17 ); // true
*/

function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

console.log(isPrime(8)); // false

/*
6. numberFact
● Write a function called numberFact which takes in a number and a callback
and returns the result of the callback with the number passed to it
numberFact( 59 ,isEven); // false
numberFact( 59 ,isOdd); // true
numberFact( 59 ,isPrime); // true
*/

function numberFact(num, callback) {
	return callback(num)
}

console.log(numberFact(59, isPrime));


/*
7. find
● Write a function called find . It should take in an array and a callback and
return the first value found in the array that matches the condition.
find([ 8 , 11 , 4 , 27 ], function (val){ return val >= 10 }); // 11
find([ 8 , 11 , 4 , 27 ], function (val){ return val === 5 }); // undefined
*/

function find(arr, callback) {
	for(var 1 = 0; arr.length; i++){
		if(callback(arr[i])) return i 
	}
	
}
find([ 8 , 11 , 4 , 27 ], function (val){ return val >= 10 }); // 11

/*
8. findIndex
● Write a function called findIndex . It should take in an array and a callback
and return the index of first value found in the array that matches the
condition.
// returns 1 (index of the first value greater than or equal to 10)
findIndex([ 8 , 11 , 4 , 27 ], function (val){ return val >= 10 });
findIndex([ 8 , 11 , 4 , 27 ], function (val){ return val === 7 }); // undefined
*/

function findIndex(arr, callback) {
	for(var 1 = 0; arr.length; i++){
		if(callback(arr[i])) return i 
	}
	
}
findIndex([ 8 , 11 , 4 , 27 ], function (val){ return val >= 10 });


/*
9. specialMultiply
● Write a function called specialMultiply which accepts two parameters. If the
function is passed both parameters, it should return the product of the two. If
the function is only passed one parameter - it should return a function which
can later be passed another parameter to return the product. You will have to
use closure and arguments to solve this.
specialMultiply( 3 , 4 ); // 12
specialMultiply( 3 )( 4 ); // 12
specialMultiply( 3 ); // returns a function
*/

function specialMultiply(a, b) {
	if(arguments.length === 1){
		return function(b){
			return a * b
		}
	}
	return a * b
}

console.log(specialMultiply( 3 , 4 )); //12






