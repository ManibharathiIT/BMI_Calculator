import { useState } from "react"

const Calculator = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState("null");
    const [status,setStatus]=useState("");
    const [error,setError]=useState("");
    const Calculate_Bmi=()=>{
        if(height && weight){
            const heightInMeter=height/100;
            const bmiValue=weight/(heightInMeter*heightInMeter);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5){
                setStatus("Under weight");
            }
            else if(bmiValue>=18.5 && bmiValue<=24.9){
                setStatus("Normal weight");
            }
            else{
                setStatus("Over weight");
            }
        }
        else{
            setBmi(null);
            setStatus("");
            setError("Please Enter the Valid Numerice values for Height and Weight");
        };
    };
  return (
    <div className="bmi-calculator">
        <div className="data">
            <h1 className="space">BMI Calculator</h1>
            {error && (<p className="error">{error}</p>)}
            <div className="input-container space">
                <label htmlFor="height">Height(cm):</label>
                <input type="text" value={height} name="" id="height" onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div className="input-container space">
                <label htmlFor="weight">Weight(kg):</label>
                <input type="text" value={weight} name="" id="weight" onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button className="space" onClick={Calculate_Bmi}>Calculate BMI</button>
            {bmi !==null && (
                <div className="result space">
                <p>Your BMI is : {bmi}</p>
                <p>Status : {status}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default Calculator
