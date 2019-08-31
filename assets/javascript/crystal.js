$(document).ready(function() {



	var compPick = Math.floor(Math.random() * 102) + 19;
		console.log("compPick: " + compPick);
		$(".randomNumber").html(compPick);



	var gemOne = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 1: " + gemOne);
		$("#img1").html("<img src=" + "assets/images/1830937.svg" + " value=" + gemOne + ">");

	var gemTwo = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 2: " + gemTwo);
		$("#img2").html("<img src=" + "assets/images/1949682.svg" + " value=" + gemTwo + ">");

	var gemThree = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 3: " + gemThree);
		$("#img3").html("<img src=" + "assets/images/2036039.svg" + " value=" + gemThree + ">");

	var gemFour = Math.floor(Math.random() * 12) + 1;
		console.log("Gem 4: " + gemFour);
		$("#img4").html("<img src=" + "assets/images/1073269.svg" + " value=" + gemFour + ">");

	var wins = 0;
		console.log("wins: " + wins);

	var losses = 0;
		console.log("losses: " + losses);

	var score = 0;
		console.log("score: " + score);

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19;
			console.log("compPick: " + compPick);
		$(".randomNumber").html(compPick);

		score = 0;
		$(".scoreDisplay").html(score);

		gemOne = Math.floor(Math.random() * 12) + 1;
			console.log("Gem 1: " + gemOne);
		$("#img1").html("<img src=" + "assets/images/1830937.svg" + " value=" + gemOne + ">");

		gemTwo = Math.floor(Math.random() * 12) + 1;
			console.log("Gem 2: " + gemTwo);
		$("#img2").html("<img src=" + "assets/images/1949682.svg" + " value=" + gemTwo + ">");

		gemThree = Math.floor(Math.random() * 12) + 1;
			console.log("Gem 3: " + gemThree);
		$("#img3").html("<img src=" + "assets/images/2036039.svg" + " value=" + gemThree + ">");

		gemFour = Math.floor(Math.random() * 12) + 1;
			console.log("Gem 4: " + gemFour);
		$("#img4").html("<img src=" + "assets/images/1073269.svg" + " value=" + gemFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value"));
				console.log("New Score: " + newScore);
			$(".scoreDisplay").html(newScore);

			if(newScore === compPick) {
				wins++ ;
				$(".wins").html("Wins: " + wins);
					console.log("Wins: " + wins);
          alert('Winner!');
					reset();

			}

			else if(newScore > compPick) {
				losses++ ;
				$(".losses").html("Losses: " + losses);
					console.log("Losses: " + losses);
            alert('you lose!!!!');
					reset();

			}

		});



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value"));
			console.log("New Score: " + newScore);
		$(".scoreDisplay").html(newScore);

		if(newScore === compPick) {
			wins++ ;
			$(".wins").html("Wins: " + wins);
				console.log("Wins: " + wins);
        alert('Winner!');
				reset();
		}

		else if(newScore > compPick) {
			losses++ ;
			$(".losses").html("Losses: " + losses);
				console.log("Losses: " + losses);
        alert('you lose!!!!');
				reset();
		}

	});

});
