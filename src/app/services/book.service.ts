import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { BOOKS } from './../data/data';
import { Book } from './../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/books/';

  private readonly base = '/api/books/';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  removeBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.base + id);
  }
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.base + id);
  }
}
