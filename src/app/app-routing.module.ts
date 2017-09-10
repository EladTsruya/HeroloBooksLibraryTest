import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ExistenceMessageComponent } from './existence-message/existence-message.component';

const routes: Routes = [
  	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'addbook', component: AddBookComponent },
	{path: 'editbook/:title',component: EditBookComponent},
	{path: 'remove/:title',component: RemoveBookComponent},
	{path: 'isexist',component: ExistenceMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
