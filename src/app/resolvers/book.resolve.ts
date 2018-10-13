import { BookService } from './../services';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Book } from './../models/book';

@Injectable()
export class BookResolve implements Resolve<Book> {
  constructor(private bookService: BookService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    return this.bookService.getBook(route.paramMap.get('id'));
  }
}
