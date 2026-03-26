	// NAME 1: Caindoy, Johnley Franks B.
	// NAME 2:Millare, Cedric Michael A.
	
	/*
    1. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.

		Create a new variable called circleArea.
		- This variable should be able to receive and store the result of the circle area calculation.
		- Log the value of the circleArea variable in the console.


	2. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation.
		
		Create a new variable called averageVar.
		- This variable should be able to receive and store the result of the average calculation
		- Log the value of the averageVar variable in the console.
	

	3. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.

		Create a global variable called outside of the function called isPassingScore.
			-This variable should be able to receive and store the boolean result of the checker function.
			-Log the value of the isPassingScore variable in the console.
        */


// 1.
	function getCircleArea(radius){
		let area = 3.14 * radius * radius;
		return area;
	}

	let circleArea = getCircleArea(5)
	console.log("Circle Area: " + circleArea);

// 2.
	function getAverage(num1, num2, num3, num4){
		return (num1 + num2 + num3 + num4) / 4;
	}
	
	let averageVar = getAverage(10,20,30,40);
	console.log("Average: " + averageVar);

// 3.
	function checkIfPassed(score, totalScore){
		let percentage = (score / totalScore) * 100;
		let isPassed = percentage >= 75;
		return isPassed;
	}

	let isPassingScore = checkIfPassed(80, 100);
	console.log("Is passing: " + isPassingScore);
