// 1. any类型，什么类型都可以
let message: any = 'hello typescript';
message = 123;
message = '3212';
message = true;

console.log(message, 'any');


// 2.unknow 不确定类型
function foo() {
    return 'string';
}

function bar() {
    return 123;
}

let flage: number = Math.random() * 10;
let result:unknown;  // 不写也不给默认值，则是any类型, 如果不写编译的时候回报错
if(flage >= 5) {
    result = foo();
} else {
    result = bar();
}
// any类型可以赋值给任意类型
// unknow类型只能赋值给any类型和unknow类型

// let message1: string = result; // result为unknow类型时候，不能赋值给string类型
let message2: any;
message2 = result; // unknow类型可以赋值给any类型

console.log(result, message2, 'unknow')

export {}