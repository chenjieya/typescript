// 对象类型
// z？z是可选的
function point(point: {x: number, y:number, z?:number}):void {
    console.log(point.x, point.y);
    console.log(point.z);
}

point({
    x:1,
    y:3
})

point({
    x:1,
    y:3,
    z:4
})