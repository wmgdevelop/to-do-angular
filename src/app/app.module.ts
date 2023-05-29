import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditToDoDialogComponent } from './edit-to-do-dialog/edit-to-do-dialog.component';
import { ConfirmDeleteToDoDialogComponent } from './confirm-delete-to-do-dialog/confirm-delete-to-do-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    EditToDoDialogComponent,
    ConfirmDeleteToDoDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
