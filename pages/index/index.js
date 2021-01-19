// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  //WIFI
  wifi(){
    wx.navigateTo({
      url: '/pages/wifi/wifi'
    })
  },
  // 健康码
  health(){
    wx.navigateTo({
      url: '/pages/health/health'
    })
  },
  //网上购物
  shoping(){
    wx.navigateTo({
      url: '/pages/shoping/shoping'
    })
  },
  //我在哪儿
  location(){
    wx.navigateTo({
      url: '/pages/location/location'
    })
  },
  //通讯录
  contact(){
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  },
  //紧急联系人
  important(){
    wx.navigateTo({
      url: '/pages/important/important'
    })
  },
  onLoad() {
   
  }
})
