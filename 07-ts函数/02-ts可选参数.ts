// 可选参数一定要放在必选参数之后
// function sum(n?: number, n1) {

// }

function sum(n: number, n1?:number) {}


// 默认值

function test(name: string='chenjie', age: number) {}


// 剩余参数

function test1(first: number, ...arr: any[]): number {
    let total = first;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

test1(1,2,3,43,54);

export default{}