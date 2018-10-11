import { NgForm } from '@angular/forms';
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
  constructor() { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.createBook.emit(this.book);
    this.book = new Book();
    form.reset();
  }

}
