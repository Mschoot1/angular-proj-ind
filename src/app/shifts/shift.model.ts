import {Activity} from '../activities/activity.model';
import {User} from '../users/user.model';
import {Client} from '../clients/client.model';

export class Shift {
  get _id(): string {
    return this.__id;
  }

  set _id(value: string) {
    this.__id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get activity(): Activity {
    return this._activity;
  }

  set activity(value: Activity) {
    this._activity = value;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  private __id: string;
  private _user: User;
  private _activity: Activity;
  private _client: Client;
  private _duration: number;
}
