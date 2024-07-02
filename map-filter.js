const nums =[ 36,19,10,2,6,13,49 ];

//map

 const squares =nums.map( ( a) =>  { return a**2  } );
 console.log(squares);

 const prices = [23.88 , 274.50 , 888.90 , 274.2121, 99.99];

 const decimal = prices.map( (a) => {return parseInt(a)} );

 console.log(decimal);

 const a=346;
const myfunc = (a,b) => { return a+b};
 console.log(myfunc);

 const newFunc=myfunc;
 console.log(newFunc

 );

 const intprices = prices.map( p => {return parseInt(p)});
 console.log(intprices);
 

const evenNums=nums.filter( ( n ) => {return n%2===0 } );

console.log(evenNums);

// filter prices greater than 50 and less than 300

const newPrices = prices.filter( ( a ) => { return (a>50 && a<300); }  );
console.log(newPrices);

