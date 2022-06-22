import './App.css';
import FunList from './FunList/index';
import Test from './Test/Test';
import { useState } from 'react';
import LangBox from './LangBox/LangBox.jsx';

function App() {
  const [num, setNum] = useState(0); //변수, 변수를 변화시킬 수 있는 함수. 보통 구조분해할당으로 사용. 초기값이 있어야 함
  const [name, setName] = useState('미니');
  const [isOn, setIsOn] = useState(false);
  const [langisOn, setlangIsOn] = useState(false);

  const plus = () => {
    setNum(number => number+1)
  }

  const minus = () => {
    setNum(number => number-1)
  }

  const changeName = ()=> {
    setName(name==='미니'?'미키':'미니')
  }

  const showFun = () => {
    setIsOn(isOn => !isOn)
  }
  const showLang = () => {
    setlangIsOn(langisOn => !langisOn)
  }

  return (
    <div className="App">
      <h1 className='logo' onClick={showFun}>Fun</h1>
      <div className={ isOn ? `fun-box on`:`fun-box off`}>
        <FunList/>  
      </div>
      <Test />
      <div className='count-box'>
        <h2>{num}</h2>
        <button onClick={plus}>증가</button>
        <button onClick={minus}>감소</button>
      </div>
      <div>
        <h2>{name}</h2>
        <button onClick={changeName}>changeName</button>
      </div>
      <button onClick={showLang}>lang</button>
      <div className={langisOn ? `langbox on` : `langbox off`}>
        <LangBox/>
      </div>
    </div>  
  );
}

export default App;
