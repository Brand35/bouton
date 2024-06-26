import { React, useState } from "react";
import './style.nodule.css';

function Button() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) { 
      setCounter((count) => count - 1);
    }
  };
  //reset counter
  const reset = () => {
    setCounter(0);
  };
// en render je veux afficher le compteur au milieur par un span  suivie des bouttons + / - / reset 
// j'ai utiliser la condition if pour definir que le compteur ne pass pas la bar des zero.
  return (
    <div className="counter">
    <h1>compteur</h1>
    <span className="counter__output">{counter}</span> 
    <div className="btn__container">
      <button className="control__btn" onClick={increase}>+</button> 
      <button className="control__btn" onClick={decrease}>-</button>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  </div>);
}
export default Button;
