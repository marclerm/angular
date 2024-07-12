import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponentComponent } from './todos-component/todos-component.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TodosComponentComponent,
    TodoItemComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
