const getRandomElement = (arr: string[]) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const generatePassword = (length: number): string => {
  const uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const special = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '-',
    '=',
    '{',
    '}',
    '[',
    ']',
    ':',
    ';',
    '?',
    ', ',
    '.',
    '|',
  ];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const nonSpecial = [...uppercase, ...lowercase, ...numbers];

  let password = '';

  for (let i = 0; i < length; i++) {
    // Previous character is a special character
    if (i !== 0 && special.includes(password[i - 1])) {
      password += getRandomElement(nonSpecial);
    } else password += getRandomElement([...nonSpecial, ...special]);
  }

  return password;
};

export { generatePassword };
