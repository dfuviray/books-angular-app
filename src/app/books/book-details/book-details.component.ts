import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  loadedBook;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.route.paramMap.subscribe((paramMap) => {
      let id = paramMap.get('bookid');
      this.getData(id);
    });
  }

  getData(id) {
    this.bookService.getBook(id).subscribe((data) => {
      return (this.loadedBook = data);
    });
  }
}
