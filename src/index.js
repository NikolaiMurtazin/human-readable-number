const ones = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

module.exports = function toReadable(number) {
  if (number < 10) return ones[number];
  if (number < 20) return teens[number - 10];
  if (number < 100) {
    const ten = Math.floor(number / 10);
    const rest = number % 10;
    return tens[ten] + (rest ? ` ${ones[rest]}` : '');
  }
  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const rest = number % 100;
    return `${ones[hundred]} hundred${rest ? ` ${toReadable(rest)}` : ''}`;
  }
  return '';
};
