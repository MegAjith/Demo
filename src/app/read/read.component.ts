import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from "../booklist/book.model";
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  books!: Observable<Book[]>;
  constructor(private store:Store<AppState>) { 
    this.books=store.select('books');
  }

  ngOnInit(): void {
  }

}
