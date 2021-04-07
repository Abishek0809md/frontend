import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who Develop React.js??',
			answerOptions: [
				{ answerText: ' Apple', isCorrect: false },
				{ answerText: 'twitter', isCorrect: false },
				{ answerText: 'facebook', isCorrect: true },
				{ answerText: 'google', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
    },
      {
        questionText: 'how many elements does a react component return?',
        answerOptions: [
          { answerText: '2 elements', isCorrect: false },
          { answerText: '0 elements', isCorrect: false },
          { answerText: 'multiple elements', isCorrect: true },
          { answerText: '5 elements', isCorrect: false },
        ],
		},
    {
      questionText: 'what does the "webpack" command do?',
      answerOptions: [
        { answerText: 'Transpiles all the javascript down into one file', isCorrect: false },
        { answerText: 'Run react local development server', isCorrect: false },
        { answerText: 'A module bundler', isCorrect: true },
        { answerText: 'all of the above', isCorrect: false },
      ],
  },
  {
    questionText: 'How can you access the state of a component from inside of a member function?',
    answerOptions: [
      { answerText: 'this.getState()', isCorrect: false },
      { answerText: 'this.values', isCorrect: true },
      { answerText: 'this.prototype.stateValue', isCorrect: false },
      { answerText: 'all of the above', isCorrect: false },
    ],
},
{
  questionText: 'Which of the following is the correct dat flow sequence of flux concept?',
  answerOptions: [
    { answerText: ' Dispatcher->Action->Store->View', isCorrect: false },
    { answerText: 'Action->Dispatcher->View->Store', isCorrect: false },
    { answerText: 'Action->Dispatcher->Store->view', isCorrect: true },
    { answerText: 'all of the above', isCorrect: false },
  ],
},
{
  questionText: 'What is the name of React.js Developer ?',
  answerOptions: [
    { answerText: 'Jordan mike', isCorrect: false },
    { answerText: 'Jordan Lee', isCorrect: false },
    { answerText: 'Jordan Walke', isCorrect: true },
    { answerText: 'Tim Lee', isCorrect: false },
  ],
},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
