const arr=[ 65,"nice", true, console.log,undefined ];
console.log(arr);

console.log(typeof arr);

console.log(Array.isArray (arr));

console.log(arr.length); //also works with string

console.log("\n\n\n");

const movies=[" 300", "MI", "Deadpool",'Expendables',"3 Idiots",'Inception'];
// indexing
console.log(movies[3]);//also works with string

movies[2]='Deadpool & Wolverine';

console.log(movies.indexOf('Inception'));
// console.log(movies[-2]);

console.log(movies.at(-2));

// slicing
console.log(movies.slice(2,5));//also works with string
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
// console.log(movies[2:5]); not applicable

console.log(movies);

console.log(movies[2].slice(-9));

// adding and removing elements log

movies.push('Kanchana');//add element at the end

console.log(movies);
movies.unshift('Gangs of Wasseypur');//adds element at the beginning

console.log(movies);

console.log(movies.pop());//removes element from end

console.log(movies.shift());//removes element from beginning


// movies.splice(3,2); removes 2 elements starting from 3
movies.splice(3,2,'John Wick','The Boys','Invincible')

// movies.splice(3,0,'John Wick','The Boys')

console.log(movies);



