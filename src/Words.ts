export default class Words {
  private wordOne = 'Fizz';
  private wordTwo = 'Buzz';

  get getWordOne(): string {
    return this.wordOne
  }

  get getWordTwo(): string {
    return this.wordTwo
  }

  setWordOne(newWord: string): void {
    this.wordOne = newWord
  }

  setWordTwo(newWord: string): void {
    this.wordTwo = newWord
  }
}

