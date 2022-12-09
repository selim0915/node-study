var result = 0;

console.time('duration_sum');

for(var  i =1; i<=1000; i++){
    result += i;
}
console.timeEnd('duration_sum');
console.log('%d', result);

var Person = {name:"소녀시대", age:20}
console.dir(Person);