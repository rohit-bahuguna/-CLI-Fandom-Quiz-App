const readlineSync = require('readline-sync');
const nextLine = '\n'
let score = 0;

const questions = [

  {
    question: 'What is the name of Thor’s hammer?',
    ans: 'Mjolnir'
  },
  {
    question: 'What is Captain America’s shield made of?',
    ans: 'Vibranium'
  },
  {
    question: 'what is the name of Iron Man’s A.I. butler?',
    ans: 'jarvis'
  }, {
    question: 'What is the real name of the Black Panther?',
    ans: 'T Challa'
  }, {
    question: 'What is the alien race Loki sends to invade Earth in The Avengers?',
    ans: ''
  }, {
    question: 'Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?',
    ans: 'Loki'
  }, {
    question: 'Who is killed by Loki in the Avengers?',
    ans: 'Agent Coulson'
  }, {
    question: 'Who is Black Panther’s sister?',
    ans: 'Shuri'
  }, {
    question: 'What type of doctor is Stephen Strange?',
    ans: 'Neurosurgeon'
  }, {
    question: 'What is Deadpool’s real name?',
    ans: 'Wade Wilson'
  }, {
    question: 'How many Infinity Stones are there?',
    ans: 'six'
  }, {
    question: 'In which film do we finally learn the backstory behind how Nick Fury lost his eye?',
    ans: 'Captain Marvel'
  }
]


const getAns = (givenAns, realAns) => {

  if (givenAns.toUpperCase() === realAns.toUpperCase()) {
    score++;

    console.log(`Right answer well done , you got a point${nextLine}your score is ${score}${nextLine}`)
  } else {
    if (score !== 0) {
      score--;
    }
    console.log(`Wrong answer ${nextLine} your score is ${score}${nextLine}`)
  }

}

const askQuestion = (questions) => {
  questions.map(value => {
    let input = readlineSync.question(`${value.question}${nextLine}`);
    return getAns(input, value.ans)
  })

  console.log(`your final score is ${score}`)
}
const welcome = () => {
  const getName = readlineSync.question(`hey what is your name${nextLine}`);
  console.log(`welcome to Fandom quiz, ${getName} let's play the quiz ${nextLine} `)
}


welcome()
askQuestion(questions)