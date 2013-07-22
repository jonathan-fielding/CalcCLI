#! /usr/bin/env node

/*
 * calc
 * https://github.com/jonathan-fielding/CalcCLI
 *
 * Copyright (c) 2013 Jonathan Fielding
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander');
var _ = require('underscore');
var answer = null;

program
  .version('0.1.0')
  .option('--number1 <int>', 'specify the first number to add together',Number)
  .option('--number2 <int>', 'specify the second number to add together',Number)
  .parse(process.argv);

if(_.isUndefined(program.number1) || _.isUndefined(program.number2)){
	console.log('Please check your arguments, check --help for details')
}
else{
	if(_.isNaN(program.number1) || _.isNaN(program.number2)){
		console.log('Please only enter numbers');
	}
	else{
		answer = program.number1 + program.number2;
		console.log(answer);
	}
}

