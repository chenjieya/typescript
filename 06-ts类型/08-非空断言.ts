// ! 非空断言

function printMessage(message?: string):void {
    console.log(message!.length)
    // if(message) {
    //     console.log(message.length);
    // }
}
// 这种非必填项的代码在编译的时候是会报错的，因为这样的代码不严谨
// 因为有的时候代码会为undefined 这样时候报错的 ？就相当于 string | undefined
// 要想不报错，加if判断，或者非空断言（非空断言就是告诉编译器，这一定是有值的）

printMessage('hello typescript');
// printMessage(); // 还是会报错，不过不是编译的错误，是正常的语法错误