import { add } from 'esm';
import * as esm from 'esm';
import { subtraction } from 'cjs';
import * as cjs from 'cjs';

console.log('1 + 2: ', add(1, 2));
console.log('1 + 2: ', esm.add(1, 2));
console.log('2 - 1: ', subtraction(2, 1));
console.log('2 - 1: ', cjs.subtraction(2, 1));
