import React from "react";
import { ACTIONS } from "./CalcMain";

export default function DigitButton({dispatch, digit}){
  return (
    <button onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}
    >
        {digit}
    </button>

  )
};
