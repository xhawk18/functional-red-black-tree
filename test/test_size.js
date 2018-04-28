let createTree = require("../rbtree.js");

let SIZE = 1000;

function main(rem){
    var t1 = createTree();
    let time = process.hrtime();

    let count = 0;

    for(let i = 0; i < SIZE; ++i) {
        let set = new Set();
        for(let j = 0; j < i % Math.floor(SIZE / 3); ++j) {
            ++count;
            set.add(j);
        }
        t1 = t1.insert(i, set)
    }

    //console.log(t1.length)
    //console.log(t1.get(3))

    t1.dump();

    n = rem;
    //console.log('remove n = ', n);
    //t1 = t1.remove(n)

    console.log('update n = ', n);
    let itr = t1.find(n);
    let set = new Set();

    for(let j = 0; j < SIZE * Math.random(); ++j)
        set.add(j);
    
    t1 = itr.update(set);

    t1.dump();

    console.log(`count = ${count}, ${t1.size}`);

    time = process.hrtime(time);
    console.log(time);

}

for(let i = 0; i < SIZE; ++i)
    main(i)
