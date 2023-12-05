/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// 화살표 함수는 arguments 가 없다
// ... 쓰면 배열이 된다. 배열로 만들 필요가 없다.
// 매개변수 안에서 쓰면 rest parameter이다.
// let calcAllMoney = (...rest) => {};

let calcAllMoney = (...args) => {
  // 함수표현식
  // let total = 0;
  /*   total = args.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  return total; */

  // 화살표 함수
  let total = 0;
  total = args.reduce((acc, cur) => acc + cur, 0);
  return total;
};

let calcAllMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(1000, 5000, 4500, 15000);
// const result2 = calcAllMoney2(2000, 5000, 4500, 15000);
// console.log(result);
// console.log(result2);

// 객체를 return 할 때는 중괄호 밖에 소괄호를 해줘야 한다.
/* let user = () => ({ name: 'tiger', age: 36 });
console.log(user()); */

// 화살표 함수와 this

// 일반함수
// - constructor 내장
// this : 나를 호출한 대상을 this 로 찾음
// 객체의 메서드로 사용이 많이 됨. => this를 찾기 위해

// 화살표함수
// - constructor 비내장
// - this : 자체를 바인딩(가지지) 않음
// - 메서드 안의 함수로 많이 사용됨. => 내 상위 this를 가져오기 위해

const user = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  // totalGrades: function () {
  //  this.grades.forEach(function () {
  //     console.log(this);
  //   });

  // 이건 머임?
  // this.grades.forEach((item) => {
  //     this.total += item;
  //   });
  //   return this.total;

  // console.log('일반 함수 :', this);

  // 전역에서 this 를 찾으려고 함
  // function sayHi() {
  //     console.log('sayHi : ', this);
  //   }

  // 상위에서 this 를 찾으려고 함
  //   const sayHi = () => {
  //   console.log('sayHi : ', this);
  // };

  // sayHi();
  // },

  // 국룰 (메소드축약형 + (화살표함수))
  totalGrades() {
    this.grades.forEach((item) => (this.total += item));

    return this.total;
  },
};
const result2 = user.totalGrades();
// console.log(result2);
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

// let powExpression = (numeric, powerCount) => {
//   return Array(powerCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc * numeric;
//     }, 1);
// };

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

console.log(pow(2, 53));
console.log(powExpression(2, 53));
// repeat(text: string, repeatCount: number): string;

/* let repeat = (text, num) => {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result = text;
  }
  return result;
}; */

let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, '');
};

let repeatExp = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

console.log(repeat('hello', 3)); // 'hellohellohello'
console.log(repeatExpression('hello', 4)); // 'hellohellohello'
console.log(repeatExp('hello', 5)); // 'hellohellohello'

// map : 배열을 받아 새로운 배열을 반환(생성)하기 위해
// filter : 배열을 받아 필터링된 값들만 배열로 반환하기 위해
// reduce : 배열을 받아 무언가의 값으로 만들기 위해
// forEach : 배열을 받아 순환하기 위해 (값 반환 X)

// this 는 어디서든지 참조 가능하다.
// 전역에서 this 는 전역 개체 window 를 가리킨다
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this 는 전역 객체 window 를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: 'Lee',
  getName() {
    // 메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "Lee", getName: f}
    return this.name;
  },
};
console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person {name: "Lee"}
}
const me = new Person('Lee');
