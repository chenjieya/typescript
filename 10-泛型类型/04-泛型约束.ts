interface IN {
    length: number
}
// 类型继承自声明的对象，必须包含length属性
function getLength<T extends IN>(str: T) {
    return str.length;
}

// getLength(123);  // 报错，因为范型可以传递任何参数，所以代码不严谨报错
getLength('abc');
getLength(['asd', 'das']);