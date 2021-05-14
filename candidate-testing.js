const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions=[
"Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
 "What is the minimum crew size for the ISS? "]
let correctAnswers= ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name. ");
return candidateName;
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer= input.question(question);
  for (let i=0; i<questions.length; i++){
  candidateAnswer= input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);}
  
   //console.log(candidateAnswers);
}




// not currently accepting a parameter
function gradeQuiz(candicateAnswer){
/*console.log(`Candidate Name: ${candidateName}`)*/
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// for loop to iterate across answers and correct answers
//Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
let numberCorrect = 0;
const numberQuestions = questions.length;

for (let i= 0; i< candidateAnswers.length; i++){
  
  if (candidateAnswers[i].toLowerCase() ===  correctAnswers[i].toLowerCase()){
    (numberCorrect= numberCorrect +1);
  }

  console.log(`${(questions.indexOf(questions[i])+1)}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)}
  
 // return actual grade for quiz after asking and checking each question
  let grade = ((numberCorrect/numberQuestions)*100);
  //create new variables for number of correct answers, and number of questions, divide them and then *100
  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${numberQuestions} responses correct) <<<`);
  if (grade >= 80){
    console.log(">>> Status: PASSED <<<")
  }else{
  console.log('>>> Status: FAILED <<<')}

  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

 console.log("Candidate Name: " + candidateName); 
  askQuestion();

  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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