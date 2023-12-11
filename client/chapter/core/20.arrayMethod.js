/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray 우리가 만든 대상이 배열인지 아닌지 체크

// console.log(Array.isArray([]));
// 타입스크립트에서도 많이 쓰임

// 함수로 만들어보자

// isArray([]) true | false

const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
    alt: '밝게 웃고있는 치킨집 사장님',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

/* 요소 순환 ---------------------------- */

// forEach => 반환값 없음
// 각각의 아이템들을 찍고 순환
arr.forEach((item, index) => {
  // console.log(index, item);
});

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i], i);
}

// people.forEach(item=>console.log(item.job))
// 떨어지는 값이 무슨 값인지 잘 알아야한다.
people.forEach((item) => {
  // console.log(item);
});

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', () => {
    // console.log('clicked!');
  });
});

// 이벤트 위임
// 자식요소들 말고 부모에게 한번에 걸어주는것

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

// console.log(arr);
// const reverseArray = arr.reverse();
const reverseArray = arr.toReversed();

// console.log(reverseArray);
// console.log(arr);

// console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));
// console.log(arr);

const a = arr.toSorted((a, b) => {
  return a - b;
});

// console.log(a);
/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

//
const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  // document.body.insertAdjacentHTML('beforeend', item);
});
/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const findUser = people.find((item) => {
  return item.name === '송현규';
});

console.log(findUser);
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
const 젊은이들 = people.filter((item) => {
  return item.age < 30;
  // console.log(item);
});

console.log(젊은이들);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

console.log(totalAge);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
