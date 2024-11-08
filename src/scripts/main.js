'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (typeof data !== 'object' || data === null) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof data[key] === 'object' && data[key] !== null) {
        createTree(li, data[key]);
      }

      element.appendChild(ul);
      ul.appendChild(li);
    }
  }
}

createTree(tree, food);
