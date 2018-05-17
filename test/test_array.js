let RBArray = require('../array');

function rand(n){
    let r = new Array(n);
    for(let i = 0; i < n; ++i){
        r[i] = Math.floor(Math.random() * i);
    }
    return r;
}


function test(n, r){
    let start = process.hrtime();
    
    let a = new RBArray();
    for(let i = 0; i < n; ++i){
        let pos = r[i];
        a = a.insert(pos, -i);
    }
    //for(let i = 0; i < a.length; ++i)
    //    console.log(a.at(i).value);
    console.log('rbtree', process.hrtime(start));
}

function test2(n, r){
    let start = process.hrtime();
    
    let a = new Array();
    for(let i = 0; i < n; ++i){
        let pos = r[i];
        a.splice(pos, 0, -i);
    }
    //for(let i = 0; i < a.length; ++i)
    //    console.log(a[i]);
    console.log('array', process.hrtime(start));
}

let n = 1000000;
let r = rand(n);
while(true){
    test(n, r);
    test2(n, r);
}
