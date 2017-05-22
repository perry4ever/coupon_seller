const App = getApp()

Page({
    btnTab: function(event) {
    	wx.switchTab ({
            url: '../index/index'
        })
    }
})