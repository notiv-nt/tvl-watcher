const { notify } = require('./notifier');
const { getStore, updateStore } = require('./store');
const { JSDOM } = require('jsdom');

function formatBalance(balance) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(balance);
}

function round(val) {
  return Math.round(parseFloat(val) * 100) / 100;
}

function normalizeValue(val) {
  let regex = /[\d,.]+/gim;
  let result = regex.exec(val);

  if (!result[0]) {
    throw new Error(`Parse Error [${val}]: ${JSON.stringify(result)}`);
  }

  let balance = result[0].replace(/,/g, '');

  return round(balance);
}

async function fetchBalance({ url, selector }) {
  const content = await fetch(url).then((res) => res.text());
  const dom = new JSDOM(content);

  let element = dom.window.document.querySelector(selector);
  let balance = element.textContent;

  return normalizeValue(balance);
}

module.exports.getBalance = async ({ site, url, selector }) => {
  let balance = await fetchBalance({
    url,
    selector,
  });

  const prevBalance = getStore()[site];

  console.log(new Date().toLocaleString(), site, balance, prevBalance);

  if (prevBalance !== balance) {
    const title = `${site}: ${formatBalance(balance)}`;

    let diff = ' ';
    if (prevBalance) {
      diff = round(balance - prevBalance);

      if (diff >= 0) {
        diff = `+ ${formatBalance(diff)}`;
      } else {
        diff = formatBalance(diff);
      }
    }

    updateStore(site, balance);

    notify(title, diff);
  }
};
