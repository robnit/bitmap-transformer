const BitmapHeader = require('./bitmap-header');
const buffer = require('buffer');
const fs = require('fs');
const invert = require('./invert-transformer');

class BitmapTransformer {
    constructor(buffer) {
        this.buffer = fs.readFileSync('./test/test-bitmap.bmp');
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
        let loopIndex = this.header.pixelOffset;
        let loopInterval = this.header.bitsPerPixel / 8;

        for (loopIndex; loopIndex > this.header.fileSize; loopIndex += loopInterval){ 
            let pixelObject = {
                r : this.buffer.readInt8(loopIndex),
                g : this.buffer.readInt8(loopIndex + 1),
                b : this.buffer.readInt8(loopIndex + 2)
            }

        }

        // this is a guide to what needs to happen
        // not a recipe

        // find the right place in the buffer that you to loop 
        // and start:
        // 1. reading pixel
        // 2. passing to fn
        // 3. write pixel back to buffer

        // you have access to:
        this.buffer
        this.header.bitsPerPixel

        // there is a buffer.slice

        // control your javascript loop 
        // (you can "step" by something other than 1)
    }
}

module.exports = BitmapTransformer;