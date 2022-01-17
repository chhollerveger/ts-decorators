import upperCase from "./decorators/upper-case";

export default class Message {

  @upperCase
  sayMessage(...params: string[]) {
    return params;
  }

}