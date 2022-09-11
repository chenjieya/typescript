// 接口继承

interface obj1 {
    flying: () => void
}

interface obj2 {
    swimming: () => void
}

interface ITest extends obj1, obj2 {
    walking: () => void
}

const obj: ITest = {
    flying() {
        console.log('flying....');
    },
    walking() {
        console.log('walking...');
    },
    swimming() {
        console.log('swimming...');
    }
}

obj.flying();
obj.walking();
obj.swimming();
export {}