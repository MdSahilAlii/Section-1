const user = {
    name: 'Raju ',
    email: 'raju@mail.com',
    password: 'abc123',
    age: 34
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.address = 'Lucknow';
user.age = 22;

console.log(user);

user['roll-no'] = 12323;
console.log(user['roll-no']);

const key = 'address';

console.log(user[key]);

console.log("---------------");
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


user.contact = ['98290188902', '87430830'];
console.log(user.contact[0]);

const smartphone = {
    brand: 'Apple',
    model: 'Iphone 16',
    price: 79999,
    colors: ['starlight', 'green', 'blue']

};
console.log(smartphone.colors[1]);
console.log(smartphone.colors[1][3]);
console.log(smartphone.colors[1][3][0]);
console.log(smartphone.colors[1][3][3]);

//  / replace green with two green colour varients

// smartphone.colors.splice(index,kitne remove krne h,'seagreen','forestgreen');
smartphone.colors.splice(1, 1, 'seagreen', 'forestgreen');

console.log(smartphone.colors);


const smartphoneArray = [
    {
        brand: 'Apple',
        model: 'Iphone 16',
        price: 79999,
        colors: ['starlight', 'green', 'blue'],
        ram: ['6gb ', '8gb']
    },


    {
        brand: 'MI',
        model: 'POCO X2',
        price: 16999,
        colors: ['black', 'grey'],
        ram: ['16gb ', '4gb']

    },

    {
        brand: 'Samsung',
        model: 'S24 Ultra',
        price: 110999,
        colors: ['silver', 'gold'],
        ram: ['8gb ', '32gb']

    },
    {
        brand: 'Oneplus',
        model: '12R',
        price: 35999,
        colors: ['blue', 'pink'],
        ram: ['64gb ', '8gb']

    },

    {
        brand: 'Motorola',
        model: 'Edge 50',
        price: 23999,
        colors: ['white', 'black'],
        ram: ['2gb ', '8gb']

    }
];

console.log("-----------------");

// 1.access price of the 2nd smartphone 
console.log(smartphoneArray[1].price);

// 2.add new color in 3rd smartphone 
smartphoneArray[2].colors.push('white');
console.log(smartphoneArray[2].colors);

// 3.create an array containing all the brand of smartphone phone 

const arr = smartphoneArray.map( (a ) => {return a.brand;});

console.log(arr);

// 4. filter all smartphone containing white color 

const whiteColor = smartphoneArray.filter( (a) => {if(a.colors.includes('white')){
    return a.brand;}
})

console.log(whiteColor);








