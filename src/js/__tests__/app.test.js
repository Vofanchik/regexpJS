import Validator from '../app';

test.each([
  ['all valid symbols', 'Mary_77-S'],
  ['only letters', 'MarySmith'],
  ['letters&dash', 'Mary-Smith'],
  ['letters&underscore', 'Mary_Smith'],
])('should be valid with %s', (_, name) => {
  const person = new Validator(name);
  const result = person.validateUsername();
  expect(result).toBeTruthy();
});

test.each([
  ['cyrillic', 'Мария'],
  ['firstNamber', '85Mary'],
  ['numbersMoreThanTree', 'Ma7777887ry'],
  ['lastNumber', 'Mary555'],
  ['underscoreFirst', '_Mary'],
  ['underscoreLast', 'Mary_'],
  ['invalidSimbol', 'Mary#am'],
  ['invalidSimbolFirst', '@Mary'],
  ['invalidSimbolLast', 'Mary$'],
])('should be fail with %s', (_, name) => {
  const person = new Validator(name);
  const result = person.validateUsername();
  expect(result).toBeFalsy();
});
