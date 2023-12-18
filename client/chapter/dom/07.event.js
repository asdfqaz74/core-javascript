/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */
// const first = getNode('.first');
// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭했습니다');
}

// first.addEventListener('click', handleClick);
// getNode('.second').addEventListener('click', () => {
//   first.removeEventListener('click', handleClick);
// });

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent('.first', 'click', handleClick);

// getNode('.second').addEventListener('click', remove);

// first.addEventListener('mousemove', handleClick);
// first.addEventListener('mouseleave', handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

// 객체구조분해할당
function handleClickBall({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

// ground.addEventListener('mousemove', handleClickBall);
ground.addEventListener('mousemove', debounce(handleClickBall));

// 몇초에 한번씩만 호출되도록, 마우스의 움직임이 끝나면 호출되도록
// throttle 과 debounce 개념 >> 중요함

function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// ground.addEventListener('mousemove', throttle(handleClickBall));

// call
// apply
// bind

/* function func(a, b) {
  console.log('this : ', this);
  console.log('A : ', a);
  console.log('B : ', b);
}

func.call('tiger', 1, 2);
func.apply('tiger', [1, 2]);
const a = func.bind('tiger', 1, 2);
a(); */
