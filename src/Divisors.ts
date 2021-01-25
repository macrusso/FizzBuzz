export default class Divisors {
  private divOne = 3;
  private divTwo = 5;

  get getDivisorOne(): number {
    return this.divOne
  }

  get getDivisorTwo(): number {
    return this.divTwo
  }

  setDivOne(newDiv: number): void {
    this.divOne = newDiv
  }

  setDivTwo(newDiv: number): void {
    this.divTwo = newDiv
  }
}
