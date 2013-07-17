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
var value1 = parseInt(userArgs[0]);
var value2 = parseInt(userArgs[1]);
var answer = value1 + value2;

console.log(answer);