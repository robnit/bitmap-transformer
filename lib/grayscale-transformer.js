function grayscale(obj){
    const average = (obj.r + obj.g + obj.b) / 3;
    const newObj = {
        r : average,
        g : average,
        b : average
    };
    return newObj;
}

module.exports = grayscale;