import React, { useState } from 'react'

const App = () => {
  const age = 17;
  const [condition, setCondition]=useState(false);
  const [name, setName]=useState('');

  console.log('상태 초기값', condition)
  console.log('상태 초기값', name)

  //버튼을 클릭하면 이 함수 실행
  //true이면 false, false이면, true
  //조건을 변경해주는 함수생성
  const toggleCondition = ()=>{
    console.log(condition);
      setCondition(!condition);      
      console.log(condition);
  }

  const toggleName = ()=>{
    setName(!name);
    console.log(name);
  }

  //삼항연산자로 true일 때 false일 때 이름변경하는 함수 생성
const changeName = ()=> name ? "홍길동" : "손님"
const changeName2 = name ? "홍길동" : "이순신" 
console.log("변수확인",changeName2)

  return (
    <div>
      <h1>조건문:삼항연산자</h1>
      {
        age > 18 
        ? "18세 이상입니다. 입장하세요" 
        : "18세 이하입니다. 집에 가세요"
      }
      <hr/>
      
      {
        1+1===3
        ?(<div>1+1은 3이다</div>)
        :(<div>1+1은 3이 아니다</div>)
      }
      <hr/>
      <button onClick={toggleCondition}>버튼1번</button>
      <p>
        {
           (condition==true ? "열림":"닫힘")
        }
      </p>

      <button onClick={toggleName}>버튼2번</button>
      <p>{changeName()}</p>;
    </div>
  )
}

export default App