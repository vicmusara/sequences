function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prevFibs = fibsRec(n - 1);
    return [...prevFibs, prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]];
}

console.log(fibsRec(8));
console.log(fibsRec(10));