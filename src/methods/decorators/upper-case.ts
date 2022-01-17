export default function upperCase(
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {

  descriptor.value = (...params: string[]) => params.map(item => item.toUpperCase());

}