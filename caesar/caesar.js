const caesar = function(str, shift) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {

    // shift only letters, leave all other characters alone
    if (arr[i].charAt(0).toUpperCase() != arr[i].charAt(0).toLowerCase())
    {
      if (shift > 0) {
        for (let n = 0; n < shift; n++) { // positive shift
          switch(arr[i]) {
            case 'z':
              arr[i] = 'a';
              break;
            case 'Z':
              arr[i] = 'A';
              break;
            default:
              arr[i] = String.fromCharCode(1 + arr[i].charCodeAt(0));
          }
        }
      } else {
        for (let n = 0; n > shift; n--) { // negative shift
          switch(arr[i]) {
            case 'a':
              arr[i] = 'z';
              break;
            case 'A':
              arr[i] = 'Z';
              break;
            default:
              arr[i] = String.fromCharCode(-1 + arr[i].charCodeAt(0));
          }
        }
      } // end shift
    } // end letter check

  }

  return arr.join('');
}

module.exports = caesar
