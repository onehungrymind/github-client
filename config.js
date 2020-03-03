let config = {
  assignKey: assignKey
}

const client_id = '462d5714bbdb3c9ace6c';
const client_secret = 'd69b43757cfbbf05db995eb4a540c654a91d9a79';
const callback_url = 'https://localhost:4200/callback';

function assignKey(code){
  let obj = { client_id, client_secret, callback_url };
  return Object.assign({code, ...obj});
}

module.exports = config;
