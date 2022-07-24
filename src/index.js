module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';

  if (number === 0) {
    return 'zero';
  } else if ( number > 0 && number < 10) {
    return ones[number];
  } else if (number >= 10 && number <= 19) {
    number = number % 10;
    return teens[number];
  } else if ( number >= 20 && number <= 99) {
   return (tens[Math.floor(number/10)] + ' ' + ones[number%10]).trim();
  } 
   if (number >= 100 && number <= 999) {
      if (number % 100 === 0) {
        return (ones[Math.floor(number/100)] + ' ' + hundred).trim();
      } else {
    return (ones[Math.floor(number/100)] + ' ' + hundred + ' ' + toReadable(number % 100)).trim();
  }
   }
}
