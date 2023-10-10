const quizData =[
    {
        question: 'Who won the 10th Italian Open title in 2021?',
        a: 'Novack Djokovic',
        b: 'Rafael Nadal',
        c: 'Dominic Thiem',
        d: 'Stefanos Tsitsipas',
        correct: 'b'
    },
    {
        question: ' India won Thomas Cup on May 15, 2022, by defeating whom?',
        a:'Indonesia',
        b: 'Malaysia',
        c: 'China',
        d: 'Denmark',
        correct: 'a'
    },
    {
        question: "Only three countries have won the Women’s Rugby World Cup- New Zealand, England, and who?",
        a:'USA',
        b: 'Argentina',
        c: 'Romania',
        d: 'Georgia',
        correct: 'a'
    },
    {
        question: '. In cricket which of the following fielding positions is behind the batsman?',
        a:'Mid-wicket',
        b: 'First slip',
        c: 'Cover',
        d: 'Mid-off',
        correct: 'b'
    },
    {
        question: ' Who is the first Indian fencer to qualify for the Tokyo Olympic Games?',
        a:'Kavitha Devi',
        b: 'Bhavani Devi',
        c: 'Daina Devi',
        d: 'Kaushik Vedika',
        correct: 'b'
    },
    {
        question: "The term ‘Dolphin Kick’ is associated with which of the following games?",
        a:'Badminton',
        b: 'Squash',
        c: 'Swimming',
        d: 'Golf',
        correct: 'c'
    },
    {
        question: "Chelsea’s new manager is Graham Potter. Potter represented 11 different English clubs during his playing career. Where did he start his management career?",
        a:'Norway',
        b: 'Sweden',
        c: 'Denmark',
        d: 'Finland',
        correct: 'b'
    },
    {
        question: "Neeraj Chopra won India’s first-ever Olympic Gold Medal in which of the following sports?",
        a:'400m Hurdle',
        b: 'Javelin Throw',
        c: 'Long Jump',
        d: 'High Jump',
        correct: 'b'
    },
    {
        question: ' Novak Djokovic began the Wimbledon fortnight as the world No. 3 player. What is his current position in the world rankings?',
        a:'No 1',
        b: 'No 3',
        c: 'No 7',
        d: 'No 9',
        correct: 'c'
    },
    {
        question: ' Ireland has already made history by defeating the All Blacks for the first time in their history in New Zealand. In 1994, who was the last visiting team to win a series in New Zealand?',
        a:'England',
        b: 'The British and Irish Lions',
        c: 'Wales',
        d: 'France',
        correct: 'd'
    },
    {
        question: 'Which of the following footballers has the world record for the highest goal scorer for a single club?',
        a:'Lionel Messi(Barcelona FC)',
        b: 'Pele(Santos FC)',
        c: 'Gerd Muller (Bayern Munich)',
        d: 'Fernando Payrotes (Sporting CP)',
        correct: 'a'
    },
    {
        question: ' Who became the first player of Indian origin to play in an NBA game?',
        a:'Sim Bhullar',
        b: 'Palpreet Singh',
        c: 'Amjyot Singh',
        d: 'Satnam Singh',
        correct: 'a'
    },
    {
        question: "What does 2022’s Super Bowl have in common with 2021’s Super Bowl?",
        a:'No fans will attend the Super Bowl event',
        b: 'There will be no TV commercials in the US broadcast for the event',
        c: 'One of the teams is playing in their home stadium',
        d: 'Super Bowl will have the same referee as last year ',
        correct: 'c'
    },
    {
        question: 'Thomas Cup and Uber Cup are prestigious trophies of which sport?',
        a:'Badminton',
        b: 'Lawn Tennis',
        c: 'Table Tennis',
        d: 'Golf',
        correct: 'a'
    },
    {
        question: 'The Winter Olympics began in Beijing this year. Which other city has hosted the summer and winter Games?',
        a:'Vancouver',
        b: 'Athens',
        c: 'St Louis',
        d: 'None. Beijing is the first',
        correct: 'd'
    },
  

]

const quiz = document.getElementById('quiz');
const questElement = document.getElementById('question_hd');
const aElement = document.getElementById('a_text');
const bElement = document.getElementById('b_text');
const cElement = document.getElementById('c_text');
const dElement = document.getElementById('d_text');

const answerEls = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let answer = undefined;

let score = 0;

loadQuiz();

// To load the quiz questions unto the browser

function loadQuiz(){
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questElement.innerText = currentQuizData.question;
    aElement.innerText = currentQuizData.a;
    bElement.innerText = currentQuizData.b;
    cElement.innerText = currentQuizData.c;
    dElement.innerText = currentQuizData.d;

}

// when options are selected

function getSelected(){
    
    answerEls.forEach((answerEl) =>{
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
// To Deselect after loading next question
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
     answerEl.checked = false;
 });
     
 }

//  Submit button when clicked
submitBtn.addEventListener('click', () =>{

    const answer = getSelected();
    if (answer){
    
         if (answer === quizData[currentQuiz].correct){
        score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
        quiz.innerHTML = `<h2> you answered ${score} correctly, out of ${quizData.length} questions.</h2>
        <button onclick= "location.reload()">Reload</button>`;
        }
    }

    
} );











