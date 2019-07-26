// pages/test/test.js
var flag = true;
var colorjs;
var valuejs;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 它不是page生命周期函数 其实他是个变量的数组，这个里面申请的变量都可以在 wxml中使用
    colorwxml:"window"
  },
  click:function(){
    console.log("点击了");
    if (flag) {
      colorjs = "window-red";
      flag = false;
    } else {
      colorjs = "window";
      flag = true;
    }
    valuejs = colorjs
    this.setData({
      //this.setData()方法将值同步给wxml 让它立即生效
      colorwxml: colorjs,
      valuewxml:valuejs
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})