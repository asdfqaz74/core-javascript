/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* function getNode(item) {
  if (typeof item === 'string') {
    return document.querySelector(item);
  } else {
    return console.log('문자를 입력해주세요');
  }
}

const first = getNode('.first'); // <span class='first'>hello</span>
console.log(first); */

const first = getNode('.first');

/* 문서 대상 확인 */
// - matches

console.log(first.matches('span')); // target 에 항목(selector)이 있어?

console.log(getNode('h1').contains(getNode('.second'))); // target(부모) 안에 자식 노드가 포함됐어?
// - contain
