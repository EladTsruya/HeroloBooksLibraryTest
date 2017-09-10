import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { Location } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';

import { BookService } from '../book.service';
import { Book } from '../book';
import { ExistenceMessageComponent } from '../existence-message/existence-message.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book;
  demoBook: Book;
  currDate = new Date();
  cancleFlag = false;
  bookDate = new Date();
  validationControler = new FormControl('', [
    Validators.required]);

	constructor(
		private bookService: BookService,
		public dialog: MdDialog,
		public dialogRef: MdDialogRef<EditBookComponent>,
    	@Inject(MD_DIALOG_DATA) public data: any)
	{}

	ngOnInit(): void{
		this.bookService.getBook(this.data.title).then(book => {this.book = book; this.demoBook = {"title": this.book.title, "autur":this.book.autur, "date":""}; this.bookDate = new Date(book.date)});
	}

	goBack(): void{
	this.cancleFlag = true;
		this.dialogRef.close();
	}

	save(): void {

    	this.book.title = this.book.title.replace( /[^a-zA-Z0-9]/gi , "");

		if(!this.bookService.isBookExist(this.book.title)){
			var dateArr = this.bookDate.toString().split(" ");
			
			this.book.date = dateArr[1] + " " + dateArr[2] + " " + dateArr[3];
			this.bookService.update(this.book)
	    		.then(() => this.dialogRef.close());
    	}
    	else{
    		let dialogRef = this.dialog.open(ExistenceMessageComponent);
    	}
	}

	onSubmit(): void {
		this.demoBook.title = this.demoBook.title.replace( /[^a-zA-Z0-9]/gi , "");

		if(!this.cancleFlag && !this.bookService.isBookExist(this.demoBook.title)){
			var dateArr = this.bookDate.toString().split(" ");
			
			this.book.date = dateArr[1] + " " + dateArr[2] + " " + dateArr[3] 
			this.book.title = this.demoBook.title;
			this.book.autur = this.demoBook.autur;
			this.dialogRef.close(); 
    	}
    	else{
    		let dialogRef = this.dialog.open(ExistenceMessageComponent);
    	}
		
	}

}
