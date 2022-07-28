import Validator from '../nickname';

test.each([
  ['abc12_qw-123dcx', 'abc12_qw-123dcx'],
  ['f_12-sd', 'f_12-sd'],
  ['d_12', 'Имя пользователя не соответствует шаблону.'],
  ['c-45_g', 'c-45_g'],
  ['12fg_er', 'Имя пользователя не соответствует шаблону.'],
])(('test name'), (nameIn, nameCorrect) => {
  const guest = new Validator();
  const result = guest.validateUsername(nameIn);
  expect(result).toBe(nameCorrect);
});
