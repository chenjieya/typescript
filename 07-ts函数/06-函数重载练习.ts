// 联合类型实现
function getLength(args: string | any[]) {
    return args.length;
}

console.log( getLength('chenjie') );
console.log( getLength([1,2,3,4,5]) );


// 函数重载实现
function test(num: string):number;
function test(num: any[]): number;

function test(num: any): any {
    return num.length;
}

console.log( test('chenjieya') );
console.log( test([1,2,3,4,5,6,67,9]) );


export {}