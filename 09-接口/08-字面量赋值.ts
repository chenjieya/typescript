interface IObj {
    name: string,
    age: number,
    height: number
}

// 代码是报错的，因为你的IObj类型中没有weight
// const info: IObj = {
//     name: 'cehnjie',
//     age: 18,
//     height: 185,
//     weight: 60
// }

const info = {
    name: 'chenjei',
    age: 18, 
    height: 185,
    weight: 60
}

// 擦除（声明info默认进行类型推断，在重新赋值的时候，IObj类型会擦除weight属性的类型校验， 但是当你在取weight属性的时候会报错）
const obj1: IObj = info;
// console.log(obj1.weight);  // 报错 类型检测过不去， 在该类型检测上不存在

function print(id: IObj) {
    // 不能取到id.weight，类型检测不存在
    return id.name
}

// 报错
// print({
//     name: 'chenjie',
//     age: 18,
//     height: 185,
//     weight: 60
// });

const info1 = {
        name: 'chenjie',
        age: 18,
        height: 185,
        weight: 60
    };

print(info1)