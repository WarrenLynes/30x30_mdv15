import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Computer } from '@mdv15/core-data';

@Component({
  selector: 'mdv15-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() data: Computer[];
  @Input() selected: Computer;
  @Output() selectComputer = new EventEmitter<number>();

  constructor() {}

}
