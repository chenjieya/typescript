// this的默认推导
type objtype = {
    name: string,
    call: () => void
};
const obj = {
    name: 'chenjie',
    call() {
        console.log(this.name + '厉害呀hahhahah');
    }
}

obj.call();  // this默认推导指向obj

export {};