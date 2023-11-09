
//Day - 1 Javascript 

function getTimeOfDayGreeting() {
    var x = document.getElementById("greet");
    const currentTime = new Date();
    const currentHour = currentTime.getHours();


    if (currentHour >= 5 && currentHour < 12) {

        x.innerHTML = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        x.innerHTML = "Good afternoon! ";
    } else if (currentHour >= 17 && currentHour < 21) {
        x.innerHTML = "Good evening!";
    } else {
        x.innerHTML = "Good night!";
    }

}

//Day - 2 JavaScript





let count = 0
let score = 0



const Questions = [{
	q: "What is the typeof operator used for in JavaScript ?",
	a: [{ text: "Checking the type of a variable", isCorrect: true },
	{ text: "Converting a variable to a string", isCorrect: false },
	{ text: "Creating a new variable", isCorrect: false },
	{ text: "None of the above", isCorrect: false }
	]

},
{
	q: "Which of the following is not a JavaScript data type ?",
	a: [{ text: "Number", isCorrect: false, isSelected: false },
	{ text: "Boolean", isCorrect: false },
	{ text: "Undefined", isCorrect: false },
	{ text: "Float", isCorrect: true }
	]

},
{
	q: "What is the result of typeof null in JavaScript ?",
	a: [{ text: "Null", isCorrect: false },
	{ text: "Undefined", isCorrect: false },
	{ text: "Object", isCorrect: true },
	{ text: "String", isCorrect: false }
	]

},
{
	q: "What is the purpose of the isNaN function in JavaScript ?",
	a: [{ text: "To check if a value is a number", isCorrect: false },
	{ text: "To convert a string to a number", isCorrect: false },
	{ text: "To check if a value is not a number", isCorrect: true },
	{ text: "To round a number to the nearest integer", isCorrect: false }
	]

}

]


function getQuestions() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[count].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[count].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[count].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

getQuestions();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (count < Questions.length - 1) {
		count++;
		getQuestions();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[count].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}







