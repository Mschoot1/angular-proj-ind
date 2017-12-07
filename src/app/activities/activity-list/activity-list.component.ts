import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Activity} from '../activity.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityService} from '../activity.service';
import {Client} from '../../clients/client.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  get activities(): Activity[] {
    return this._activities;
  }
  subscription: Subscription;
  private _activities: Activity[];

  constructor(private activityService: ActivityService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.activityService.activitiesChanged
      .subscribe(
        (activities: Activity[]) => {
          this._activities = activities;
        }
      );
    this.activityService.getActivities()
      .then(activities => this._activities = activities)
      .catch(error => console.log(error));
  }

  onNewActivity() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
