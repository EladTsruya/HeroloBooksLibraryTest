export class Book {
	title: string;
	autur: string;
	date: string;
	constructor(autur: string, date: string, title: string){
		this.title = title;
		this.autur = autur;
		this.date = date;
	}
}