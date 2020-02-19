import { MaterialModule } from '@gc/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UiToolbarComponent, RepoInfoComponent],
  exports: [UiToolbarComponent, RepoInfoComponent]
})
export class UiLibrariesModule {}
