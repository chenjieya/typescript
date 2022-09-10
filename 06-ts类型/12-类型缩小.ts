// 1. typeof
function id(id: number | string) {
    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

id(123);  // 123
id('chenjieid'); //CHENJIE


// 2. === !== 等
// type Direction = 'left' | 'top' | 'bottom' | 'top';
// function direction(direction: Direction) {
//     switch(direction) {
//         case 'left':
//             console.log(direction);  // 缩小了类型的范围
//             break;
//          case ....
//     }
// }
// let directions: Direction = 'left';
// direction(directions);

// 3. instanceof

function time(time: string | Date) {
    if(time instanceof Date) {
        time.toUTCString();
    } else {
        console.log(time);
    }
}


class Student {
    studying() {}
}

class Teacher {
    teach() {}
}

function work(p: Student | Teacher) {
    if(p instanceof Student) {
        p.studying();
    } else {
        p.teach();
    }
}
const p = new Student();
work(p);


// 4. in
type Fish = {
    swimming: () => void
}

type Bird = {
    flying: () => void
}

function walk(obj: Fish | Bird) {
    if('swimming' in obj) {
        obj.swimming();
    } else{
        obj.flying();
    }
}

const fish: Fish = {
    swimming() {
        console.log('swimming')
    }
}

const bird: Bird = {
    flying() {
        console.log('flying')
    }
}

walk(fish);



export {};