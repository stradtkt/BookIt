import { BookService } from './../../services/book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import {BOOKS} from './../../data/data';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  @Output() createBook = new EventEmitter<Book>();
  book = new Book();
  books: Book[] = BOOKS;
  selectedBook: Book;
  constructor(
    private readonly bookService: BookService,
    private readonly router: Router,
    ) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    // this.createBook.emit(this.book);
    this.bookService.createBook(this.book)
      .subscribe(book => {
        this.book = new Book();
        form.reset();
        this.router.navigateByUrl('/');
      });
  }

}
