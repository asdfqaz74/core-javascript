/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(YEAR);
console.log(typeof YEAR);
console.log(typeof (YEAR + ''));
console.log(typeof String(YEAR));

// undefined, null

let days = null;
let weekend;

console.log(days);
console.log(days + '');
console.log(weekend);
console.log(weekend + '');
// boolean
let isClicked = false;

console.log(isClicked);
console.log(typeof isClicked);
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(friend);
console.log(Number(friend));
// null
let money = null;

console.log(money);
console.log(Number(money));
// boolean
let cutie = true;

console.log(cutie);
console.log(Number(cutie));
// string
let num = '250';

console.log(num);
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);
// numeric string
const width = '105.3px';

console.log(width);
console.log(Number(width));
console.log(parseInt(width));
console.log(parseFloat(width));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(friend));
console.log(Boolean('0'));
console.log(Boolean(0));
// 위에 나열한 것 이외의 것들

const value = prompt('값을 입력해주세요.');
123;
console.log(typeof value);
console.log(typeof +value);
console.log(1 - 1 - +'1');
