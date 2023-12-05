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

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

console.log(arr);
