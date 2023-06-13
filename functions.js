function sum(p1, p2) {
  //vrem suma sa returneze suma celor 2 numere
  //return metoda returneaza ceva
  //daca nu vedem return nu trebuie sa o asignam unei variabile

  return p1 + p2;
}
var result = sum(3, 4);
console.log('result: ', result);

var newSum = function (p1, p2) {
  return p1 + p2;
};
var a = (newSum = (2, 3));
console.log('a: ', a);

function writeSum(p1, p2) {
  console.log('sum: ', p1 + p2);
}

console.log(writeSum(4, 5));
writeSum(4, 'a');
