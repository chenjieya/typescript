// 索引类型

const obj: IObjType = {
    0: 'HTML',
    1: 'JAVASCRIPT',
    2: 'VUE'
}

interface IObjType {
    [index: number]: string
}

console.log(obj[0]);


const obj1: IOBJ = {
    'HTML': '结构',
    'JAVASCRIPT': '行为'
}

interface IOBJ {
    [name: string]: string
}
export {};