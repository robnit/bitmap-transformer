const BitmapHeader = require('./bitmap-header');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn) {
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