const arr = ['123', '456', '789', '5000', '8452', '81', '2548601'];

arr.forEach(element => {
    if (element[0] === '4' || element[0] === '2') {
        console.log(element);
    }
});

for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if ( i % j === 0) {
            count++;
            break;
        }
    }
    if (count === 0) {
        console.log(`${i}. Делители этого числа: 1 и ${i}`);
    }
}