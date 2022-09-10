// void类型是指函数返回undefined,不能是null,null编译回报错

function bar():void {};
function sum(n1: number, n2:number):void {
    console.log(n1 + n2);
    return undefined;
}

bar();
sum(1, 3);

export default{}