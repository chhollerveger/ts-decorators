export default function log(constructor: any) {

  return class extends constructor {
    created_at: Date = new Date("2021-02-15")
  }

}