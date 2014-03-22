$(document).ready(function(){
	$('#calculator').change(function(){
		var value1 = $('#value1').val();
		value1 = parseInt(value1);

		var value2 = $('#value2').val();
		value2 = parseInt(value2);


		var e = document.getElementById("selection");
		var strUser = e.options[e.selectedIndex].text;
		

		if (strUser === '+') {
			var sum = addition(value1,value2);
			$('#sum').val(sum);
		} else if (strUser === '-') {
			var sum = subtraction(value1,value2);
			$('#sum').val(sum);
		} else if (strUser === '*') {
			var sum = multiplication(value1,value2);
			$('#sum').val(sum);
		} else if (strUser === '/') {
			var sum = division(value1,value2);
			$('#sum').val(sum);
		} else if (strUser === '' && isNaN(strUser)){
			console.log("You Pick Blank");
		} else {
			console.log("Your Done");
		}

		/*This part is working*/
		/*
		var sum = addition(value1,value2);
		$('#sum').val(sum);
		*/
		
	});

	function addition(num1,num2) {
		var num1;
		var num2;
		var sum = num1 + num2;
		return sum;
	}

	function subtraction(num1,num2) {
		var num1;
		var num2;
		var sum = num1 - num2;
		return sum;
	}

	function multiplication(num1,num2) {
		var num1;
		var num2;
		var sum = num1 * num2;
		return sum;
	}

	function division(num1,num2) {
		var num1;
		var num2;
		var sum = num1 / num2;
		return sum;
	}

	$("#pressMe").click(function() {
		$("#mainMessage").fadeToggle("slow","linear");
	});
});