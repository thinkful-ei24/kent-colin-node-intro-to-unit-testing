const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz if the input is divisible by 15', function() {
    const normalCases = [15, 30, 45, 90];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });

    const falseCases = [12, 344, 65, 54];
    falseCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.not.equal('fizz-buzz');
    });
  });

  it('should return buzz if the input is divisible by 5', function() {
    const normalCases = [5, 20, 50, 95];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });

    const falseCases = [12, 344, 62, 54];
    falseCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.not.equal('buzz');
    });
  });

  it('should return fizz if the input is divisible by 3', function() {
    const normalCases = [9, 12, 48, 93];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });

    const falseCases = [13, 344, 65, 55];
    falseCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.not.equal('fizz');
    });
  });

  it('should return input if the input is not divisible by 3 or 5', function() {
    const normalCases = [2, 31, 47, 97];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });

    const falseCases = [12, 444, 65, 90];
    falseCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.not.equal(input);
    });
  });
});