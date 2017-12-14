import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Hall} from '../hall.model';
import {HallService} from '../hall.service';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {
  get halls(): Hall[] {
    return this._halls;
  }
  subscription: Subscription;
  private _halls: Hall[];

  constructor(private hallService: HallService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.hallService.hallsChanged
      .subscribe(
        (halls: Hall[]) => {
          this._halls = halls;
        }
      );
    this.hallService.getHalls()
      .then(halls => this._halls = halls)
      .catch(error => console.log(error));
  }

  onNewHall() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
