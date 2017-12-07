import {Component, OnInit} from '@angular/core';
import {ShiftService} from '../shift.service';
import {Subscription} from 'rxjs/Subscription';
import {Shift} from '../shift.model';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
  shifts: Shift[];

  constructor(private shiftService: ShiftService) {
  }

  ngOnInit() {
    this.shiftService.getShifts()
      .then(shifts => this.shifts = shifts)
      .catch(error => console.log(error));
  }
}
