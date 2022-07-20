import { useState } from "react";

const Calculator = (props) => {
    const [firstNum, setfirstNum] = useState("");
    const [secondNum, setsecondNum] = useState("");
    const [answer, setAnswer] = useState("");
    const calc = ()=>{
        const result = Number(firstNum) + Number(secondNum)
        setAnswer(result)
        const logItem = firstNum + " + " + secondNum + " = " + result
        console.log('logItem', logItem)
        setList([   ...list, logItem])
    }
    const [list, setList] = useState([])
        
    // {list.map(el=>{return <div>{el}</div>})}


    // To track the first number
    // add a controlled input

    // To track the second number
    // add another controlled input

    // To do the math
    // answer firstNum + secondNum

    // Show the answer
    // show {answer} in the return

    console.log('firstNum', firstNum);
    console.log('secondNum', secondNum);
    console.log('answer', answer);
    console.log('list', list);

    return <div>
        math do thingy
        <input
         type="text" 
         onChange={(e)=>setfirstNum(e.target.value)}
         value={firstNum}/>
        <input
         type="text"
         onChange={(e)=>setsecondNum(e.target.value)}
         value={secondNum}/>
        <button onClick={(calc)}>
            Calculate
        </button>
        = {answer}
        <div>
        {list.map(el=> <div>{el}</div>)}
        </div>
        
    </div>
    
}

export default Calculator;