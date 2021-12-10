import { readFileSync } from 'fs';

const input = readFileSync('day1Input.txt').toString().split('\n').map((val) => parseInt(val));

console.log('p1: ', input.reduce((pv, cv, idx, arr) => cv < arr[idx+1] ? pv+1 : pv,0));

console.log('p2: ', input.reduce((pv, cv, idx, arr) => (cv + arr[idx+1] + arr[idx+2]) < (arr[idx+1] + arr[idx+2] + arr[idx+3]) ? pv+1 : pv,0));

