function calculate(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else {
        return 'Invalid operation';
    }
}
console.log(calculate(8, 4, 'add')); 