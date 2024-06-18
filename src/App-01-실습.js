import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [isChecked, setIsChecked]= useState(false);

  function changeNum(value){
    setNum(value);
  }
  return (
    <div>
      <input type='number' value={num} onChange={(e)=>{changeNum(e.target.value)}}/>
      
      <hr/>
      <input type='checkbox' value={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}/>
      
      {
       isChecked ? <span>체크됨</span> : <span>체크안됨</span>
      }

    </div>
  )
}

export default App