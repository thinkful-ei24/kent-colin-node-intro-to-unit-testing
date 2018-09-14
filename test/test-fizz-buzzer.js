const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return error if input is not a number', function() {
       const errorCase = ['1', false, null, undefined, {an: 'object'}, [1, 2, 3]];
      errorCase.forEach(function (input) {
         expect(function() {
           fizzBuzzer(input);
         }).to.throw(Error);
      });
    });

  it('should return fizz-buzz if the input is divisible by 15', function() {
    const normalCases = [15, 30, 45, 90];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  it('should return buzz if the input is divisible by 5', function() {
    const normalCases = [5, 20, 50, 95];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });

   });

  it('should return fizz if the input is divisible by 3', function() {
    const normalCases = [9, 12, 48, 93];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });

   });

  it('should return input if the input is not divisible by 3 or 5', function() {
    const normalCases = [2, 31, 47, 97];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });

       });
});
