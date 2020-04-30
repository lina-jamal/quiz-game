import React, { useState, useEffect } from "react";

function Quizform({ questions }) {
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState(true);
  // const [background, setBackground] = useState('white');

  useEffect(() => {
    for (let i = 0; i <= 10; i++) {
      if (document.querySelector(`.questions${i}:checked`)) {
        document.querySelector(
          `.questions${i}:checked`
        ).parentNode.style.background = "red";
      }
    }
  }, [answers]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(false);
    setResult(answers.filter((e) => e === "correct").length);
  };

  const handleChange = (e, index) => {
    setAnswer(e.target.value);
    setAnswers([
      ...answers.slice(0, index),
      e.target.value,
      ...answers.slice(index + 1),
    ]);
    // document.querySelector(`.inputcontainer:focus-within`).style.background='white';

    // document.querySelector(`.questions${index}:checked`).parentNode.style.background='red';
    // setBackground('red')
  };
  return (
    <>
      {display && (
        <form onSubmit={handleSubmit} >
          {questions.map((e, index) => (
            <div key={index}>
              <p>{e.question}</p>

              <div class="answers">
                <label class="inputcontainer">
                  <input
                    className={`questions${index}`}
                    type="radio"
                    name={`answer${index}`}
                    value="correct"
                    onChange={(e) => handleChange(e, index)}
                  />
                  {e.correct_answer}
                </label>
                {e.incorrect_answers.map((incorrect) => (
                  <label class="inputcontainer">
                    <input
                      className={`questions${index}`}
                      type="radio"
                      name={`answer${index}`}
                      value="incorrect"
                      onChange={(e) => handleChange(e, index)}
                    />
                    {incorrect}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <input type="submit" value="Submit" className="submitBtn" />
        </form>
      )}
      {!display && <div> Your Result {result}</div>}
    </>
  );
}

export default Quizform;
