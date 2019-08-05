// pages/activity/activity.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabactive:0, // 活动，资讯
    activitylist:[
      { title: "标题", subtitle: "副标题", thumburl:"https://www.baidu.com/img/bd_logo1.png"},
    ]

  },
  onTabChange: function(event) {

  },
  cardtap:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})