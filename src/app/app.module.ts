import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { DescriptionComponent } from './desciption/description.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
