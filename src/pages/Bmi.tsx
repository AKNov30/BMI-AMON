import Button from "../components/Button";
import React, { useState } from "react";

function Bmi() {

  const [height,setHeight] = useState<number>(0); 
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>();

  const onChangeHeight = (event:React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value) // + เปลี่ยนค่าเป็น number
    console.log(height);
  }

  const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value) // + เปลี่ยนค่าเป็น number
    console.log(weight)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(height);
    console.log(weight);
    const bmi = weight / (height/100)**2
    console.log(`BMI : ${bmi}`)

    setBmi(+bmi.toFixed(2))
  }

  return (
    <>
    <div className="main">
      <h1>BMI Calculator {bmi}</h1>
      <form onSubmit={onSubmit} className="content">
        <div className="input">
          <label htmlFor="height">Height:</label>
          <input type="text" placeholder="height" id="height" name="height" onChange={onChangeHeight} />
        </div>
        <div className="input">
          <label htmlFor="password">Weight:</label>
          <input type="text" placeholder="weight" id="weight" name="weight" onChange={onChangeWeight}/>
        </div>
        <div className="buttonBMI">
          <Button text="Calculate BMI" />
        </div>
      </form>
    </div>
    </>
  );
}

export default Bmi;
