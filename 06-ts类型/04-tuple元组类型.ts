// tuple元组类型（约定数组内每一项的类型）

// const arr: string[] = [];  // 数组中的每一项都是字符串

// 'chenjie', 185, 18
// const arr: any[] = ['chenjie', 185, 18]; 
// arr[0]  // 这样数组中的每一项都是any类型

const arr: [string, number] = ['chenjie', 185];
console.log(arr[0], arr[1]);



// tuple元组类型的使用场景
// 封装一个函数，穿进去一个参数，返回穿进去的参数和一个改变当前参数的函数
// function change(state:any) {
//     let currentState = state;
//     const changeState = (newVal: any):void => {
//         currentState = newVal;
//     }

//     // const arr:any = [currentState, changeState]; // any会有缺陷，这样在函数外面数组内的每一项都是any类型
//     const arr: [any, (newVal:any) => void] = [currentState, changeState];
//     return arr;
// }

// const test1 = change(1231);
// console.log(test1[0], test1[1]);
// const test2 = change('abc');
// console.log(test2[0], test2[1]);


// export {};


// 优化
function change<T>(state:T) {
    let currentState = state;
    const changeState = (newVal: T):void => {
        currentState = newVal;
    }

    // const arr:any = [currentState, changeState]; // any会有缺陷，这样在函数外面数组内的每一项都是any类型
    const arr: [T, (newVal:T) => void] = [currentState, changeState];
    return arr;
}

const test1 = change(1231);
console.log(test1[0], test1[1]);
const test2 = change('abc');
console.log(test2[0], test2[1]);


export {};