import React from 'react';

// Spread operator is use to split up array element and object properties

// Spread Array
// function SpreadOpertator()
// {
//  const SpreadArray = [1,2,3,4];

//  const newSpreadArray = [...SpreadArray,5];

// return newSpreadArray;
//  }
// console.log(SpreadOpertator())


//Spread Object

const SpreadObj = {

  name :'asif'

}

const NewSpreadObj = {

  ... SpreadObj,
  age : '34'
}

console.log(NewSpreadObj)

// Rest is used to merg function aurgment into array

const RestMethod = (...args) =>{

  return args.filter(el => el === 1);
}

console.log(RestMethod(1,2,3));