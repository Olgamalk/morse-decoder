const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let array = expr.match(/.{10}/g);
  
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/10/g, '.');
    array[i] = array[i].replace(/11/g, '-');
    array[i] = array[i].replace(/0/g, '');
    array[i] = array[i].replace('**********', ' ');
  
    for (let key in MORSE_TABLE) {
      if (array[i] == key) {
        array[i] = [MORSE_TABLE[key]];
      }
    }
  }
  return array.join('');
}

module.exports = {
    decode
}