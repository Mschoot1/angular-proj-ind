import {Component, OnInit} from '@angular/core';
import {Hall} from '../hall.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HallService} from '../hall.service';

@Component({
  selector: 'app-hall-detail',
  templateUrl: './hall-detail.component.html',
  styleUrls: ['./hall-detail.component.css']
})
export class HallDetailComponent implements OnInit {
  get hall(): Hall {
    return this._hall;
  }
  private id: string;
  private _hall = new Hall();

  constructor(private hallService: HallService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          this.id = params['_id'];
          this.hallService.getHall(this.id)
            .then(hall => this._hall = hall)
            .catch(error => console.log(error));
        }
      );
  }

  onEditHall() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteHall() {
    this.hallService.deleteHall(this.id)
      .then(hall => console.log(hall))
      .catch(error => console.log(error));
    this.router.navigate(['/movies']);
  }
}
