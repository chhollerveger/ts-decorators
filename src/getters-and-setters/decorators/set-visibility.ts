export default function setVisibility(visible: boolean) {

  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    descriptor.enumerable = visible;

  }

}