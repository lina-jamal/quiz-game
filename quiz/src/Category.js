import React ,{useState,useEffect} from 'react';
import {CategoryData,DifficultyData} from './Data';

function Category () {
  const[cat,setCat]=useState('');
  const[diff,setDiff]=useState('');
  const [questions,setQuestions]=useState([]);
  const[show,setShow]=useState(true);
  useEffect(()=>{

    if(cat||diff){
    fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}`)
    .then(res => res.json()).then(({results})=>setQuestions(results))
    .catch(error => console.error(error))}
    else{
      setQuestions([]);
    }
  },[cat,diff])

  return(
    <>
    <form className='form-container' style ={{display :show? 'block':'none'}}>
    
     <label htmlFor='category'>Select category: </label>
     <select id ='category' name = {cat} onChange={(e)=> setCat(e.target.value)}>
     {CategoryData.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
     </select>

     <label htmlFor = 'difficulty'> select difficulty</label>
     <select id = 'difficulty' name = {diff}  onChange={(e)=> setDiff(e.target.value)}> 
     {DifficultyData.map((dif,index)=><option key ={index} value ={dif} >{dif}</option>)}
     </select>
  
     <button type= 'submit' onClick={(e)=>{
       setShow(!show)
       e.preventDefault()
        }}>Go To Questions </button>
     </form>
    </>
  )

}
export default Category;
