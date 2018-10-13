import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import * as fromBooks from './books';
import * as fromServices from './services';
import { SearchPipe } from './search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookResolve } from './resolvers';

@NgModule({
  declarations: [AppComponent, ...fromBooks.components, SearchPipe, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BookResolve
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
