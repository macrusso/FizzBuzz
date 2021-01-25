import { expect } from 'chai';
import { mock, instance, when, verify, spy, capture } from 'ts-mockito'
import LogGen from '../src/LogGen';

describe("LogGen", () => {
  describe("replaceNumbers", () => {
    it("Should return 1 when called with 1", () => {

      const logGen: LogGen = new LogGen(1, 100);
      const spiedLogGen = spy(logGen)

      const result = logGen.replaceNumbers(1)
      const args = capture(spiedLogGen.replaceNumbers).first();

      verify(spiedLogGen.replaceNumbers(1)).once();
      expect(args[0]).to.equal(1);
      expect(result).to.equal(1);
      expect(result).to.be.a('number')
    });

    it("Should return Fizz when called with 6", () => {

      const logGen: LogGen = new LogGen(1, 100);
      const spiedLogGen = spy(logGen)

      const result = logGen.replaceNumbers(6)
      const args = capture(spiedLogGen.replaceNumbers).first();

      verify(spiedLogGen.replaceNumbers(6)).once();
      expect(args[0]).to.equal(6);
      expect(result).to.equal('Fizz');
      expect(result).to.be.a('string')
    });

    it("Should return Buzz when called with 10", () => {

      const logGen: LogGen = new LogGen(1, 100);
      const spiedLogGen = spy(logGen)

      const result = logGen.replaceNumbers(10)
      const args = capture(spiedLogGen.replaceNumbers).first();

      verify(spiedLogGen.replaceNumbers(10)).once();
      expect(args[0]).to.equal(10);
      expect(result).to.equal('Buzz');
      expect(result).to.be.a('string')
    });

    it("Should return FizzBuzz when called with 15", () => {

      const logGen: LogGen = new LogGen(1, 100);
      const spiedLogGen = spy(logGen)

      const result = logGen.replaceNumbers(15)
      const args = capture(spiedLogGen.replaceNumbers).first();

      verify(spiedLogGen.replaceNumbers(15)).once();
      expect(args[0]).to.equal(15);
      expect(result).to.equal('FizzBuzz');
      expect(result).to.be.a('string')
    });
  });
});