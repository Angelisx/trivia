import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props){
    //return "<question" + val + "/>"
    return <p> {props.text} </p>;
}
function App() {
  let currentquestion = 0;
  return <div className="app"><Question text={data[currentquestion].question.text}/></div>;
  
}

export default App;