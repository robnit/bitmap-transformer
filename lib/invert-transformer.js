function invert(obj){
    obj.r = Math.abs(obj.r - 255);
    obj.g = Math.abs(obj.g - 255);
    obj.b = Math.abs(obj.b - 255);
}

module.exports = invert;