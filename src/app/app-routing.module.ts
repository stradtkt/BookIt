import { BookResolve } from './resolvers/book.resolve';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromBooks from './books';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books',
    children: [
      {path: '', component: fromBooks.BookListComponent, pathMatch: 'full'},
      {path: 'new', component: fromBooks.BookNewComponent},
      {path: ':book_id', component: fromBooks.BookDetailComponent, resolve: { book: BookResolve }}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
