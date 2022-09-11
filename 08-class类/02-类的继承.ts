class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eating() {  
        console.log('eating....');
    }
}

// Student 继承自 Person
class Student extends Person{
    hobby: string;

    constructor(name: string, age: number, hobby: string) {
        super(name, age);  // 调用父类的constructor
        this.hobby = hobby;
    }

    studying() {
        console.log('student studying...');
    }

    // 重写eating方法
    eating() {
        super.eating();  // 先执行父类的方法
        console.log('student eating...');
    }
}

class Teacher {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    teaching() {
        console.log('teacher teaching....');
    }
}

const stu = new Student('chenjie', 18, '乒乓球');
console.log(stu, 'stu');
stu.eating();

export {};