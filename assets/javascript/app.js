const quizData = [
    {
        question: "What is a correct syntax to output 'Hello World' in Python?",
        a: "print('Hello World')",
        b: "p('Hello World')",
        c: "echo('Hello World');",
        d: "echo 'Hello World'",
        correct: "a",
    },
    {
        question: "How do you insert COMMENTS in Python code?",
        a: "#This is a comment",
        b: "/*This is a comment*/",
        c: "//This is a comment",
        d: "||This is a comment",
        correct: "a",
    },
    {
        question: "Which one is NOT a legal variable name?",
        a: "my_var",
        b: "my-var",
        c: "_myvar",
        d: "Myvar",
        correct: "b",
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        a: "5 = x",
        b: "x == int(5)",
        c: "x = 5",
        d: "int >> 5",
        correct: "c",
    },
    {
        question: "What is the correct file extension for Python files?",
        a: ".pyt",
        b: ".pyth",
        c: ".py",
        d: ".pt",
        correct: "c",
    },
    {
        question: "What is the correct syntax to output the type of a variable or object in Python?",
        a: "print(type(x))",
        b: "print(typeof x)",
        c: "print(typeof(x))",
        d: "print(typeOf(x))",
        correct: "a",
    },
    {
        question: "What is the correct way to create a function in Python?",
        a: "def myFunction(): ",
        b: "create myFunction():",
        c: "function myfunction():",
        d: "create def_function()",
        correct: "a",
    },
    {
        question: "What is a correct syntax to return the first character in a string?",
        a: "x = 'Hello'.sub(0, 1)",
        b: "x = 'Hello'[0]",
        c: "x = sub('Hello', 0, 1)",
        d: "x = sub'Hello'.sub(0,1)",
        correct: "b",
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        a: "upperCase()",
        b: "uppercase()",
        c: "toUpperCase()",
        d: "upper()",
        correct: "d",
    },
    {
        question: "Which method can be used to replace parts of a string?",
        a: "repl()",
        b: "replace()",
        c: "switch()",
        d: "replaceString()",
        correct: "b",
    },
    {
        question: "Which operator is used to multiply numbers?",
        a: "x",
        b: "%",
        c: "*",
        d: "#",
        correct: "c",
    },
    {
        question: "Which operator can be used to compare two values?",
        a: "=",
        b: "<>",
        c: "==",
        d: "><",
        correct: "c",
    },
  
  ];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

if (document.getElementById("home").addEventListener) {
    document.getElementById("home").addEventListener("click", fhome, false);
}
function fhome() {

    document.getElementById("homediv").style.visibility = "visible";
    document.getElementById("cap1div").style.visibility = "hidden";
    document.getElementById("cap2div").style.visibility = "hidden";
    document.getElementById("cap3div").style.visibility = "hidden";
    document.getElementById("testdiv").style.visibility = "hidden";

}

if (document.getElementById("cap1").addEventListener) {
    document.getElementById("cap1").addEventListener("click", fcap1, false);
}
function fcap1() {

    document.getElementById("homediv").style.visibility = "hidden";
    document.getElementById("cap1div").style.visibility = "visible";
    document.getElementById("cap2div").style.visibility = "hidden";
    document.getElementById("cap3div").style.visibility = "hidden";
    document.getElementById("testdiv").style.visibility = "hidden";

}


if (document.getElementById("cap2").addEventListener) {
    document.getElementById("cap2").addEventListener("click", fcap2, false);
}
function fcap2() {

    document.getElementById("homediv").style.visibility = "hidden";
    document.getElementById("cap1div").style.visibility = "hidden";
    document.getElementById("cap2div").style.visibility = "visible";
    document.getElementById("cap3div").style.visibility = "hidden";
    document.getElementById("testdiv").style.visibility = "hidden";

}

if (document.getElementById("cap3").addEventListener) {
    document.getElementById("cap3").addEventListener("click", fcap3, false);
}
function fcap3() {

    document.getElementById("homediv").style.visibility = "hidden";
    document.getElementById("cap1div").style.visibility = "hidden";
    document.getElementById("cap2div").style.visibility = "hidden";
    document.getElementById("cap3div").style.visibility = "visible";
    document.getElementById("testdiv").style.visibility = "hidden";

}

if (document.getElementById("test").addEventListener) {
    document.getElementById("test").addEventListener("click", fquiz, false);
}
function fquiz() {

    document.getElementById("homediv").style.visibility = "hidden";
    document.getElementById("cap1div").style.visibility = "hidden";
    document.getElementById("cap2div").style.visibility = "hidden";
    document.getElementById("cap3div").style.visibility = "hidden";
    document.getElementById("testdiv").style.visibility = "visible";

}