// Write your function here:
function howOld(age, year){
  if (year >= 2020){
    calculatedAge= (year-2020)+(age);
    return `You will be ${calculatedAge} in the year ${year}.`;
  } else if (year < (2020-age)) {
    numyears= (2020-age)-year;
    return `The year ${year} was ${numyears} years before you were born.`;  
    } else /*(year < 2020 && year >=(2020-age))*/{
      calculatedAge= age - (2020-year);
      return `You were ${calculatedAge} in the year ${year}.`;
    };
}

console.log(howOld(33, 1990));


// Once your function is written, write function calls to test your code!
