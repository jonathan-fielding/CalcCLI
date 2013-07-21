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

program
  .version('0.1.0')
  .option('<number1> <number2>', 'specify the numbers to add together', Number)
  .parse(process.argv);

var value1 = parseInt(program.args[0]);
var value2 = parseInt(program.args[1]);
var answer = value1 + value2;

console.log(answer);