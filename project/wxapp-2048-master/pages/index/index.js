//获取应用实例
var app = getApp();

var config = {
    data: {
        disable: false,
        gameList: ['2048', '\u1000sss\u1000','\u1000ccg\u1000']
    },

    onLoad: function() {
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReady: function() {
        // 页面渲染完毕
    },
    onShow: function() {
        // 页面展示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },
    click2048: function () {
      wx.navigateTo({
        url: '../2048/2048'
      })
    }
};


Page(config);
