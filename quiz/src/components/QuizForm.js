import React, { useState, useEffect } from 'react';
const results = [{
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the fastest land animal?",
  correct_answer: "Cheetah",
  incorrect_answers: [
  "Lion",
  "Thomson&rsquo;s Gazelle",
  "Pronghorn Antelope"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the scientific name for modern day humans?",
  correct_answer: "Homo Sapiens",
  incorrect_answers: [
  "Homo Ergaster",
  "Homo Erectus",
  "Homo Neanderthalensis"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "Hippocampus is the Latin name for which marine creature?",
  correct_answer: "Seahorse",
  incorrect_answers: [
  "Dolphin",
  "Whale",
  "Octopus"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "How many legs do butterflies have?",
  correct_answer: "6",
  incorrect_answers: [
  "2",
  "4",
  "0"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What do you call a baby bat?",
  correct_answer: "Pup",
  incorrect_answers: [
  "Cub",
  "Chick",
  "Kid"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "Which class of animals are newts members of?",
  correct_answer: "Amphibian",
  incorrect_answers: [
  "Fish",
  "Reptiles",
  "Mammals"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the collective noun for a group of crows?",
  correct_answer: "Murder",
  incorrect_answers: [
  "Pack",
  "Gaggle",
  "Herd"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "By definition, where does an abyssopelagic animal live?",
  correct_answer: "At the bottom of the ocean",
  incorrect_answers: [
  "In the desert",
  "On top of a mountain",
  "Inside a tree"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What colour is the female blackbird?",
  correct_answer: "Brown",
  incorrect_answers: [
  "Black",
  "White",
  "Yellow"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "How many teeth does an adult rabbit have?",
  correct_answer: "28",
  incorrect_answers: [
  "30",
  "26",
  "24"
  ]
  }
  ];
function Quizform(){
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState(['','','','','','','','','','']);
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState(true);
  const [background, setBackground] = useState('white');

  useEffect(()=>{
    for(let i= 0; i<=10 ; i++){
      if(document.querySelector(`.questions${i}:checked`)){
    
     document.querySelector(`.questions${i}:checked`).parentNode.style.background='red';
    }
    }
  },[answers])

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(false);
    console.log(answers.length);
    setResult(answers.filter(e => e === 'correct').length);

  }

  const handleChange = (e, index) => {
    setBackground('white');

    console.log('answr', answers)
   setAnswer(e.target.value);
  setAnswers( [...answers.slice(0, index),
  e.target.value,
  ...answers.slice(index + 1)]);
  // document.querySelector(`.inputcontainer:focus-within`).style.background='white';

  // document.querySelector(`.questions${index}:checked`).parentNode.style.background='red';
  // setBackground('red')

  }
  return(
    <>
    {display &&
    <form onSubmit={handleSubmit} style={{display}}>
      {results.map((e, index)=> ( 
      <div key={index}>
      <p>{e.question}</p>
{/* 
      <select  onChange={(e)=> handleChange(e,index)}>

      {e.incorrect_answers.map(incorrect=> ( <option value="incorrect">{incorrect}</option>))}
      <option value="correct">{e.correct_answer}</option>

      </select>  */}
       <div class="answers">

      <label class="inputcontainer" style={{background}} > 
        <input className={`questions${index}`}  type="radio" name={`answer${index}`} value="correct" onChange={(e)=> handleChange(e,index)}/>
        {e.correct_answer}
      </label>
      {e.incorrect_answers.map(incorrect=>  <label class="inputcontainer" style={{background:'white'}}> 
        <input className={`questions${index}`} type="radio" name={`answer${index}`}  value="incorrect" onChange={(e)=> handleChange(e,index)}/>
        {incorrect}
      </label>)}
      </div> 

    </div>))}
    <input type="submit" value="Submit" />

    </form>
}
    {!display && <div> Your Result {result}</div>}
    </>
  )
}

export default Quizform;
