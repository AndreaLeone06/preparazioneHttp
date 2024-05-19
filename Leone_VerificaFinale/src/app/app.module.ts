import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //PASSAGGIO 1
import { AppComponent } from './app.component';
import { FuComponent } from './fu/fu.component';

@NgModule({
  declarations: [
    AppComponent,
    FuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //PASSAGGIO 1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
