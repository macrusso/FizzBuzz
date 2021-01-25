import { expect } from 'chai';
import { mock, instance, when, verify, spy } from 'ts-mockito'
import Divisors from '../src/Divisors';

describe("Divisors", () => {
  describe("getDivisorOne", () => {
    it("Should return 3", () => {

      const mockedDivisors: Divisors = mock(Divisors);
      when(mockedDivisors.getDivisorOne).thenReturn(3);
      const divisors: Divisors = instance(mockedDivisors);

      const result = divisors.getDivisorOne;
      expect(result).to.equal(3);
      expect(result).to.be.a('number');
      verify(mockedDivisors.getDivisorOne).once();
    });
  });

  describe("getDivisorTwo", () => {
    it("Should return 5", () => {

      const mockedDivisors: Divisors = mock(Divisors);
      when(mockedDivisors.getDivisorTwo).thenReturn(5);
      const divisors: Divisors = instance(mockedDivisors);

      const result = divisors.getDivisorTwo;
      expect(result).to.equal(5);
      expect(result).to.be.a('number');
      verify(mockedDivisors.getDivisorTwo).once();
    });
  });

  describe("setDivOne", () => {
    it("Should return 1 when new word is set ", () => {

      const divisors: Divisors = new Divisors();
      const spiedDivisors = spy(divisors);

      divisors.setDivOne(1)
      const result = divisors.getDivisorOne;

      verify(spiedDivisors.setDivOne(1)).once();
      verify(spiedDivisors.getDivisorOne).once();
      verify(spiedDivisors.setDivOne(1)).calledBefore(spiedDivisors.getDivisorOne);
      expect(result).to.equal(1);
      expect(result).to.be.a('number');
    });
  });

  describe("setDivTwo", () => {
    it("Should return 2 when new word is set ", () => {

      const divisors: Divisors = new Divisors();
      const spiedDivisors = spy(divisors);

      divisors.setDivTwo(2)
      const result = divisors.getDivisorTwo;

      verify(spiedDivisors.setDivTwo(2)).once();
      verify(spiedDivisors.getDivisorTwo).once();
      verify(spiedDivisors.setDivTwo(2)).calledBefore(spiedDivisors.getDivisorTwo);
      expect(result).to.equal(2);
      expect(result).to.be.a('number');
    });
  });
});