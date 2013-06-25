var mcss = require('mcss'),
    GrowingPacker = require('./GrowingPacker'),
    canvas = require('canvas');

function Mass(options){
    this.options = options || {};
}

var mp = Mass.prototype;

exports.mcss = function(){
    return new Mass(options);
}

var packer = new GrowingPacker();

blocks.sort(function(a,b) { return (b.h < a.h); });
packer.fit(blocks);
//

for(var n = 0 ; n < blocks.length ; n++) {
    var block = blocks[n];
    if (block.fit) {
        console.log(n, block.fit);
    }
}

var readImageInfo = function(styleObjList){
    var styleObj, imageInfo, content, image;

    for(var url in styleObjList){
        styleObj = styleObjList[url];

        if(imageInfo = imageInfoCache[url]){

        }else{
            content = fs.readFileSync(spriteConfig.input.imageRoot + url);
            imageInfo = {};
            
            image = new Canvas.Image();
            image.src = content;
            imageInfo.image = image;
            // console.log(image.size);
            imageInfo.width = image.width;
            imageInfo.height = image.height;
            //图片本身可能是没压缩的, 有很多冗余信息, 这里要取压缩后的 size 才行
            // imageInfo.size = content.length;
            imageInfo.size = getImageSize(image);

            imageInfoCache[url] = imageInfo;
        }
        // 从所有style里面，选取图片宽高最大的作为图片宽高
        setImageWidthHeight(styleObj, imageInfo);

        styleObj.imageInfo = imageInfo;
    }
}