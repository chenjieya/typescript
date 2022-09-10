// 1. 通过webpack配置，实现ts的热更新

// 2.ts-node工具库，帮助我们编辑，然后直接在node环境运行，需要依赖两个工具库，tslib @types/node

// ts在运行的时候是全局作用域，如果存在相同的变量名回报错，想要实现模块话，可以写一个导出

const message:string = '123';

console.log(message);

export{}