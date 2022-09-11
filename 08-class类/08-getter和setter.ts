// 

class Test {
    private _age: number | string;

    constructor(age: number) {
        this._age = age;
    }

    get age() {
        return this._age + '岁';
    }

    set age(val: number | string) {
        this._age = val;
    }
}

class Te extends Test {
    constructor(age: number) {
        super(age);
    }
}


const p = new Te(18);
p.age = 16;
console.log(p.age);

export {};