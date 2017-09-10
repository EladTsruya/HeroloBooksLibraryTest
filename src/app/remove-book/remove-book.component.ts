import { Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { BookService } from '../book.service';
import { Book } from '../book';



@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent {

  constructor(
		public dialogRef: MdDialogRef<RemoveBookComponent>,
    	@Inject(MD_DIALOG_DATA) public data: any)
	{}


	closeDialog(toRemove:boolean){
		this.data.toRemove = toRemove;
		this.dialogRef.close();
	}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
