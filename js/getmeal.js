function getMeal(){
		var mealValue = document.getElementsByClassName("inputMeal")[0].value;

		if(mealValue === "pizza"){
			location.href = "screen_2.php";
			localStorage.setItem("meal", "pizza");
		} else if (mealValue === "cheeseburger"){
			location.href = "screen_2.php";
			localStorage.setItem("meal", "cheeseburger");
		} else if (mealValue === "caesar salad") {
			location.href = "screen_2.php";
			localStorage.setItem("meal", "caesar salad");
		} else if (mealValue === "club sandwich") {
			location.href = "screen_2.php";
			localStorage.setItem("meal", "club sandwich");
		} else if (mealValue === "tomato soup") {
			location.href = "screen_2.php";
			localStorage.setItem("meal", "tomato soup");
		} else {
		$('.window--alert').removeClass('none');
			$(".conditionalOpen, .conditionalClose").toggleClass("conditionalOpen conditionalClose");
		}
	}

	document.getElementsByClassName("submitMeal")[0].addEventListener("click", getMeal);