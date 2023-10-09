const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Hello, What is your name? ");
}

let numQuestions = 0;

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question("Who was the first American woman in space? ");
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    
  }
}



function gradeQuiz(candidateAnswers) {
  let numOfCorrectAnswers = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer == correctAnswer){
//   console.log("correct");
// } else{
//   console.log("incorrect");
// }
console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numOfCorrectAnswers += 1;
      console.log(`${i + 1}) ${questions[i]}\n The correct answer is ${correctAnswers[i]}\n Your answer is ${candidateAnswers[i]}\n`);
      // console.log(numOfCorrectAnswers);
    } else {
      console.log(`${i + 1}) ${questions[i]}\n The correct answer is ${correctAnswers[i]}\n Your answer is ${candidateAnswers[i]}\n`);
    }
  }

  let grade = 0;  
  //TODO 3.2 use this variable to calculate the candidates score.
  grade = ( numOfCorrectAnswers / questions.length) * 100; 
if (grade >= 80){
  console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} of ${questions.length} responses correct) <<<\n>>> Status: PASSED <<<`);
}else{
  console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} of ${questions.length} responses correct) <<<\n>>> Status: FAILED <<<`);
}
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " +candidateName+  ". Thank you for taking this test. ");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};