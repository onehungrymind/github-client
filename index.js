require('dotenv').config();
const config = require('./config');
const axios = require('axios');
const express = require('express');
const request = require('request')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const endpoint = 'https://github-client-no-cors.herokuapp.com';
// const client_id = '462d5714bbdb3c9ace6c';
// const client_secret = 'd69b43757cfbbf05db995eb4a540c654a91d9a79';
// const callbackURL = 'https://localhost:4200/callback';

app.use(cors())
app.options('*', cors());

app.use('/', async (req, res) => {
  try {
  let url = endpoint + req.url;
  let query = config.assignKey(req.query);
    req.pipe(request({ qs: query , uri: url })).pipe(res);
  } catch(err) {
    console.log('Error inside the middleware', err)
    }
  });

app.listen(port, () => {
  console.log("+---------------------------------------+");
  console.log("|                                       |");
  console.log(`|  [\x1b[34mSERVER\x1b[37m] Listening on port: \x1b[36m${port} 🤖  \x1b[37m |`);
  console.log("|                                       |");
  console.log("\x1b[37m+---------------------------------------+");
});
