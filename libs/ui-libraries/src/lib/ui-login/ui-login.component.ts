import { Component } from '@angular/core';

import { githubConfig } from '../../../../../.env'

@Component({
  selector: 'vulnerability-checker-ui-login',
  templateUrl: './ui-login.component.html',
  styleUrls: ['./ui-login.component.scss']
})
export class UiLoginComponent {

  loginWithGitHub() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${githubConfig.client_id}&scope=user,public_repo,repo&redirect_uri=${window.location.origin}/callback`;
  }
}
