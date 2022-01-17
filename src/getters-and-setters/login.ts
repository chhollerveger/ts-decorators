import setVisibility from "./decorators/set-visibility";

export default class Login {

  constructor(
    private _user: string,
    private _password: string
  ) { }

  @setVisibility(true)
  get user() {
    return this._user;
  }

  @setVisibility(false)
  get password() {
    return this._password;
  }

}