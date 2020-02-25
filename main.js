function calRandom(min, max) {
  console.log(min);
  console.log(max);
  var result = Math.floor(Math.random() * (max - min + 1) + min);
  if (result < min || result > max) {
    calRandom();
  } else {
    return result;
  }
}
