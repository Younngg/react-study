import React, { useEffect, useRef, useState } from 'react';
import './../style/main.css';
const box = { count: 10 };

const Main = () => {
  box.count = 100;
  const listData = ['01', '02', '03', '04'];
  const [num, setNum] = useState(0);
  const [check, setCheck] = useState('next');
  const checkRef = useRef('next');
  //console.log(checkRef) {current: 'next' } 객체타입ㅇ로 값을 저장하고 사용 가능

  listData.unshift(listData[listData.length - 1]); /* 앞에 붙이기 인덱스번호 바뀜?? 어쩌구 */
  const fncClassAdd = (index) => {
    const on = index === num ? ' on' : ' on';
    const view = 'view_';
    const textNum = '00000' + (index + 1);
    const viewText = view + textNum.slice(-2);
    /* console.log(viewText); */
    return viewText + on;
  };
  const initialStyle = {
    position: `relative`,
    left: '-100%',
    marginLeft: `${num * -100}%`,
  };
  const [slideStyle, setSlideStyle] = useState(initialStyle);
  const fncPrevStyle = () => {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 3 ? 'margin 500ms ease' : 'none',
      animation: num === 3 ? 'lastSlide 500ms ease 1' : 'none',
    });
  };
  const fncNextStyle = () => {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 0 ? 'margin 500ms ease' : 'none',
      animation: num === 0 ? 'firstSlide 500ms ease 1' : 'none',
    });
  };

  const fncPrevSlide = () => {
    setNum(num <= 0 ? 3 : num - 1);
    checkRef.current = 'prev';
  };
  const fncNextSlide = () => {
    setNum(num >= 3 ? 0 : num + 1);
    checkRef.current = 'next';
  };
  // 버튼 클릭하면 fncnextslide 호출,
  // setnum과 setcheck가 업데이트
  // useEffect 사용해서 num의 변화,체크 상태가 어떤지 감지하고 next가 들어있으면 fncnextstyle 호출하여 ul에 스타일을 입힌다

  useEffect(() => {
    checkRef.current === 'next' ? fncNextStyle() : fncPrevStyle();
  }, [num]);
  return (
    <div className='mainContainer'>
      <h2>메인페이지</h2>
      <div className='viewBox'>
        <div className='slideBtn'>
          <button type='button' onClick={fncPrevSlide}>
            이전
          </button>
          <button type='button' onClick={fncNextSlide}>
            이후
          </button>
        </div>
      </div>
      <div className='viewContents'>
        <ul style={slideStyle}>
          {listData.map((list, index) => {
            return <li className={fncClassAdd(index)}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;

/* 
const list = [1,2,3,4,5,a,b]
const list2 = list
const list2 = [...list]
const obj = {a: 1, b: 2, c: 3}
// const obj2 = obj 참조만 맞춘 것
const obj2 = {...obj, c:4, b:1, e:8}
console.log(obj, obj2)


useState : 값이 바뀌면 해당하는 변수에 값을 재할당하기 위해 컴포넌트를 다시 렌더링함. 

useRef : 값이 바뀌더라도 다시 렌더링이 되지 않는다. 

const box = {a : 0}
box.a = 10 : useRef. 함수가 재렌더링되지 않음.

const box = {a : 0}
const [box, setBox] = useState(0)
setBox(10) - 컴포넌트 재랜더링 useState는 메인 함수를 다시 호출하는 콜백함수

*/
