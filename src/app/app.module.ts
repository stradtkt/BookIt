import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import * as fromBooks from './books';
import * as fromServices from './services';


@NgModule({
  declarations: [AppComponent, ...fromBooks.components],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
