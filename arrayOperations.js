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

// Array traversal
const nums =[ 36,19,10,2,6,13,49 ];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);

}
console.log("--------");

for (let n of nums){
    console.log(n);
}

console.log('-------Using for each FUNCTION-----');

nums.forEach ((a,i,x) => { console.log(a,i,x)});

for(let i=0;i<nums.length;i++){
    console.log(nums[i]**2);
}
console.log('---------');
nums.forEach((a) => { console.log(a**2)}    );

// create new array containing only even Numbers 

const evenNums =[];
evenNUms = nums.forEach( (a  ) => {
    if(a%2==0) {
        evenNums.push(a);
    }} );

    console.log(evenNums);
    
