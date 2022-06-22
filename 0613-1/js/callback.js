const fnc1 = (data) => {
  const result3 = data * data;
  return result3;
  //Math.pow
  //** : 거듭제곱 연산자
};
const fnc2 = (data, fnc) => {
  const result2 = data / 2;
  return fnc(result2);
};
const fnc3 = (data, fnc) => {
  const result1 = data * 5;
  return fnc(result1, fnc1);
};

let finalResult = fnc3(4, fnc2);

console.log(finalResult);

/* 
fnc3(4, fnc2) :
4 * 5
fnc2(20, fnc1) :
20 / 2
fnc1(10) :
10*10
= 100
*/
