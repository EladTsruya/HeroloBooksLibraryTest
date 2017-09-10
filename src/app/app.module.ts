import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, 
        MdCheckboxModule, 
        MdTableModule, 
        MdPaginatorModule,
        MdNativeDateModule, 
        MdIconModule, 
        MdInputModule,
        MdDialogModule, 
        MdDatepickerModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ExistenceMessageComponent } from './existence-message/existence-message.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditBookComponent,
    AddBookComponent,
    RemoveBookComponent,
    ExistenceMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdButtonModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdInputModule,
    MdPaginatorModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MdDialogModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }



