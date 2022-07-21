import { useState } from "react";

const Calculator = (props) => {
    const [firstNum, setfirstNum] = useState("");
    const [secondNum, setsecondNum] = useState("");
    const [answer, setAnswer] = useState("");
    const calc = ()=>{
        
        const result = "5"
        setAnswer(result)
        const logItem = firstNum + " + " + secondNum + " = " + result
        console.log('logItem', logItem)
        setList([   ...list, logItem])
    }
    const [list, setList] = useState([])
    const [operator, setOperator] = useState("")





    console.log('firstNum', firstNum);
    console.log('secondNum', secondNum);
    console.log('answer', answer);
    console.log('list', list);
    console.log('operator', operator);

    return <div>
        math do thingy
        <input
         type="text" 
         onChange={(e)=>setfirstNum(e.target.value)}
         value={firstNum}/>
        <input
         type="radio"
         onClick={(e)=>setOperator(e.target.value)}
         value={operator}/>
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