// import { typeError } from '../error.js';
import { isString } from './typeOf.js';

const { localStorage: storage } = window;

/* -------------------------------------------------------------------------- */
/*                                 setStorage                                 */
/* -------------------------------------------------------------------------- */

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
  /*   if (!isString(key)) {
    typeError(
      'setStorage 함수의 첫 번째 인수인 key는 문자 타입 이어야 합니다.'
    );
  }
  storage.setItem(key, JSON.stringify(value));
  */
}
// setStorage('obj', { name: 'tiger' });

/* -------------------------------------------------------------------------- */
/*                                 getStorage                                 */
/* -------------------------------------------------------------------------- */

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
  // return JSON.parse(storage.getItem(key));
}

// console.log(getStorage('obj'));

// storage.setItem('obj', JSON.stringify({ name: 'tiger', age: 15 }));
// console.log(JSON.parse(storage.getItem('obj')));

/* -------------------------------------------------------------------------- */
/*                                deleteStorage                               */
/* -------------------------------------------------------------------------- */

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
