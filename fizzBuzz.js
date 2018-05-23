/**
 Method takes input param. 
 print out all the numbers with the below mentioned criteria 
 if the number is divisible by 3 print the word fizz instead of the number. 
 if the number is divisible by 5 print the word buzz instead of the number. 
 if the number is divisible by both 3 & 5 print the word fizzbuzz
 */

function fizzBuzz(num) {
	var i = 1;
	while (i <= num) {
		i % 15 === 0
			? console.log('fizzbuzz')
			: i % 3 === 0
				? console.log('fizz')
				: i % 5 === 0 ? console.log('fizzbuzz') : console.log(i);
		i++;
	}
}

fizzBuzz(20);
