// 0 引入 用来发送请求的 方法 一定要把这个路径补全
import {
  request
} from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catesList: [],
    // 楼层数据
    floorList: []
  },
  // 事件处理函数

  onLoad: function (options) {
    this.getSwiperList();
    this.getCatelist();
    this.getFloorlist();

  },
  // 获取轮播图数据
  getSwiperList() {
    request({
        url: "/home/swiperdata"
      })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })
  },
  // 获取分类导航数据
  getCatelist() {
    request({
        url: "/home/catitems"
      })
      .then(result => {
        this.setData({

          catesList: result
        })
      })
  },
  // 获取楼层数据
  getFloorlist() {
    request({
        url: "/home/floordata"
      })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  }
})