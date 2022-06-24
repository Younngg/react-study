import React, { useCallback, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const plus = useCallback(() => {
    setValue(value + 1);
  }, [value]); // value가 업데이트 되면 이 함수도 실행됨.
  //useCallback : 겉으로 나타나는 변화는 없음. 메모리를 아낄 수 있음
  //state 업데이트시 컴포넌트 처음부터 끝까지 다시 렌더링 됨. 10번 plus 함수를 실행시키면 Counter 함수가 10번 생성됨. 가비지컬렉팅..? 계속 다시만들어질때마다 counter가 참조하는 메모리가 다 생김. 사용하지 않는 메모리는 알아서 정리되어(가비지컬렉팅) 쌓이진 않음. 하지만 그렇게 되지 않도록 useCallback 사용.
  // 조건문 안에서 훅 사용 x

  /* useCallback(
    ()=> {

    }, [dependency]) */

  const resetPlus = useCallback(() => {
    setValue(0);
  }, []);

  return (
    <div>
      <h1> 값 : {value}</h1>
      <button onClick={plus}>plus +</button>
      <button onClick={resetPlus}>reset</button>
    </div>
  );
};

export default Counter;
