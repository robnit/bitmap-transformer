constants = require('../lib/bitmap-constants');

class BitmapHeader {
    constructor(buffer){
        //TODO: Refactor. get correct offset values from test-bitmap.bmp
        this.pixelOffset = buffer.readInt32LE(constants.PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readInt16LE(constants.BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readInt32LE(constants.FILE_SIZE_OFFSET) + buffer.readInt32LE(constants.PIXEL_OFFSET);
    }
}

module.exports = BitmapHeader;