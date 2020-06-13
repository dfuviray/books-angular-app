import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books;
  constructor(private bookService: BooksService, private SwUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.checkSWUpdate();
    this.getData();
  }

  checkSWUpdate() {
    if (this.SwUpdate.isEnabled) {
      this.SwUpdate.available.subscribe(() => {
        if (confirm('new version available')) {
          window.location.reload();
        }
      });
    }
  }

  getData() {
    this.bookService.getAllBooks.subscribe((data) => {
      this.books = data;
    });
  }
}
