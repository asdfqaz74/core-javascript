/* ------------------- */
/* Logical Operators   */
/* ------------------- */
let age = 10;
if (age >= 14 && age <= 90) {
  console.log('통과');
} else {
  console.log('불합');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log(whichTruthy);

let userName;
let passWord;

userName = prompt("Who's there?", '');

if (userName?.toLowerCase() == 'admin') {
  passWord = prompt('Password?', '');
  if (passWord?.toLowerCase() == 'themaster') {
    console.log('Welcome!');
  } else if (passWord == '' || passWord == null) {
    console.log('Canceled');
  } else {
    console.log('Wrong password');
  }
} else if (userName == '' || userName == null) {
  console.log('Canceled');
} else {
  console.log("I don't know you");
}
