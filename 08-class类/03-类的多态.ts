//  类的多态就是生命类型是父类，但是传递的是子类

class Person {
    age: number = 18

    studying() {
        console.log('person studying....');
    }
}


class Student extends Person{
    name: string = 'chenjie'

    studying() {
        console.log('studying....')
    }
}


function dos(p: Person) {
    p.studying();  // 声明的是父类的类型，但是传递的子类，调用的也是子类的方法
    //  传递的子类必须继承自父类
}

dos(new Student())

export {}