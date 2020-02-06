import { NgModule } from '@angular/core';

import { PersonalMovieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [PersonalMovieSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [PersonalMovieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PersonalMovieSharedCommonModule {}
