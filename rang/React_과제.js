let b = 1;

function hi() {
    var a = 1;
    let b = 100;

    b++;
    console.log(a, b);
}

// console.log(a);

console.log(b);             // 1

hi();                       // (1, 101)

console.log(b);             // 1