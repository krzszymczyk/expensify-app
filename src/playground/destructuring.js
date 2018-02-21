//Object destructuring


// const person = {
//     // name:'Krzysztof',
//     age:38,
//     location:{
//         city:'Wroclaw',
//         temp:1
//     }
// };
// // const name=person.name;
// // const age=person.age;

// const {name:firstName= 'Anonymous' ,age}=person;

// console.log(`${firstName} is ${age}.`);

// const {city,temp: temperature} = person.location;
// if (city && temperature)
// {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book ={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     } 
// };

// const{name:publisherName='Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street','Wysoka','Dolnośląskie','52-200']

const [,city='Wroclaw',state='New York']=address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)','$2','$2.5','$2.75'];
const[itemName, ,itemPrice] = item;
console.log(`A medium ${itemName} costs ${itemPrice}` )