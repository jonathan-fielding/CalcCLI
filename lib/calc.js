#! /usr/bin/env node

/*
 * calc
 * https://github.com/jonathan-fielding/CalcCLI
 *
 * Copyright (c) 2013 Jonathan Fielding
 * Licensed under the MIT license.
 */

'use strict';

var userArgs = process.argv.slice(2);
var calculation = userArgs[0];
var answer = eval(calculation);

console.log(answer);