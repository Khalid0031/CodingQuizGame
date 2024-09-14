let questions = [
    {
      question: "What is the correct syntax to output 'Hello World' in Python?",
      options: ["print('Hello World')", "echo 'Hello World'", "printf('Hello World')"],
      answer: 1
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
      answer: 2
    },
    {
      question: "Which language is used to style the appearance of web apps?",
      options: ["PHP", "JavaScript", "CSS"],
      answer: 3
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;  // This prevents answering the same question multiple times
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("option1").textContent = currentQuestion.options[0];
    document.getElementById("option2").textContent = currentQuestion.options[1];
    document.getElementById("option3").textContent = currentQuestion.options[2];
    answered = false; // Reset for the next question
  }
  
  function checkAnswer(option) {
    if (answered) return;  // Prevent multiple attempts on the same question
  
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong answer!");
    }
  
    answered = true; // Mark this question as answered
    document.getElementById("next-btn").disabled = false; // Enable the Next button
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      // End of the game, show score and play again button
      document.getElementById("score").textContent = `Game Over! Your score is: ${score}/${questions.length}`;
      document.getElementById("next-btn").style.display = "none"; // Hide the Next button
      document.getElementById("play-again-btn").style.display = "inline"; // Show Play Again button
    } else {
      displayQuestion();
      document.getElementById("next-btn").disabled = true; // Disable the Next button until an answer is given
    }
  }
  
  function playAgain() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = ""; // Clear the score text
    document.getElementById("next-btn").style.display = "inline"; // Show the Next button
    document.getElementById("play-again-btn").style.display = "none"; // Hide Play Again button
    displayQuestion();  // Start the quiz again
  }
  
  // Start the game by displaying the first question
  displayQuestion();
  document.getElementById("next-btn").disabled = true; // Initially disable Next button
  