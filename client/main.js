/* global gsap */

import {
  getNode as $,
  changeColor,
  renderUserCard,
  renderSpinner,
  tiger,
  delayP,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

/* -------------------------------------------------------------------------- */
/*                                   phase-1                                  */
/* -------------------------------------------------------------------------- */

const END_POINT = 'http://localhost:3000/users';
// 1. user 데이터를 fetch 해주세요.
// 2. 함수 안에 넣기
// 3. 유저 데이터 (이름만) 화면에 랜더링 하기
// const END_POINT = 'https://jsonplaceholder.typicode.com/users'
const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP(100);

    // $('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await tiger.get(END_POINT);
    const userData = response.data;

    userData.forEach((data) => renderUserCard(userCardInner, data));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!button || !article) return;
  const id = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}
function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  tiger.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
