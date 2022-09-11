// 一个函数相加，既可以是number又可以是string

// function add(num1: number | string, num2: number | string ) {
//     return num1 + num2;
// }

// add(1,2);  // 报错，ts默认情况下不允许类型之间相加（ts认为变量并不是两种类型中的其中一种， 其实他是当成了 number | string类型， 这种类型并不允许相加）



//  1.类型缩小，解决问题（并不能确定函数的返回类型）
//  2.逻辑判断太多
// function add(num1: number | string, num2: number | string ) {
//     // if(typeof num1 === 'number' && typeof num2 === 'number') {
//     //     return num1 + num2;
//     // } else if() {

//     // }
// }


// 函数重载
// 函数名称相同，但是参数不同（参数个数不同，参数的类型不同）

function add(num1: number, num2: number): number;
function add(num1: string, num2: string, num3?: string): string;

function add(num1: any, num2: any, num3?: any): any {
    console.log(num3?.length, 'length');
    return num1 + num2;
}

// 函数重载会先匹配上面的重载，然后执行下面的函数体

const result = add(1, 39);
const result1 = add('cj', 'lihai', 'yayay');
console.log(result, result1)

export{}