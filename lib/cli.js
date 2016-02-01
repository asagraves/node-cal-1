#!/usr/bin/env node --harmony_destructuring

'use strict';

//import monthGen

const { outputCal } = require("./monthGen.js");

// ignore first two items in argsv array and give me just the command line arguments
const [,,...argv] = process.argv;


let errorMsg = "Arguments are invalid"

//get the month and year of today
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();


//handle args
//if there is one arg, check for year, if two check for year and month
argv.length === 0 ? console.log(outputCal(month,year)) :
argv.length === 1 && parseInt(argv[0]) > 1753 && parseInt(argv[0]) < 9999 ? console.log("year should be output") :
argv.length === 2 && parseInt(argv[0]) > 0 && parseInt(argv[0]) <= 12 && parseInt(argv[1]) > 1753 && parseInt(argv[1]) <= 9999 ? console.log(outputCal(parseInt(argv[0]),parseInt(argv[1]))): console.log(errorMsg);



