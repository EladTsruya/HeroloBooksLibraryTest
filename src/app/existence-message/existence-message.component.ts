import { Component, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-existence-message',
  templateUrl: './existence-message.component.html',
  styleUrls: ['./existence-message.component.css']
})
export class ExistenceMessageComponent {

  constructor(
		public dialogRef: MdDialogRef<ExistenceMessageComponent>,
    @Inject(MD_DIALOG_DATA) public data: any)
	{}

	goBack(): void{
		this.dialogRef.close();
	}

}
