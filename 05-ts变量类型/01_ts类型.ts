// 1.number类型
let num: number = 123;
let num1: number = 0b100; // 二进制
let num2: number = 0o100; // 八进制
let num3: number = 0x100; // 十六进制

console.log(num, num1, num2, num3);

// 2.boolean 类型

let flag: boolean = true;
flag = 20 > 30;
console.log(flag, 'boolean');

// 3.string 类型
let str: string = 'qwe';
let name: string = `chenjie`;
console.log(str, name, 'string');


// 4. arr 类型
const arr: Array<string> = [];  // 不推荐
const arr1: string[] = []; // 推荐

// arr.push(123);

// 5. object 类型
const obj = {
    name: 'chenjie',
    height: 185
}

// 6. null和undefined
let n1 = null;
let n2 = undefined;
// n1 = '123';
console.log(n1);

// 7.symbol 类型




export default{}


