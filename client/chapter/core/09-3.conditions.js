/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

/* let thisTime = prompt('시간을 고르시오');
thisTime?.toLowerCase(); */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch (thisTime) {
  case 'morning':
    alert('뉴스 기사 글을 읽는다.');
    break;

  case 'launch':
    alert('자주 가는 식당에 가서 식사를 한다.');
    break;

  case 'dinner':
    alert('동네 한바퀴를 조깅한다.');
    break;

  case 'night':
    alert('친구에게 전화를 걸어 수다를 떤다');
    break;

  case 'late_night':
  case 'dawn':
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
} */

/* switch vs. if -------------------------------------------------------- */

/* if (thisTime == 'morning') {
  alert('뉴스 기사 글을 읽는다.');
} else if (thisTime == 'launch') {
  alert('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime == 'dinner') {
  alert('동네 한바퀴를 조깅한다.');
} else if (thisTime == 'night') {
  alert('친구에게 전화를 걸어 수다를 떤다');
} else {
  alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} */

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  switch (num) {
    case 0:
      return '제육';

    case 1:
      return '돈까스';

    case 2:
      return '라면';

    case 3:
      return '순대국';

    case 4:
      return '부대찌개';

    case 5:
      return '파스타';

    case 6:
      return '쫄면';
  }
}

function special() {
  const today = getDay(getRandom(7));
  console.log('오늘 뭐먹지?');
  console.log(today);

  /*   if (today.includes('돈까스')) {
    return '멋사 정식';
  } else if (today.includes('제육')) {
    return '범쌤 정식';
  } else {
    return '그냥 먹어';
  } */

  return today.includes('돈까스')
    ? '멋사 정식'
    : today.includes('제육')
      ? '범쌤 정식'
      : '그냥 먹어';
}

const todayIs = special();

console.log(todayIs);
