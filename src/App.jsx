import reviews from "./data";
import { useState,useEffect } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";

const App = () => {

  const[index,setIndex] = useState(0);
  const{id,name,job,image,text} =reviews[index];

function randomUser(){

  setIndex(Math.floor(Math.random()*reviews.length));
}
    
  


function backwardMove(){
    if(index >0){
      setIndex(index-1)
    }
    else{
      setIndex(reviews.length-1)
    }
  
  }

function forwardMove(){
    
    if(index <reviews.length-1){
      setIndex(index+1)
    }
    else{
      setIndex(0)
    }
   
  }
 
return <section className="reviewSheet">
  <div className="review">
    <div className="imgQuote">
      <RiDoubleQuotesR />
      </div>
    <img src={image}>
      
    </img>
    <h2>{name}</h2>
    <h5>{job}</h5>
    <p>{text}</p>
  
  <div>
  <IoIosArrowBack onClick={backwardMove} />
  <IoChevronForwardOutline onClick={forwardMove} />
  </div>
  <button onClick={randomUser}>Surprise me</button>
  </div>
</section>;
};
export default App;
