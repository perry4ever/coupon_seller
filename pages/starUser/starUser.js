// pages/starUser/starUser.js
Page({
  data:{
    openValue: true,
    pages:[
      {
          userName:'张三',
          en:'manjian'
      },
      {
          userName:'李四',
          en:'manzhe'
      },
      {
          userName:'王五',
          en:'maisong'
      },
      {
          userName:'赵六',
          en:'daijin'
      }
    ]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})