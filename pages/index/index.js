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
    wx.redirectTo({
      url: '/pages/wifi/wifi'
    })
  },
  // 健康码
  health(){
    wx.redirectTo({
      url: '/pages/health/health'
    })
  },
  //网上购物
  shoping(){
    wx.redirectTo({
      url: '/pages/shoping/shoping'
    })
  },
  //我在哪儿
  location(){
    wx.redirectTo({
      url: '/pages/location/location'
    })
  },
  //通讯录
  contact(){
    wx.redirectTo({
      url: '/pages/contact/contact'
    })
    // 打开手机通讯录
    // wx.makePhoneCall({
    //   phoneNumber: '15819494176',
    // })
  },
  //紧急联系人
  important(){
    wx.redirectTo({
      url: '/pages/important/important'
    })
  },
  onLoad() {
   
  }
})
