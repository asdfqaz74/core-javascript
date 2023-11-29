/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('영화 봤니?');

if (!didWatchMovie) {
  let goingToWatchMovie = confirm('영화 볼거니?');

  if (goingToWatchMovie) {
    console.log('좋아');
  } else {
    console.log('그래...');
  }
} else {
  console.log('너...봤구나?');
}

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕' : '잘가'}</div>
  `;

  console.log(template);

  node.insertAdjacentHTML('beforeend', template);
}
