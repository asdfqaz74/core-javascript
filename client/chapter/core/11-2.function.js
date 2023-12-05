/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // console.log(arguments);
  let total = 0;

  /*   // for 문
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    total += arguments[i];
    console.log(total);
  }
  return a + b + c + d + e + f + g; */

  /*   for...of 문
  for(let value of arguments){
  total += value;
  } */

  // 빌려쓰기
  /*   Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  // arguments의 (태생)부모 자체를 배열로 바꿔 버리면?
  /*   arguments.__proto__ = Array.prototype;
  console.log(arguments); */

  // 진짜 배열 만들기
  // const arr = Array.prototype.slice.call(arguments);
  // const arr = Array.from(arguments);
  const arr = [...arguments]; // spread Syntax

  // arr.forEach(item => total += item)

  /*   arr.forEach(function (item) {
    total += item;
  }); */

  /*   total = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0); */

  return arr.reduce((acc, cur) => acc, 0);
};

// forEach  값을 반환하지 않음
// reduce   값을 반환함 (코드 자체를 줄일 수 있어서 reduce)
// map      값을 반환함 단, 배열만 반환

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// console.log(result);
// console.log(calculateTotal);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }

  // return isActive ? success() : fail()
};

cb(
  true,
  function () {
    console.log('성공!');
  },
  function () {
    console.log('실패!');
  }
);

function movePage(url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail({ message: '에러입니다!' });
  }
}

movePage(
  'https://www.naver.com',

  function (url) {
    console.log(url + ' 페이지로 넘어갑니다.');
  },

  function (err) {
    console.log(err.message);
  }
);

// 번외 화살표 함수
movePage(
  'https://www.naver.com',
  (url) => console.log(url),
  (err) => console.log(err)
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// 📂
// import css from 'css.js' // module

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 모듈화

/* const MASTER = (function (g){


  console.log( g.alert() );
  let uuid =  'askdjazxjd!@#!@$123';


  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})(window); */

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css;
})();

/* const arr = ['김다영', '이경화', '김용범'];

// forEach 로 처리하기
/* const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

let name = [];

arr.forEach(function(item){
  name.push(item + '-hi')
})

console.log(name); */

// reduce 로 처리하기
/* const name = arr.reduce(function(acc,cur){

  acc.push(cur + '-hi');

  return acc;
},[])

console.log( name ); */

// map 으로 처리하기
/* const name = arr.map(function (item) {
  return item + '-hi';
});

console.log(name); */
