import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})
export class TodosComponentComponent implements OnInit {

  todosList: TodoModel[] = [];
  todoForm: FormGroup;
  counter: number;
  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { 
    this.counter = 1000;
  }

  ngOnInit() {
     this.todoForm = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  onSubmit(): void{
    let nameValue = this.todoForm.get("name").value;
    this.todosList.push({text: nameValue, id: this.counter++, checked: false});    
    this.todoForm.reset();    
  }

  deleteItem(elemId: number): void{
    this.todosList = this.todosList.filter(x=>x.id!=elemId);
  }

}