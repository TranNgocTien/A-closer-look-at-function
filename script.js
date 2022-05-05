'use strict';


const restaurant={
    starterMenu:['a','b','c','d'],
    mainMenu:['r','t','y','u'],
    order: function(starterMenuIndex,mainIndex){
        return [this.starterMenu[starterMenuIndex],this.mainMenu[mainIndex]];
    },
}

const[q,w]=restaurant.order(0,2);
console.log(q,w);

const oneWord=function(str){
    return str.replace(/ /g,"").toLowerCase();
}

const upperFirstLetter=function(str){
    const[first,...others]= str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
const transformer=function(str,fn){
    console.log(str);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);

};

transformer('Javascript is the best!', upperFirstLetter);
transformer('Javascript is the best!', oneWord);

const high5= function(){
    console.log('👋');
}

document.body.addEventListener('click',high5);

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeter= greet('Hey');
greeter('John');
greeter('Davis');

const greetArr=greeting => (name)=> console.log(`${greeting} ${name}`);

greetArr('Hey')('Melody');


const lufthansa={
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    }
}
lufthansa.book(239, 'Jonas Schmedmann');
lufthansa.book(635,'John Smith');

const eurowings={
    airline: 'Eurowings',
    iataCode:'EW',
    bookings: [],
};

const book=lufthansa.book;

book.call(eurowings, 23 ,'Sarah Williams');
console.log(eurowings);

book.call(lufthansa,239,'Mary Cooper');
console.log(lufthansa);

const swiss={
    airline:'Swiss Air Lines',
    iataCode:'LX',
    booking:[],
}

book.call(swiss,830, 'Delta dau');
console.log(swiss);

const flightData=[522,'Mary Cooper'];
book.apply(swiss, flightData);
book.call(eurowings,...flightData);