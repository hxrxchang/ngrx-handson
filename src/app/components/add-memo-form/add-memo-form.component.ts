import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-memo-form',
  templateUrl: './add-memo-form.component.html',
  styleUrls: ['./add-memo-form.component.scss']
})
export class AddMemoFormComponent implements OnInit {
  constructor() {}

  @Output()
  addNewTask = new EventEmitter();

  memo = new FormControl('');

  ngOnInit() {}

  onClickSubmitBtn() {
    this.addNewTask.emit(this.memo.value);
    this.memo.setValue('');
  }
}
