const quizData = [
    {
        question: 'Qual a capital de Minas?',
    
        a:'Pedro Leopoldo',
        b:'Betim',
        c:'Belo Horizonte',
        d:'Ribeirão das Neves',
        correct:'c'
    }, {
        question: 'Qual a linguagem mais usada em 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Qual é o presidente do Brasil?',
        a:'Lula',
        b:'Marina',
        c:'Bolos',
        d:'Bolsonaro',
        correct: 'd'
    },{
        question: 'Qual Significado das siglas do HTML?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },{
        question: 'Quando o JavaScript foi criado?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];
const questionEl = document.getElementById
('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}
function getSelelected() {
    const answers = document.querySelectorAll("answer");
    
    
    answers.forEach((answer) => {
        console.log(answer.value);
    });
}


submitBtn.addEventListener("click", myFunction);

function myFunction () {
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else{
        alert("Você finalizou todas as questões");
    }

}



    

