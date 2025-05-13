import {formatCurrency} from '../scripts/utils/money.js';

//There is type of test cases (grp of related tests are called test suite)
// 1.basic test case (test if the test code is working)
// 2.edge cases(test with tricky value code)

console.log('test suite:formatcurrency');

//below testing is basic test cases

console.log('convert cents into dollars');
if(formatCurrency(2095)==='20.95'){
    console.log('passed test 1');
}
else{
    console.log('failed test 1');
}

//below testing is edge test cases

console.log('work with 0');

if(formatCurrency(0)==='0.00'){
    console.log('passed test 2');
}
else{
    console.log('failed test 2');
}

console.log('rounds up to nearest test');

if(formatCurrency(2000.5)==='20.01'){
    console.log('passed test 3');
}
else{
    console.log('failed test 3');
}