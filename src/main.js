const { getBalance } = require('./lib');
const cron = require('node-cron');

async function main() {
  // await getBalance({
  //   site: 'Popcorn',
  //   url: 'https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56?a=0x0ba9f9a7273caab71d5fbf53992c001325594689',
  //   selector: '#ContentPlaceHolder1_divFilteredHolderBalance',
  // });

  await getBalance({
    site: 'Soccer',
    url: 'https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56?a=0xc9baa0bcfa920dd8f6febd9bfa2fda74b34e69fb',
    selector: '#ContentPlaceHolder1_divFilteredHolderBalance',
  });
}

main().catch(console.error);

cron.schedule('*/10 * * * *', () => {
  main().catch(console.error);
});
