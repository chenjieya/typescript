// 只有在父类和继承的子类中能获取到protected声明的属性

class Test {
    protected name: string
    constructor(name: string) {
        this.name = name;
    }

    changeName() {
        this.name = 'chenjie';
    }
}

class Te extends Test {
    getName() {
        console.log(this.name, '子类');
    }
}

const p = new Test('cj');
// console.log(p.name); // 报错，protected声明的属性，只能在类中获取到

const p1 = new Te('xiaochen');
p1.getName();


export {};