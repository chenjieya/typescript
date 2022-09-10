// as 类型断
// 类型断言，将广阔的概念转换成具体的概念
// <img id='cj'>

// 报错
// const el:HTMLElement | null = document.getElementById('cj');
// el.src = 'test';

const el = document.getElementById('cj') as HTMLImageElement; // 将html对象断言成具体的img对象
el.src = 'cj';


// 2. 
class Person {

}

class Student extends Person{
    studying() {}
}

function test(p: Person) {
    // p.studying()   // 这样直接使用是没有该方法的

    (p as Student).studying();  // 断言到具体的student对象
}
const stu = new Student();
test(stu);


// 3.不推荐使用，容易造成代码中的类型混乱

const message: string = 'chenjie';
let num:  number = (message as any) as number;


export {};