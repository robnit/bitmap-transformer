function invert(obj){
    const newObj = {
        r : Math.abs(obj.r - 255),
        g : Math.abs(obj.g - 255),
        b : Math.abs(obj.b - 255)
    };
    return newObj;
}

module.exports = invert;