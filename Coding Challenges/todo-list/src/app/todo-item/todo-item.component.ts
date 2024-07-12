import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoModel;
  @Output() removeItem: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleCheck(): void {
    this.item.checked = !this.item.checked;
  }

  attempToRemove(): void {
    this.removeItem.emit(this.item.id);
  }
}
