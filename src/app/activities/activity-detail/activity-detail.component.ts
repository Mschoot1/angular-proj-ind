import {Component, OnInit} from '@angular/core';
import {Activity} from '../activity.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  get activity(): Activity {
    return this._activity;
  }

  private _id: string;
  private _activity = new Activity();

  constructor(private activityService: ActivityService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          this._id = params['_id'];
          this.activityService.getActivity(this._id)
            .then(activity => this._activity = activity)
            .catch(error => console.log(error));
        }
      );
  }

  onEditActivity() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteActivity() {
    this.activityService.deleteActivity(this._id)
      .then(activity => console.log(activity))
      .catch(error => console.log(error));
    this.router.navigate(['/activities']);
  }
}
