interface ISwim {
    swimming: () => void
}

interface IEat {
    eating: () => void
}


class Animation {
    eating() {
        console.log('animation eating');
    }
}

// 接口
class Fish extends Animation implements ISwim, IEat {
    swimming() {
        console.log('Fish swimming');
    }
}

class Person implements ISwim {
    swimming() {
        console.log('person swimming')
    }
}


// function swim(swim: Fish) {
//     swim.swimming();
// }

// 面向接口编程 (只要是这个接口类型就可以传递进来，和多态的区别，多态是类，只要是子类继承了父类就可以传递进来)
function swim(swim: ISwim) {
    swim.swimming();
}

//  如果说这样传递太单一了，我们要是想传递一个有swimming方法的对象，是会报错的
swim(new Fish());
// swim({swimming() {}}) // 报错

swim(new Person());


export {}