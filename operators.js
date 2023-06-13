var a = 2;
var b = '2';

var c = new String('test');

if (a === b) {
  console.log('equals');
} else {
  console.log('not equals');
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(c instanceof String);

console.log(2 + 'test');
console.log(2 + 3 + ' test');
console.log('a' + 'b' + '5');

console.log(5 - 3);
console.log(5 - '3');
console.log(5 - 'a');

for (i = 1; i <= 10; i++) {
  console.log('el: ', i);
}
var j = 1;
while (j <= 10) {
  console.log('el in while: ', j);
  j = j + 1;
}   
