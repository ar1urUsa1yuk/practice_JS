'use strict';


// const hamburger = 3;
// const fries =0;
// const cola = 0;

// if (hamburger || fries || cola){
//     console.log('ок');
// }dfg

let hamburger;
const fries   = NaN;
const cola    = 0;
const nuggets = 0;


if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
}

/**  
    * * (&&) - і це і це - якшо все відповідає правильності true, то умова здійсниться, якщо ні то зворотнє
    * ! (||) - або це або - якщо хоть щось відповідає true, -
    * ! - то умова здійсниться, якщо все відповідає також, якщо нічого не відповідає то не здійсниться
*/

console.log( NaN || 2 || undefined ); //* 2 / true

console.log( NaN && 2 && undefined ); //* NaN

console.log( 1 && 2 && 3 ); //* 3

console.log( !1 && 2 || !3 ); //* false

console.log( 25 || null && !3 ); //* 25

console.log( NaN || null || !3 || undefined || 5); //* 5

console.log( NaN || null && !3 && undefined || 5); //* 5

console.log( 5 === 5 && 3 > 1 || 5); //* true


const a = '13',
    b = '12',
    c = '123'; //! якщо все вірно, виводить останнє 

console.log(a && b && c);

const d = '1',
    e = 2,
    f = 3; 

console.log(d && e && f);//! якщо !1 в значені змінної виводить false 