import { isString } from '../utils/typeOf.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

/**
 * 에러 메세지를 보여주는 함수
 * @node {HTMLElement} node
 * @message {String} message
 * @timeout {Number} timeout
 */
export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) {
    node = getNode(node);
  }

  node.textContent = message;
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
