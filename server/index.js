const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const queryString = require('query-string');

const accessTokenURL = (code) => `https://github.com/login/oauth/access_token?code=${code}&client_secret=${githubConfig.client_id}&client_id=${githubConfig.client_secret}&redirect_uri=http://localhost:4200/callback`;

app.use(cors())
app.options('*', cors());

app.get('/', async (req, res) => {
  const gitHubCode = req.query.code;
  try {
    const queryAccessToken = await axios.get(accessTokenURL(gitHubCode));
    const parseData = queryString.parse(queryAccessToken.data);
    const access_token = parseData.access_token;
    res.send({ access_token });
  } catch (err) {
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
