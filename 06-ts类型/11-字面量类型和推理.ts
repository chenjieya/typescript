// 字面量类型
const message = 'hello 路星河';  // 会自动推理成 hello 路星河 类型，并不是string类型

// 字面量类型的意义需要结合联合类型
let align: 'left' | 'right' | 'center' = 'center';

align = 'right';
align = 'left';


// 2. 字面量类型推理出现的问题

// 自动推理成 object类型 { url: 'string', method: 'string }
// const obj = {
//     url: 'http://cj.fovik.com',
//     method: 'POST'
// }

// type Method = 'GET' | 'POST';

// function Request(url: string, method: Method) {}


// Request(obj.url, obj.method);  // 会报编译错误，因为我们的obj.method是string类型。有可能会被更改 obj.method = '123';

// 第一种解决办法
// type objtype = {
//     url: string,
//     method: Method
// }
// const obj: objtype = {
//     url: 'http://cj.fovik.com',
//     method: 'POST'
// }

// type Method = 'GET' | 'POST';

// function Request(url: string, method: Method) {}


// Request(obj.url, obj.method);  

// 第二种解决办法
// const obj = {
//     url: 'http://cj.fovik.com',
//     method: 'POST'
// }

// type Method = 'GET' | 'POST';

// function Request(url: string, method: Method) {}


// Request(obj.url, obj.method as Method); //将他的类型断言成Method  

// 第三种解决方法
const obj = {
    url: 'http://cj.fovik.com',
    method: 'POST'
} as const;  // 将这个对象断言成const常量，里面的属性变成了只读

type Method = 'GET' | 'POST';

function Request(url: string, method: Method) {}

Request(obj.url, obj.method); 


export {};