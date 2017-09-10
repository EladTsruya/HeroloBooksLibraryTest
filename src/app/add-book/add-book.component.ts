
import { Component, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { BookService } from '../book.service';
import { Book } from '../book';
import { ExistenceMessageComponent } from '../existence-message/existence-message.component';


@Component({
	selector: 'add-book',
	templateUrl: './add-book.component.html',
	styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
	currDate = new Date();
	newDate : any;
	cancleFlag = false;
	book = new Book("", "", "");
   
	constructor(
		private bookService: BookService,
		public dialog: MdDialog,
		public dialogRef: MdDialogRef<AddBookComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
	)
	{}

	goBack(): void{
		this.cancleFlag = true;
		this.dialogRef.close();
	}

	onSubmit(): void {
		this.book.title = this.book.title.replace( /[^a-zA-Z0-9]/gi , "");

		if(!this.cancleFlag && !this.bookService.isBookExist(this.book.title)){
			var dateArr = this.newDate.toString().split(" ");
			
			this.book.date = dateArr[1] + " " + dateArr[2] + " " + dateArr[3];
			this.bookService.update(this.book)
	    		.then(() => this.dialogRef.close());
    	}
    	else{
    		let dialogRef = this.dialog.open(ExistenceMessageComponent);
    	}
		
	}
}


