const inputElement = document.querySelector('input');

// All the keys and their corresponding classes
const keyMappings = {
  '`': 'key-tilde', '~': 'key-tilde',
  '1': 'key-1', '!': 'key-1',
  '2': 'key-2', '@': 'key-2',
  '3': 'key-3', '#': 'key-3',
  '4': 'key-4', '$': 'key-4',
  '5': 'key-5', '%': 'key-5',
  '6': 'key-6', '^': 'key-6',
  '7': 'key-7', '&': 'key-7',
  '8': 'key-8', '*': 'key-8',
  '9': 'key-9', '(': 'key-9',
  '0': 'key-0', ')': 'key-0',
  '-': 'key-hyphen', '_': 'key-hyphen',
  '=': 'key-equal', '+': 'key-equal',
  'q': 'q', 'Q': 'q',
  'w': 'w', 'W': 'w',
  'e': 'e', 'E': 'e',
  'r': 'r', 'R': 'r',
  't': 't', 'T': 't',
  'y': 'y', 'Y': 'y',
  'u': 'u', 'U': 'u',
  'i': 'i', 'I': 'i',
  'o': 'o', 'O': 'o',
  'p': 'p', 'P': 'p',
  '[': 'left-bracket', '{': 'left-bracket',
  ']': 'right-bracket', '}': 'right-bracket',
  '\\': 'backslash', '|': 'backslash',
  'a': 'a', 'A': 'a',
  's': 's', 'S': 's',
  'd': 'd', 'D': 'd',
  'f': 'f', 'F': 'f',
  'g': 'g', 'G': 'g',
  'h': 'h', 'H': 'h',
  'j': 'j', 'J': 'j',
  'k': 'k', 'K': 'k',
  'l': 'l', 'L': 'l',
  ';': 'semicolon', ':': 'semicolon',
  '\'': 'single-quote', '"': 'single-quote',
  'z': 'z', 'Z': 'z',
  'x': 'x', 'X': 'x',
  'c': 'c', 'C': 'c',
  'v': 'v', 'V': 'v',
  'b': 'b', 'B': 'b',
  'n': 'n', 'N': 'n',
  'm': 'm', 'M': 'm',
  ',': 'comma', '<': 'comma',
  '.': 'period', '>': 'period',
  '/': 'slash', '?': 'slash',
  ' ': 'space'
};

inputElement.addEventListener('keydown', (e) => {
  const keyClass = keyMappings[e.key];
  if (keyClass) {
    const keys = document.querySelectorAll(`.${keyClass}`);
    keys.forEach(key => {
      key.classList.add('blink');
    });

    setTimeout(() => {
      keys.forEach(key => {
        key.classList.remove('blink');
      });
    }, 100);
  }
});
