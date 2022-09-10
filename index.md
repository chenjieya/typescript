### ts总结

1. 类型
    - string 类型
    - number 类型
    - string[] / Array<string>
    - object 类型(可选参数) const obj: {name: 'chenjie', age?:number} 可以不写age这个属性
        - 可选参数需要注意事项
        - 如果不传递参数，代码会报错，代码不严谨导致（解决方案if判断，非空断言！，可选链操作？.）
        - 非空断言的意思就是，告诉编译器，这块的代码是有值的，直接跳过校验，这会导致，编译成功，但是我们的代码可能会报错
        - 可选链操作就是obj.friend?.name  obj的friend存在吗？如果存在则取name属性，不存在直接短路不在往后看
    - any 任意类型，不安全（any类型可以赋值给任意类型）
    - unknow 不确定类型（nuknow指可以赋值给unknow和any类型）
    - void 类型（指函数返回undefined, 广泛的，其实函数返回其他类型，使用void也可以）
    - never 类型(指函数不能走完，比如说死循环，报错，抛出错误)
        - 应用场景：比如说联动类型传递了string | number 但是开发者又加上了boolean类型，但是函数里面并没有处理boolean类型的代码，可以在default中使用never类型
    - tuple 元组类型(数组中每一项的类型声明) const arr:[string, number] = ['23', 123]
    - 类型别名 type
    - 类型断言 as(将广泛的类型具体到某一种类型，比如说htmlElement 具体到 HTMLImgElement)
        - 即使你获取到的不是你断言的类型，他也依旧会把他当作声明之后的类型进行校验
    - 非空断言 ！非空断言就是告诉检验类型，这一定有值，跳过这个校验
    - 字面量 一些字面量推理会出现问题（可以通过断言解决）
    - 缩小类型范围 （typeof === !== instanceof in）
    - () => void 函数类型
    - this推导

2. 环境搭建
    - webpack搭建环境
        - webpack webpack-cli webpack-dev-serve(热更新) html-webpack-pulign(模板) ts-loader typescript

    - ts-node工具库可以直接编译ts代码，并直接在node环境中运行

    - 全局安装的typescript命令，可以直接通过tsc直接编译对应的ts文件，生成同名的js文件