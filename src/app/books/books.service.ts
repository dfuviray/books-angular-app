import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private _books: any;
  private _url = 'https://www.googleapis.com/books/v1/volumes';
  private _queryAllBooks = '?q=javascript&startIndex=0&maxResults=12';
  private _queryBook = 'id=';

  constructor(private http: HttpClient) {}

  get getAllBooks() {
    return this.http.get(this._url + '/' + this._queryAllBooks);
  }

  getBook(id) {
    return this.http.get(this._url + '/' + id);
  }
}
