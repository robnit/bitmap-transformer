constants = require('../lib/bitmap-constants');

class BitmapHeader {
    constructor(){
        this.pixelOffset = constants.PIXEL_OFFSET;
        this.bitsPerPixel = constants.BITS_PER_PIXEL_OFFSET;
        this.fileSize = constants.FILE_SIZE_OFFSET;
    }
}