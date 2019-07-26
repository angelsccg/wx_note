var localDataUtil = require('../../utils/localDataUtil.js');
var reportJson = require('../../data/parse/json/reportJson.js');
Page({
  data: {
    reportList: []
  },
  onLoad: function () {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("=============onLoad");
    this.requestNetwork();
    this.setData({
      //this.setData()方法将值同步给wxml 让它立即生效
    });

  },
  onReady: function () {
    // 页面渲染完成
    console.log("=============onReady");
  },
  onShow: function () {
    // 页面显示
    console.log("=============onShow");

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function () {
    //页面相关事件处理函数--监听用户下拉动作
  },
  //下拉刷新
  onPullDownRefresh:function(){
    console.log("reportList-->onPullDownRefresh");
    // wx.stopPullDownRefresh()
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.requestNetwork();
  },


  //网络请求
  requestNetwork: function () {
    var _this = this;
    // wx.request({
    //   // url: 'http://sizhen.shinoa.cn:18091/SIZHEN/report/getReportList?app_version=1.0.4&app_type=1', //仅为示例，并非真实的接口地址
    //   url: 'https://www.baidu.com',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
    wx.request({
      url: 'https://liaolongjun.duapp.com/ace/https.do',
      data: { cur: 1 },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (json) {
        // console.log("http-->json:" + json.data);
        var reportListData = localDataUtil.getReportListData;
        var reportArray = reportJson.reportArray(reportListData);
        console.log("http-->json:" + reportArray);
        //停止刷新
        //模拟加载
        setTimeout(function () {
          // complete
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
        }, 1500);
        _this.setData({
          reportList: reportArray,
          reportList_length: reportArray.length
        });
        
        // wx.showModal({
        //   title: '提示',
        //   content: JSON.stringify(json.data),
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     }
        //   }
        // })
      }
    })
  }

});
