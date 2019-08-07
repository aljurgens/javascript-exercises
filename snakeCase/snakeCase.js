const snakeCase = function(str) {
  str = str.split('..').join(' ');
  str = str.toLowerCase().replace(/[^\w\s-]|_/g, '').replace(/[\s-]+/g, '_');

  // to remove trailing '_'
  let lastChar = str[str.length - 1];
  while (lastChar == '_') {
    str = str.substring(0, str.length - 1);
    lastChar = str[str.length - 1];
  }

  return str;
}

module.exports = snakeCase
