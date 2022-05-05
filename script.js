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