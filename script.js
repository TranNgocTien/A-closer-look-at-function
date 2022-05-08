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

const bookEW=book.bind(eurowings);
bookEW(905,'Mary Cooper');

lufthansa.planes=300;
lufthansa.buyPlane= function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

const VATCalc=function(value){
    return function(rate){
        return value+value*rate;
    }
}

console.log(VATCalc(300)(0.1));


/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll={
    question:'What is your favourite programming language?',
    options:['0: Javascript', '1: Python', '2: Rust', '3:C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer= prompt(`${this.question}\n ${this.options.join('\n')}`);
        typeof answer==='number' && answer<this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array'){
        if(type==='array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },

};
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//More closure example
let f;

const g= function(){
    const a=23;
    f= function(){
        console.log(a*2);
    };
};
const h = function(){
    const b=777;
    f= function(){
        console.log(b*2);
    }
}

g();
f();


h();
f(); 


const boardPassengers=function(n, wait){
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait+1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180,3);