// never 类型： 指永远无法达到的终点，抛出异常或者根本没有返回值的函数
function test():never {
   console.log('xxx');
   while(true) {}
}

function test1(message: string): never {
    throw new Error('');
}


test();
test1('never类型');


// never应用场景
function handleMessage(message: string | number | boolean) {
    switch(typeof message) {
        case 'string':
            console.log('字符串类型');
            break;
        case 'number':
            console.log('数字类型');
            break;
        default:
            const check: never = message;
    }
}

handleMessage(123);
handleMessage('自负啊魂');
handleMessage(true);  // 当有一天我想传递布尔类型的时候，我在实参中加上布尔类型的判断，但是函数中并没有对布尔类型进行处理。

// never类型可以赋值给任意类型，但是别的类型不能赋值给never类型，除了never本身


export{}