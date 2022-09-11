// 函数类型

type fnType = (num1: number, num2: number) => number;
interface IFnType {
    (num1: number, num2: number): number
}
function test(num1: number, num2: number, fn: IFnType) {
    return fn(num1, num2);
}

const fn = (num1: number, num2: number) => num1 + num2;

test(1, 2, fn);

export {};