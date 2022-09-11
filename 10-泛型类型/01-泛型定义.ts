// 范型，类型化参数，形参类型由实参类型决定

// 这样参数的类型太复杂，里面的逻辑代码也需要不同的判断
// function add(num1: number | string | any[] | {}, num2: number | string | any[] | {}) {

// }

function add<T>(num: T) {
    return num;
}

add<number>(1);
add<string[]>(['abc']);
add({name: 'anc'}); // 会自动推理类型


// 多个范型
function test<T, A>(num: T, num2: A) {

}

test<number, string>(123, 'bacn');


export {}
