import './App.css';
import React,{useState} from 'react'
function App() {
  const [value, setValue]=useState('');
  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'> 
            <input type="text" value={value}></input>
          </div>
          <div>
            <input type='button' value='AC' onClick={e => setValue(' ')}></input>
            <input type='button' value='DE' onClick={e => setValue(value.slice(0,-1))}></input>
            <input type='button' value='.'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='/'onClick={e => setValue(value+ e.target.value)}></input>
          </div>
          <div>
            <input type='button' value='7' onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='8'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='9'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='*'onClick={e => setValue(value+ e.target.value)}></input>
          </div>
          <div>
            <input type='button' value='4'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='5'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='6'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='+'onClick={e => setValue(value+ e.target.value)}></input>
          </div>
          <div>
            <input type='button' value='1'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='2'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='3'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='-'onClick={e => setValue(value+ e.target.value)}></input>
          </div>
          <div>
            <input type='button' value='00'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='0'onClick={e => setValue(value+ e.target.value)}></input>
            <input type='button' value='=' className='equal'onClick={e => {
              try{
                const result= eval(value);
                setValue(result.toString());
              }catch(error){
                setValue('');
              }}} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
