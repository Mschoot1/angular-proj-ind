interface Address {
  streetName: string;
  homeNumber: number;
  city: string;
}

export class Client {
  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  get _id(): string {
    return this.__id;
  }

  set _id(value: string) {
    this.__id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  public get infix(): string {
    return this._infix;
  }

  public set infix(value: string) {
    this._infix = value;
  }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  private __id: string;
  private _firstName: string;
  private _infix: string;
  private _lastName: string;
  private _address = {} as Address;
}
