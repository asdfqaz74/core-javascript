/* let products = [
  {
    name1: 'chair',
    price1: 7000,
  },
  {
    name2: 'sofa',
    price: 5000,
  },
  {
    name1: 'desk',
    price3: 9000,
  },
];

for (let key in products) {
  console.log(key + products[key]);
} */

/* let object = {
  name1: 'chiar',
};

if (isNaN(parseInt('name1'.slice(-1))) == false) {
  let newValue = object['name1'];
  let newKey = 'name1'.slice(0, -1);
  object[newKey] = newValue;

  delete object['name1'];
}

console.log(object);
 */
/* let products = [
  {
    name1: 'chair',
    price1: 7000,
  },
  {
    name2: 'sofa',
    price: 5000,
  },
  {
    name1: 'desk',
    price3: 9000,
  },
];

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
    if (isNaN(parseInt(key.slice(-1))) == false) {
      newValue = item[key];
      newKey = key.slice(0, -1);
      item[newKey] = newValue;
      delete item[key];
    }
  }
}

console.log(products);
 */

// var value = 10;

/* let a = ' ';
let b = false;

console.log(Boolean(a));
a &&= b;

console.log(a);
 */

// var arr = [200, 100, 300];
// arr.splice(2, 0, 10000);

// console.log(arr);

// const 응시자수 = prompt('응시자 수 입력해주세요');

// for (i = 0; i < 응시자수; i++) {
//   if (응시자.점수 > 70) {
//     합격;
//   } else {
//     불합격;
//   }
// }

// const testUser = prompt('응시자 수 입력');

// for (i=0 ; i )

// let name = prompt('자바스크립트의 공식 이름은 무엇일까요?');

// if (name == 'ECMAScript') {
//   console.log('정답입니다!');
// } else {
//   console.log('모르셨나요? 정답은 ECMAScript 입니다!');
// }

// let value = +prompt('숫자를 입력해주세요');

// if (value > 0) {
//   alert('1');
// } else if (value == 0) {
//   alert('0');
// } else {
//   alert('-1');
// }

let message = 