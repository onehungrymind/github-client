import { Express } from 'express';
import axios from 'axios';
import * as queryString from 'query-string';
import { environment } from '../environments/environment';

const githubConfig = environment.ghConfig;

const accessTokenURL = (code) => `https://github.com/login/oauth/access_token?code=${code}&client_secret=${githubConfig.client_id}&client_id=${githubConfig.client_secret}&redirect_uri=http://localhost:4200/callback`;

export function githubAccessToken(app: Express) {
  app.post('/api/auth', async (req, res) => {
    const ghCodeFromClient = req.query.code;

    try {
      const queryForAccessToken = await axios.post(accessTokenURL(ghCodeFromClient));
      const parseData = queryString.parse(queryForAccessToken.data);
      const access_token = parseData.access_token;

      res.send({ access_token });
    } catch (error) {
      console.log('Error adfadsf ', error);
    }
  });
}
