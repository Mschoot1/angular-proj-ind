import {Component, Input, OnInit} from '@angular/core';
import {Cinema} from '../cinema.model';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.css']
})
export class CinemaItemComponent implements OnInit {
  @Input() cinema: Cinema;

  constructor() {
  }

  ngOnInit() {
  }
}
