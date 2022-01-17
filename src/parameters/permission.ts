import paramType from "./decorators/param-type";

export default class Permission {

  addName(@paramType name: string) { };

  addLevel(@paramType level: number) { };

}