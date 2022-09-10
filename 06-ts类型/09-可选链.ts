// 可选链操作 
// 在我们的非空断言的时候会跳过代码校验，如果某个属性不存在的情况下，代码还是会报错的，这样代码还是不够严谨
// 所以我们可以使用可选链操作，es2020

type obj = {
    name: string,
    age: number,
    friend?: {
        name: string,
        age?: number
        grilFrined?: {
            name: string
        }
    }
}


const info: obj = {
    name: 'chenjie',
    age: 18
}



console.log(info.name);  // 'chenjie'
console.log(info.friend) // undefined
console.log(info.friend?.name) // 可选链，如果friend不存在就短路，直接返回undefined
// console.log(info.friend!.name) // 非空断言（语法错误）



export {}