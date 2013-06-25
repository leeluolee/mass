// thx bin-packer && ispriter
var path = require('path'),
    fs = require('fs'),
    GrowingPacker = require('./helper/GrowingPacker'),
    Canvas = require('canvas'),
    Image = Canvas.Image;

function Sprite(options){
    this.options = options || {};
    this.packer = new GrowingPacker();
    this.infos = [];
    this.canvas = new Canvas(400, 400);
    this.ctx = this.canvas.getContext('2d');
}


var _ = Sprite.prototype;


_.add = function(src){
    var infos = this.infos,
        img = new Image,
        content = fs.readFileSync(src),
        info = {};

    img.src = content;
    info.img = img;
    info.w = img.width;
    info.h = img.height;
    infos.push(info);
    this.ctx.drawImage(img, 0,0);
    return this;
}

_.computeWith

_.write = function(){
    var ctx = this.canvas.getContext('2d'),
        infos = this.infos,
        info;
    infos.sort(function(a,b) { return (b.h < a.h); }); // sort inputs for best results
    this.packer.fit(infos);

    for(var n = 0 ; n < infos.length ; n++) {
        var info = infos[n]
             fit = info.fit;
        if (fit) {
            // ctx.drawImage(info.image, fit.x, fit.y, fit.w, fit.h);
        }
    }
    var dest = this.options.dest;
    // console.log(this.canvas.toBuffer())
    // fs.writeFileSync(dest, this.canvas.toBuffer());
}

var sprite = new Sprite({
    dest: path.join(__dirname, 'hello.png')
})
.add(path.join(__dirname, '../test/assets/4.png'))
.write()

