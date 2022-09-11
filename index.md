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
    - 函数重载(当函数的参数类型是联合类型的时候，内部需要大量的逻辑判断， 这时候可以使用函数重载)

2. 环境搭建
    - webpack搭建环境
        - webpack webpack-cli webpack-dev-serve(热更新) html-webpack-pulign(模板) ts-loader typescript

    - ts-node工具库可以直接编译ts代码，并直接在node环境中运行

    - 全局安装的typescript命令，可以直接通过tsc直接编译对应的ts文件，生成同名的js文件

3. class类型
    - extends 继承
    - super 调用父类
    - 多态(类型是父类，但是可以传递继承自父类的子类)
    - static 静态方法
    - public 任何地方都可以使用
    - private 只能在当前的类内部使用
    - protected 能在当前类中使用，也能在继承自当前类的子类中使用
    - readonly 只读属性，能在constructor中赋值
    - getter/setter
    - abstract 抽象类(抽象类不能实列化，抽象方法必须在子类中重写)

4. 接口(interface)
    - 主要用于声明对象类型，也可以声明函数声明
    - 和type的区别，interface可以声明重复的变量，当变量重复的时候会进行合并
    - 接口类型可以继承 extends **合并了**
    - 交叉类型 ｜ &， &可以使用在两个接口声明的时候，相当于两个接口声明**合并了**
    - 面向接口编程(指当我们函数穿参制定某一个类的时候，我们的传参就限制死了，比如说还有别的对象也可以实现函数内的功能，这样是传递不进去的。此时我们可以更改成接口类型，只要符合这个接口类型的都可以通过参数校验)
    - 字面量赋值
    - 枚举 enum

5. 泛型
    - 在函数的形参中有的时候会使用联合类型，这样会很麻烦，而且会多很多逻辑判断代码
    - 范型是由实参来决定形参的类型
    - 范型可以有多个
    - 范型约束

6. 类型查找 (.d.ts) declare
    - 比如说我们的lodash工具库，在ts中是没有类型检验的，我们除了借用别的校验哭之外，也可以自己写，.d.ts结尾的文件，进行模块声明
    - 我们也可以对文件进行模块声明

