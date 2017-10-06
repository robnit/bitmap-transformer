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
        // console.log('about to transform...');
        // console.log('this is', this);
        // console.log('this.header is', this.header);
        // console.log('this.buffer is', this.buffer);

        let loopIndex = this.header.pixelOffset;
        let loopInterval = this.header.bitsPerPixel / 8;
        // console.log('loop index is', loopIndex);
        // console.log('loop interval is', loopInterval);

        // console.log('first readInt is',this.buffer.readInt8(loopIndex));

        
        
        
        for (loopIndex; loopIndex < this.header.fileSize; loopIndex += loopInterval){ 
            console.log('old pixel bytes', this.buffer.slice(loopIndex, loopIndex+3));
            let pixelObject = {
                r : this.buffer.readInt8(loopIndex),
                g : this.buffer.readInt8(loopIndex + 1),
                b : this.buffer.readInt8(loopIndex + 2)
            }
            // console.log(pixelObject);
            pixelObject = invert(pixelObject);
            // console.log(pixelObject);
            // console.log('pixelObject.r is', pixelObject.r);
            
            this.buffer.writeUInt8(pixelObject.r, loopIndex);
            this.buffer.writeUInt8(pixelObject.g, loopIndex + 1);
            this.buffer.writeUInt8(pixelObject.b, loopIndex + 2);
            console.log('new pixel bits', this.buffer.slice(loopIndex, loopIndex+3));


        }

        // this is a guide to what needs to happen
        // not a recipe

        // find the right place in the buffer that you to loop 
        // and start:
        // 1. reading pixel
        // 2. passing to fn
        // 3. write pixel back to buffer

        // you have access to:
        // this.buffer
        // this.header.bitsPerPixel

        // there is a buffer.slice

        // control your javascript loop 
        // (you can "step" by something other than 1)
    }
}

module.exports = BitmapTransformer;