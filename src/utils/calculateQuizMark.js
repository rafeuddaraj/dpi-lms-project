export default function calculateQuizMark(quizData = []) {
  let totalMarks = 0;

  quizData.forEach(question => {
    let isPerfectlyCorrect = true;

    question.options.forEach(option => {
      if (option.isCorrect !== option.checked) {
        isPerfectlyCorrect = false;
      }
    });

    if (isPerfectlyCorrect) {
      totalMarks += 5;
    }
  });

  return totalMarks;
}



/*

[
    {
      id: 1,
      question: 'What is a Debounce function in JavaScript?',
      video_id: 1,
      video_title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
      options: [
        {
          id: '1',
          option: 'A function that is called after a certain time interval',
          isCorrect: true,
          checked: false
        },
        {
          id: '2',
          option: 'A function that is called after a certain time interval',
          isCorrect: false,
          checked: false
        },
        {
          id: 3,
          option: 'A function that is called after a certain time interval',
          isCorrect: false,
          checked: false
        },
        {
          id: 4,
          option: 'A function that is called after a certain time interval',
          isCorrect: false,
          checked: false
        }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is an example of a situation where you would use the Debounce function?',
      video_id: 1,
      video_title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
      options: [
        {
          id: '1',
          option: 'A search bar where the results are displayed as you type.',
          isCorrect: true,
          checked: false
        },
        {
          id: '2',
          option: 'A button that performs an action when clicked.',
          isCorrect: false,
          checked: false
        },
        {
          id: 3,
          option: 'An animation that plays when a user hovers over an element.',
          isCorrect: false,
          checked: false
        },
        {
          id: 4,
          option: 'All of the above.',
          isCorrect: false,
          checked: false
        }
      ]
    }
  ]

*/