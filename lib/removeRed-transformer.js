function removeRed(obj){
    const newObj = {
        r : 0,
        g : obj.g,
        b : obj.b
    }
    return newObj;
}

module.exports = removeRed;