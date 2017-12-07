import {Component, Input, OnInit} from '@angular/core';
import {Shift} from '../shift.model';

@Component({
  selector: 'app-shift-item',
  templateUrl: './shift-item.component.html',
  styleUrls: ['./shift-item.component.css']
})
export class ShiftItemComponent implements OnInit {
  @Input() shift: Shift;

  constructor() { }

  ngOnInit() {
  }

}
