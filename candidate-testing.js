const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
//DONE. Done via arrays holding qs and as and looping

// TODO 1.1a: Define candidateName // 
// DONE. Defined as a simple, empty string.
let candidateName;
candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//Should some of these be commented out now? Don't think so for tests 1-6 purposes.
let question;
question = "Who was the first American woman in space? ";
let correctAnswer;
correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = "";


//TODO: Variables for Part 
//array for questions
let questions;
questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
                                                             //Should the last none be a number, not a string? Lacks quotes on web, unlike 40. 
let correctAnswers; 
//And answers
correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
//stores user input
let candidateAnswers;
candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  //Use realine-sync's input.question() to ge the input then assigns that value to candidateName.
  //Formerly blank question and console.log() acually asking it but only using one prettier/more elegant.
  candidateName = input.question("Please enter your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //Initialized for the while loop.
  i = 0;
  //Iterate through each question
  while (i < questions.length){
    //ask the Question
    candidateAnswer = input.question(questions[i]);
    //Push the answer into the CandidateAnswers array
    candidateAnswers.push(candidateAnswer);
    i++;
  }
}

function gradeQuiz(candidateAnswers) {

  //Count for grading
  let numberCorrect = 0;
  //Iterate through the correctAnswers array, comparing the answer at each location with the same in the candidateAnswers array 
  for(let i = 0; i < correctAnswers.length; i++){
    //Before comparing get rid of trailing spaces from user's answer. Make both answers upper case to make comparison case insensitive.
    if(candidateAnswers[i].trim().toUpperCase() === correctAnswers[i].toUpperCase()){``
      //Each correct answer is noted and added to the total
      numberCorrect += 1;
    }
  //Trying to get this to look prettier than currently is. Literals don't like making variable length answers line up.
  //Maybe swap order since correct answer is set?
  //And/Or put first part at top prior to loop and have the answers be here still just for ease of typing on my en? 
  console.log(`USER ANSWER          CORRECT ANSWER
${candidateAnswers[i]}                    ${correctAnswers[i]}`)  
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade = (numberCorrect/questions.length*100); // Simple math problem. Ended up just doing it.
  //Inform user whether they passed or not. 80% or higher passes.
  if(grade >= 80) {
    console.log("CONGRATULATIONST! You passed with a score of "+grade+"%. Consider yourself hired, astronaut!");
  }else{
    console.log("Sorry, you scored "+grade+"%. You need 80% to pass. Better luck next time, space cowpoke.");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, "+candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
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