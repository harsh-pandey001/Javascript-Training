const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit')
const finalResult = document.getElementById('result')


let qcount = 0;
let score = 0;
const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];




function displayQuiz() {
    console.log(myQuestions[qcount].question);
    quizContainer.textContent = myQuestions[qcount].question

    myQuestions[qcount].answers.forEach(element => {
     console.log(element.a);
            
    });
    document.getElementById('btnStart').style.display = "none"

}




