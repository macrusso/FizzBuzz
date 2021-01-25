import { Inject } from 'typescript-ioc';
import Divisors from './Divisors';
import Words from './Words';

export default class LogGen {
  // @ts-expect-error
  @Inject words: Words
  // @ts-expect-error
  @Inject divs: Divisors
  private low: number;
  private hi: number;
  constructor(low: number, hi: number) {
    this.low = low;
    this.hi = hi;
  }

  logResult(): void {
    for (let i = this.low; i <= this.hi; i++) {
      console.log(this.replaceNumbers(i))
    }
  }

  replaceNumbers(n: number): string | number {
    if (n % this.divs.getDivisorOne === 0 && n % this.divs.getDivisorTwo === 0) {
      return `${this.words.getWordOne}${this.words.getWordTwo}`
    } else if (n % this.divs.getDivisorOne === 0) {
      return `${this.words.getWordOne}`
    } else if (n % this.divs.getDivisorTwo === 0) {
      return `${this.words.getWordTwo}`
    } else {
      return n
    }
  }
}

