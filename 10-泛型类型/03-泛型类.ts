class Test<T, N> {
    name: T
    age: N

    constructor(name: T, age: N) {
        this.name = name;
        this.age = age;
    }
}

const p = new Test<string, number>('chenjie', 18);
const p1 = new Test('chenjie', 18);  // 自动推理
const p2: Test<string, number> = new Test('chenjie', 18);
// 还记着声明数组的时候
const arr: Array<string> = [];

export {}