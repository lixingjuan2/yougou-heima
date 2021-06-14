Page({
  data: {
    userinfo: {},
    // 被收藏的商品数量名称
    collectNum: 0
  },
  onShow(){
    const userinfo = wx.getStorageSync('userinfo');
    const collect = wx.getStorageSync('collect') || [];
    this.setData({userinfo, collectNums: collect.length});
  }
})