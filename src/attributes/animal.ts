import modifyAttributes from "./decorators/modify-attributes";

export default class Animal {

  @modifyAttributes
  name: string;

  constructor(name: string) {
    this.name = name;
  }

}