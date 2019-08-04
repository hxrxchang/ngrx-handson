import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-memo-list',
  templateUrl: './display-memo-list.component.html',
  styleUrls: ['./display-memo-list.component.scss']
})
export class DisplayMemoListComponent implements OnInit {
  @Input()
  memoList: string[];

  constructor() {}

  ngOnInit() {}
}
