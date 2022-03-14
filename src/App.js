import { useState } from 'react';
import './App.css';



function App(){

  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ['/','*','+','.','-'];

  const updateCalc  = value =>{

    if(ops.includes(value) && calc === '' || 
    ops.includes(value) && ops.includes(calc.slice(-1)))
    {return;}
   setCalc(calc + value);
   if(!ops.includes(value)){
     setResult(eval(calc + value).toString());
    }
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }
 
  const deleteLast = () =>{
    if(calc == ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
  

  return (
    <div className = "App">
      
      
      <div className = 'calculator'>
       <div className = 'display'>
          {result ? <span>({result})</span> : ''} &nbsp; {calc || "0"}
       </div>

       <div className = "operators">
          <button onClick = {() =>updateCalc('/')}  value="/"> / </button>
          <button onClick = {() =>updateCalc('*')}  value="*"> x </button>
          <button onClick = {() =>updateCalc('+')}  value="+"> + </button>
          <button onClick = {() =>updateCalc('-')}  value="-"> ‑ </button> 
          <button onClick = {deleteLast}  value="Ac"> AC </button>
       </div>

       <div className="digits">
         <button onClick = {() =>updateCalc('1')}  value="1"> 1 </button>
         <button onClick = {() =>updateCalc('2')}  value="2"> 2 </button>
         <button onClick = {() =>updateCalc('3')}  value="3"> 3 </button>
         <button onClick = {() =>updateCalc('4')}  value="4"> 4 </button>
         <button onClick = {() =>updateCalc('5')}  value="5"> 5 </button> 
         <button onClick = {() =>updateCalc('6')}  value="6"> 6 </button>
         <button onClick = {() =>updateCalc('7')}  value="7"> 7 </button>
         <button onClick = {() =>updateCalc('8')}  value="8"> 8 </button>
         <button onClick = {() =>updateCalc('9')}  value="9"> 9 </button>
         <button onClick = {() =>updateCalc('0')}  value="0"> 0 </button>  
         <button onClick = {() =>updateCalc('.')}  value="."> . </button>
         <button onClick = {calculate}  value="="> = </button>

        </div>
     </div>
     
    </div>
  );
}

export default App;
