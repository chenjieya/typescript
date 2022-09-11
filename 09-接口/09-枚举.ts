enum DIRECTION {
    LEFT = 0,
    RIGHT = 1,
    BOTTOM = 2,
    TOP = 3
}

function direction(direction: DIRECTION) {
    switch(direction) {
        case DIRECTION.LEFT:
            console.log(direction);
            break;
        case DIRECTION.RIGHT:
            console.log(direction);
            break;
        case DIRECTION.BOTTOM:
            console.log(direction);
            break;
        case DIRECTION.TOP:
            console.log(direction);
            break;
        default: 
            const dir: never = direction;
            break;
    }
} 

direction(DIRECTION.LEFT);
direction(DIRECTION.RIGHT);
direction(DIRECTION.BOTTOM);
direction(DIRECTION.TOP);