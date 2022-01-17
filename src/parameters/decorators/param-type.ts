import "reflect-metadata";

export default function paramType(target: any, key: string, propertyKey: number) {

  return Reflect.getMetadata("design:paramtypes", target, key).map(item => console.log(item));

}