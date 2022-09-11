//  抽象类

//  获取面积

// function getArea(p: any) {
//     return p.getArea();
// }

function getArea(p: Shap) {
    return p.getArea();
}

// 抽象类，不可以new，抽象方法必须需要子类进行重写
abstract class Shap {
    abstract getArea()
}

// 长方形
class Rect extends Shap {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // 抽象方法，必须在子类中重写
    getArea() {
        return this.height * this.width;
    }
}

class Circle extends Shap {
    private r: number;
    constructor(r: number) {
        super();
        this.r = r;
    }

    getArea() {
        return this.r * this.r * 3.14;
    }
}

const react = new Rect(10, 20);
const circle = new Circle(20);

getArea(react);
getArea(circle);

// 缺点，如果不适用抽象类的话，则可以传递任何参数，这样会导致代码不严谨报错
// getArea(2131);
// getArea([1,2,3]);

// 使用抽象类
// abstract
// new Shap(); // 抽象类不可以被实列化

export {};