// public声明的属性，在任何地方都可以使用

class Test {
    public name: string = 'cj';

    changeName() {
        this.name = 'chenjie';
    }
}

const p = new Test();
p.name = 'xaiochen';
console.log(p);
p.changeName();
console.log(p);

export {}
