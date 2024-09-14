const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
    correct: 2
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    correct: 1
  },
  {
    question: "What does JS stand for?",
    options: ["Java Super", "Just Script", "JavaScript"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionElements = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3")];
const nextButton = document.getElementById("next-btn");
const playAgainButton = document.getElementById("play-again-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionElements.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
  });
}

function resetState() {
  optionElements.forEach(option => {
    option.disabled = false;
    option.style.backgroundColor = "#007bff"; // Reset button color
    option.style.color = "white";
  });
  nextButton.disabled = true;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctIndex = currentQuestion.correct;

  optionElements.forEach(option => option.disabled = true); // Disable all options

  if (selectedIndex === correctIndex) {
    score++;
    optionElements[selectedIndex].style.backgroundColor = "green"; // Correct answer
  } else {
    optionElements[selectedIndex].style.backgroundColor = "red"; // Wrong answer
    optionElements[correctIndex].style.backgroundColor = "green"; // Correct answer highlighted
  }

  nextButton.disabled = false; // Enable next button after an answer is selected
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionElement.textContent = `Game Over! You scored ${score} out of ${questions.length}`;
  optionElements.forEach(option => option.style.display = "none"); // Hide options
  nextButton.style.display = "none"; // Hide next button
  playAgainButton.style.display = "block"; // Show play again button
  scoreElement.textContent = `Final Score: ${score}/${questions.length}`;
}

function playAgain() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "block"; // Show next button
  playAgainButton.style.display = "none"; // Hide play again button
  optionElements.forEach(option => option.style.display = "block"); // Show options
  scoreElement.textContent = "";
  loadQuestion();
}

// Load the first question when the page loads
loadQuestion();
