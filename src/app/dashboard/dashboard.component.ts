import { Component, OnInit, ViewChild } from '@angular/core';

import {MdPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';


import { Book } from '../book';
import { BookService } from '../book.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { RemoveBookComponent } from '../remove-book/remove-book.component';


@Component({
  selector: 'app-deshboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	displayedColumns = ['title', 'autur', 'date', 'edit', 'remove'];
  books: Book[];
  validTable = true;
  size = 2;
  selectedBook: Book;
  @ViewChild(MdPaginator) paginator: MdPaginator;
	dataSource: BooksDataSource | null;


	constructor(	 
		private bookService: BookService,
    public dialog: MdDialog){}

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
    });
  }

  openEditDialog(title: string): void {
    let dialogRef = this.dialog.open(EditBookComponent, {data:{'title': title}});

    dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
    });
  }


  openRemoveDialogA(title: string): void {
      this.bookService.removeBook(title).then(res => {this.dataSource.disconnect();this.getBooks();});
      let dialogRef = this.dialog.open(EditBookComponent, {data:{'title': title}});

    dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
    });
  }


  openRemoveDialog(title: string): void {

    let dialogRef = this.dialog.open(RemoveBookComponent, {data:{'title': title, 'toDelete': false}});

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.bookService.removeBook(title).then(res => {this.getBooks();});
      }
    });
  }


	getBooks(): void{
		this.bookService.getBooks().then(books => {this.books = books; this.size = books.length; this.dataSource = new BooksDataSource(this.books, this.paginator);});
	}

	ngOnInit():void{
		this.getBooks();
	}
}


export class BooksDataSource extends DataSource<any> {
  constructor(private _booksDatabase: Book[], private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<Book[]> {
    const displayDataChanges = [
      this._booksDatabase,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._booksDatabase.slice();

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}




