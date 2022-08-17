const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const stateFile = resolve(__dirname, '../state.json');

function getStore() {
  let store = {};

  try {
    const content = readFileSync(stateFile, { encoding: 'utf-8' });
    store = JSON.parse(content);
  } catch (e) {
    store = {};
  }

  return store;
};

function updateStore(key, value) {
  const store = getStore();

  store[key] = value;

  try {
    writeFileSync(stateFile, JSON.stringify(store, null, 2));
  } catch (e) {
    console.error(e);
  }
};


module.exports.updateStore = updateStore;
module.exports.getStore = getStore;
