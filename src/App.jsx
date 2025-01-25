import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput]= useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 2
  });
  const isValidInput = userInput.duration > 0 ? true :  false;

  function handleChange(identifier, value) {
    setUserInput({
      ...userInput,
      [identifier]: Number(value),
    });
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleChange={handleChange} />
      {isValidInput ? 
      <Result userInput={userInput}/>
      : 
      <p className="center">Please enter duration greater than 0</p>}
    </>
  )
}

export default App
