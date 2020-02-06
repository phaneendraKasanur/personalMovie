import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PersonalMovieSharedLibsModule, PersonalMovieSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PersonalMovieSharedLibsModule, PersonalMovieSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PersonalMovieSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalMovieSharedModule {
  static forRoot() {
    return {
      ngModule: PersonalMovieSharedModule
    };
  }
}
