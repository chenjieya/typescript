// 类的定义，必须给字段默认值
class Person {
    name: string = '';
    age: number = 18;

    eating() {}
}

class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const p = new Student('chenjie', 18);