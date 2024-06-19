const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// DONE. Defined as a simple, empty string.
let candidateName;
candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = "Who was the first American woman in space? ";
let correctAnswer;
correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  //Use realine-sync's input.question() to ge the input then assigns that value to candidateName.
  //Formerly blank question and console.log() acually asking it but only using one prettier/more elegant.
  candidateName = input.question("Please enter your name: ")
  //Print the user's name. For testing purposes.
  //console.log("Your name is: "+candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //console.log(question);
  candidateAnswer = input.question(question);
  //Print the candidate's answer. For testing purposes.
  //console.log(candidateAnswer);

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  //Before comparing get rid of trailing spaces from user's answer. Make both answers upper case to make comparison case insensitive.

  if(candidateAnswer.trim().toUpperCase() === correctAnswer.toUpperCase()){
    console.log("Correct!");
  } else{
    console.log("Incorrect!");
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, "+candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

//For personal testing.
//runProgram();

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