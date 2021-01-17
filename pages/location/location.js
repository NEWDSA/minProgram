Page({

  /**
   * 页面的初始数据
   */
  data: {
    "jindu": "",
    "weidu": "",
    "dizhi": "",
    "mingcheng": "",
    markers: [{
      iconPath: '/icon/logo.png',
      id: 4,
      latitude: 31.938841,
      longitude: 118.799698,
      width: 30,
      height: 30
    }],
    //当前定位位置
    latitude: '',
    longitude: '',
  },
  navigate() {
    ////使用微信内置地图查看标记点位置，并进行导航
    wx.openLocation({
      latitude: this.data.markers[0].latitude, //要去的纬度-地址
      longitude: this.data.markers[0].longitude, //要去的经度-地址
    })
  },
  // huodeweizhi: function () {
  //   var that = this;
  //   wx.getLocation({
  //     success: function (res) {
  //       console.log(res);
  //       that.setData({
  //         jindu: res.latitude,
  //         weidu: res.longitude
  //       })
  //     }
  //   })

  // },
  // chakanweizhi: function (e) {
  //   console.log(e.detail.value.jindu);
  //   wx.openLocation({
  //     latitude: Number(e.detail.value.jindu),
  //     longitude: Number(e.detail.value.weidu)
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
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