class Test {

    constructor(age) {
        this.age = age;
    }

    set age(val) {
        this._age = val;
    }

    get age() {
        return this._age + 'sui';
    }
}

console.log( new Test(19).age )