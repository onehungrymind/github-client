let config = {
  assignKey: assignKey
}

function assignKey(query){
  let obj = { client_id, client_secret, callback_url };
  return Object.assign(query, obj);
}

module.exports = config;
