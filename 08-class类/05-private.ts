// private声明的属性，只能在当前类中使用

class Test {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    changeName() {
        this.name = 'chenjie';
    }
}

class Te extends Test {
    constructor() {
        super('cj')
    }

    changeName(): void {
        // console.log(this.name)  // private为私有属性，即使是继承的子类也获取不到父类中的私有属性
    }
}


const p = new Test('cj');
// p.name = 'xaiochen';   // 报错，private声明的属性，在Test外部无法获取和更改
// console.log(p.name); // 报错
p.changeName();
console.log(p);

export {}