const fruits = ['Mango', 'Banana', 'Apple', 'Orange', 'Pineapple', 'Grapes' ,'Guava', 'Papaya',]
console.log(fruits.slice(3));

console.log(fruits.indexOf('Banana'));
fruits.splice(2,3)
console.log(fruits);

fruits.splice(-2,0,'Peach','Strawberry')
console.log(fruits);

console.log(fruits.indexOf('Mango'));
fruits.shift();

console.log(fruits);
