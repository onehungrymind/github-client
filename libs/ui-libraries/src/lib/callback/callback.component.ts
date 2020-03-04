import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '@gc/core-data'

@Component({
  selector: 'gc-callback',
  template: '',
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParams.code;
    this.authService.handleRedirectCallback$(code).subscribe();
  }
}
