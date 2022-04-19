const quizData = [
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "d",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "b",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
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
    document.getElementById("test").addEventListener("click", fcontact, false);
}
function fcontact() {

    document.getElementById("homediv").style.visibility = "hidden";
    document.getElementById("cap1div").style.visibility = "hidden";
    document.getElementById("cap2div").style.visibility = "hidden";
    document.getElementById("cap3div").style.visibility = "hidden";
    document.getElementById("testdiv").style.visibility = "visible";

}