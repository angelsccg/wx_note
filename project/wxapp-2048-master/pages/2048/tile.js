//2 4 8 16 32 64 128 256 512 1024 2048 4096
var valueNameArr = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
function Tile(position, value) {
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;
    this.valueName = getValueName(value);
    this.previousPosition = null;
    this.mergedFrom = null;
};

function getValueName(value) {
  var val = Math.log2(value);
  return valueNameArr[val - 1];
};

Tile.prototype = {

    // 记录格子上次的位置
    savePosition: function() {
        this.previousPosition = { 
        	x: this.x, 
        	y: this.y 
        };
    },

    // 更新当前格子的位置
    updatePosition: function(position) {
        this.x = position.x;
        this.y = position.y;
    },

    serialize: function() {
        return {
            position: {
                x: this.x,
                y: this.y
            },
            value: this.value,
            valueName: this.valueName

        };
    }
}

module.exports = Tile;
