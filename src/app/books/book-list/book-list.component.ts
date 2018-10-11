import { BookService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BOOKS } from './../../data/data';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book = new Book();
  books: Book[] = [];
  selectedBook: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
   this.bookService.getBooks()
     .subscribe(books => {
       this.books = books;
     });
  }
  onSelect(book: Book) {
    this.selectedBook = this.selectedBook === book ? null : book;
  }
  onCreate(book: Book) {
    this.books.push(book);
  }

}
