import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackbar: MatSnackBar) { }

  notify(message: string, action: string = 'Ok') {
    const config: MatSnackBarConfig = {duration: 5000};
    this.openSnackbar(message, action, config);
  }

  error(message: string, action: string = 'Error') {
    const config: MatSnackBarConfig = {duration: 5000, politeness: 'assertive'};
    this.openSnackbar(message, action, config);
  }

  openSnackbar(message: string, action: string, config: MatSnackBarConfig) {
    this.snackbar.open(message, action, config);
  }
}
