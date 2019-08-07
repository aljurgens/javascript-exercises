const leapYears = function(year) {
  let divisibleBy100 = (year % 100 == 0);
  let divisibleBy400 = (year % 400 == 0)

  if (year % 4 == 0) {
    if (!divisibleBy100 || (divisibleBy100 && divisibleBy400)) {
      return true;
    }
  }

  return false;
}

module.exports = leapYears
