// interface是定义类型的名字是可以重复的，会发生合并

interface IS {
    name: string
}

interface IS {
    age: number
}

const obj: IS = {
    name: 'cj',
    age: 18
}

export {}