import { MaterialModule } from '@gc/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { UiLoginComponent } from './ui-login/ui-login.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UiToolbarComponent, UiLoginComponent, CallbackComponent],
  exports: [UiToolbarComponent]
})
export class UiLibrariesModule {}
