import {Component, Input, OnInit} from '@angular/core';
import {Hall} from '../hall.model';

@Component({
  selector: 'app-hall-item',
  templateUrl: './hall-item.component.html',
  styleUrls: ['./hall-item.component.css']
})
export class HallItemComponent implements OnInit {
  @Input() hall: Hall;

  constructor() {
  }

  ngOnInit() {
  }
}
