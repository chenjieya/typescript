// ts.config.js中可以控制this是否可以乱用等操作(题外话)

type objtype = {
    name: string,
    call: () => void
};
const obj = {
    name: 'chenjie',
    call: calls,
}

// function calls() {
//     console.log(this.name + '厉害呀哈哈哈啊哈')
// }

// obj.call();  // 此时编译会报错，因为此时的this是unknow不确定的类型，obj，widnow, call, apply
// 不能确定this的指向

// 解决方案，制定this的指向
function calls(this: { name: string }) {
    console.log(this.name + '厉害呀哈哈哈啊哈')
}

obj.call();

calls.call({name: 'cj'});


export {};