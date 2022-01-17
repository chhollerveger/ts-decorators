export default function modifyAttributes(target: unknown, propertyKey: string) {

  const value = `_${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    get() {
      return this[value].toUpperCase();
    },
    set(newValue) {
      this[value] = newValue;
    }
  });

}