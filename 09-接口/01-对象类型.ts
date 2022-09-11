// 类型别名
type objType = {name: string, friend?:{name: string}, fn: (num1: number, num2: number) => void}

// 接口
interface IObjType { 
    name: string 
    friend?: {
        name: string
    }
    fn: (num1: number, num2: number) => number
}

const obj: objType = {
    name: 'chenjie',
    fn: (num1, num2) => {
        return num1 + num2;
    },
    friend: {
        name: 'cj'
    }
}

obj.fn(1, 2);
console.log(obj.friend?.name);

export {}

