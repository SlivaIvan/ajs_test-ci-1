import characters from '../index';

const character1 = {
  name: 'Маг',
  health: 14,
};

const character2 = {
  name: 'Маг',
  health: 50,
};

const character3 = {
  name: 'Маг',
  health: 90,
};

test('Checking for critical', () => {
  expect(characters(character1)).toBe('critical');
});

test('Checking for wounded', () => {
  expect(characters(character2)).toBe('wounded');
});

test('Checking for healthy', () => {
  expect(characters(character3)).toBe('healthy');
});
