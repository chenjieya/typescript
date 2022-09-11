//  readonly只读

class Test{
    readonly name: string;

    constructor(name: string) {
        this.name = name;  // readonly只能在constructor中赋值一次
    }

    changeName() {
        // this.name = 'cj';  // 报错
    }
}

const p = new Test('chenjie');
// p.name = 'cj'; // 报错

export {};