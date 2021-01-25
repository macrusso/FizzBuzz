import { expect } from 'chai';
import { mock, instance, when, verify, spy } from 'ts-mockito'
import Words from '../src/Words';

describe("Words", () => {
  describe("getWordOne", () => {
    it("Should return Fizz", () => {

      const mockedWords: Words = mock(Words);
      when(mockedWords.getWordOne).thenReturn('Fizz');
      const words: Words = instance(mockedWords);

      const result = words.getWordOne;
      expect(result).to.equal('Fizz');
      expect(result).to.be.a('string');
      verify(mockedWords.getWordOne).once();
    });
  });

  describe("getWordTwo", () => {
    it("Should return Buzz", () => {

      const mockedWords: Words = mock(Words);
      when(mockedWords.getWordTwo).thenReturn('Buzz');
      const words: Words = instance(mockedWords);

      const result = words.getWordTwo;
      expect(result).to.equal('Buzz');
      expect(result).to.be.a('string');
      verify(mockedWords.getWordTwo).once();
    });
  });

  describe("setWordOne", () => {
    it("Should return Zzzz when new word is set ", () => {

      const words: Words = new Words();
      const spiedWords = spy(words);

      words.setWordOne('Zzzz')
      const result = words.getWordOne;

      verify(spiedWords.setWordOne('Zzzz')).once();
      verify(spiedWords.getWordOne).once();
      verify(spiedWords.setWordOne('Zzzz')).calledBefore(spiedWords.getWordOne);
      expect(result).to.equal('Zzzz');
      expect(result).to.be.a('string');
    });
  });

  describe("setWordTwo", () => {
    it("Should return Aaaa when new word is set ", () => {

      const words: Words = new Words();
      const spiedWords = spy(words);

      words.setWordTwo('Aaaa')
      const result = words.getWordTwo;

      verify(spiedWords.setWordTwo('Aaaa')).once();
      verify(spiedWords.getWordTwo).once();
      verify(spiedWords.setWordTwo('Aaaa')).calledBefore(spiedWords.getWordTwo);
      expect(result).to.equal('Aaaa');
      expect(result).to.be.a('string');
    });
  });
});