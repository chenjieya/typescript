type align = 'center' | 'left';

let direction: align = 'center';
direction = 'left';

//  交叉类型应用 &

interface IFly {
    flying: () => void
}

interface ISwim {
    swimming: () => void
}

type obj1 = IFly | ISwim;
type obj2 = IFly & ISwim;

const obj: obj1 = {
    // | 
    flying() {
        console.log('flying');
    }
}

const obj3: obj2 = {
    flying() {},
    swimming() {}
}

obj.flying();

export {}