// 1. 函数类型

function test(fn: (num: number, num2: number) => number) {
    fn(1, 2);
}

// test(fn)

// 2. 

const add: (num1: number, num2: number) => void = (num1, num2): void => {}

// 案列
type fnType = (a: number, b: number) => number;
function sum(num1: number, num2: number, fn: fnType): number {
    return fn(num1, num2);
}

const result = sum(10, 20, function add(a, b) {
    return a + b;
}); // 相加
const res = sum(100, 2, function mul(a, b) {
    return a * b;
}); // 相乘

console.log(result, res);

export {};