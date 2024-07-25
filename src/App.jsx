import React, { useState } from 'react';
import quizQuestions from './api/quizQuestions'; // Assuming you have quizQuestions defined in a separate file

function App() {
  const [q, setQ] = useState(quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([])
  const [count, setCount] = useState(0)

  const handleAnswer = (answer, qno) => {
    console.log(answer, qno)

    if (answer === q[qno].answer) {
      setAnswer(answer => [...answer, true])
      setCurrentQuestion(currentQuestion => currentQuestion + 1)
    }
    else{
      setCurrentQuestion(currentQuestion => currentQuestion + 1)
    }
  }
  console.log(answer)
  return (
    <>
      <section className='container text-center'>
        {q.map((question, index) => (
          <div className='' style={{ display: index === currentQuestion ? 'block' : 'none' }} >
            <p key={index} className='display-7 fw-bold'>
              {question.question}

            </p>

            {question.options.map((answer, index) => (
              <ul key={index}>
                <li className='list-group-item '>
                  <div className="d-grid gap-2" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light btn-lg" onClick={() => { handleAnswer(answer, currentQuestion) }}>{answer}</button>
                  </div>
                </li>
              </ul>
            ))}

          </div>))}
        {currentQuestion <= q.length - 1 ? (<>
          {/* <button onClick={() => { setCurrentQuestion(currentQuestion => currentQuestion + 1) }} className='btn btn-primary'>Next</button> */}
        </>) : (<><p>Your Score is {answer.length}</p></>)}

      </section>


    </>
  );
}

export default App;
