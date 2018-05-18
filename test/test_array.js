let RBArray = require('../array');

Array.prototype.at = function(idx) {
    return this[idx];
}

function rand(n){
    let r = new Array(n);
    for(let i = 0; i < n; ++i){
        r[i] = Math.floor(Math.random() * i);
    }
    return r;
}

function test(ArrayType, n, r){
    let start = process.hrtime();
    
    let a = new ArrayType();
    let name = Object.prototype.toString.call(a);

    for(let i = 0; i < n; ++i){
        let l = a.push(i*3);
        //console.log(l);
    }
    //console.log(a);

    for(let i = 0; i < n; ++i){
        let pos = r[i];
        a.splice(pos, 0, -i, i + 1);
        //console.log('bbbb', pos, a);
        let pos1 = Math.floor((pos + a.length / 2) % a.length);
        res = a.splice(pos1, 2);
        //console.log('cccc', pos1, a);
        //console.log('splice', res);
    }
    
    //console.log('length', a.length)
    //for(let i = 0; i < a.length; ++i)
    //    console.log(name, i, a.at(i));
    console.log(name, process.hrtime(start));
    return a;
}

{
let n = 20000
let r = rand(n);
while(true){
    let a = test(RBArray, n, r);
    let b = test(Array, n, r);

    console.log(a.length, b.length);
    if(a.length !== b.length)
        throw new Error('length not match');
    for(let i = 0; i < a.length; ++i){
        if(a.at(i) !== b.at(i)){
            console.error(i);
            break;
        }
    }

    let last_a = a.pop();
    let last_b = b.pop();

    let first_a = a.shift();
    let first_b = b.shift();

    console.log(a.length, b.length, first_a, first_b, last_a, last_b);




    let sa = a.slice(1, 5);
    let sb = b.slice(1, 5);
    console.log(sa, sb);
    break;
}
}

let a = [];
let b = new RBArray();
for(let i = 0; i < 5; ++i){
    a.push(i);
    b.push(i);
}
let sa = a.slice();
let sb = b.slice();
console.log(sa, sb);