import { BookService } from './../../services/book.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../../models/book';
import {BOOKS} from './../../data/data';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  errorMessage: string;
  constructor(
    private router: Router,
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //   const id = params.get('book_id');
    //   this.bookService.getBook(id)
    //     .subscribe(book => {
    //       this.book = book;
    //     });
    // });
    // recomended way
                        // this.route.paramMap
                        //   .pipe(map(params => params.get('book_id')),
                        //   switchMap(id => this.bookService.getBook(id)))
                        //     .subscribe(book => (this.book = book),
                        //     () => {
                        //       this.errorMessage = 'Book not found';
                        //       setTimeout(() => {
                        //         this.router.navigate(['/books']);
                        //       }, 2000);
                        //     }
                        //   );
      this.book = this.route.snapshot.data.book as Book;
    }
}
