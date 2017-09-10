import { Injectable, ViewChild } from '@angular/core';
import { Book } from './book';
import { Headers, Http } from '@angular/http';
import {MdPaginator} from '@angular/material';
import 'rxjs/add/operator/toPromise';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService{

	private booksUrl = 'https://herolo-test-dot-bigquerycreate.appspot.com/';
	public books: Book[];

	constructor (private http: Http){
		this.http.get(this.booksUrl)
	             .toPromise()
	             .then(response => {this.books = response.json().books as Book[];})
	             .catch(this.handleError);
	}


	getBooks(): Promise<Book[]>{
		if(this.books === undefined){
			return this.http.get(this.booksUrl)
	             .toPromise()
	             .then(response => response.json().books as Book[])
	             .catch(this.handleError);
		}
		else{
			return Promise.resolve(this.books);
		}
		
	}


	removeBook(title: string): Promise<any>{
		return this.getBook(title).then(book => {this.books.splice(this.books.indexOf(book),1);});
	}

	removeBookA(title: string): Promise<any>{
		return this.getBook(title).then(book => {return true;});
	}


	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error);
  		return Promise.reject(error.message || error);
	}

	getBook(title: string): Promise<Book>{
		return this.getBooks()
					.then(books => books.find(book => book.title === title));
	}

	update(book: Book): Promise<number>{
  		return this.getBooks()
  			.then(books => books.push(book));
	}

	isBookExist(title: string){
		for(var i = 0; i < this.books.length; i++){
			if(this.books[i].title === title){
				return true;
			}
		}
		return false;
	}
}

