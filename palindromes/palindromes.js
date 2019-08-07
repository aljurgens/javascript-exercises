const palindromes = function(str) {
  // so we don't have to worry about word breaks
  str = str.replace(/\s+/g,'');

  let arr = str.split('');
  let rev = [];

  // so we don't have to worry about punctuation
  for (let i = 0; i < arr.length; i++) {
     if (arr[i].toUpperCase() == arr[i].toLowerCase()) {
       arr.splice(i, 1);
     } else {
       arr[i] = arr[i].toLowerCase();
     }
   }

   for (let i = arr.length - 1; i >= 0; i--) {
     rev.push(arr[i]);
   }

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] != rev[i]) {
       return false;
     }
   }

   return true;
}

module.exports = palindromes
