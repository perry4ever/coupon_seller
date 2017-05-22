var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()

Page({
    data: {
        radioItems: [
            {name: '满x减x', value: '0',checked: true},
            {name: '满x打x折', value: '1'},
            {name: '代金x元', value: '2'},
            {name: '买x送x', value: '3'}
        ],
        nowType:0,
        issuingCondition: ["单次消费满x元送", "总消费满x元送", "总消费满x次送"],
        issuingConditionIndex: 0,
        issuingGroup: ["关注本店用户", "全体用户"],
        issuingGroupIndex: 0,

        tabstop: ["使用优惠券", "发行新优惠券"],
        activeIndextop: 1,
        sliderLefttop: 0,
        sliderOffsettop: 0,


        tabs: ["有条件分发", "无条件随机分发", "指定用户分发"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        open : false
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        var i = 0;
        var tmp = 0;
        for (var len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
            if(radioItems[i].checked==true){
                tmp=i;
            }
        }

        this.setData({
            radioItems: radioItems,
            nowType: tmp
        });
    },
    bindIssuingConditionChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            issuingConditionIndex: e.detail.value
        })
    },
    bindIssuingGroupChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            issuingConditionIndex: e.detail.value
        })
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLefttop: (res.windowWidth / that.data.tabstop.length - sliderWidth) / 2,
                    sliderOffsettop: res.windowWidth / that.data.tabstop.length * that.data.activeIndextop
                });

                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClicktop: function (e) {
        this.setData({
            sliderOffsettop: e.currentTarget.offsetLeft,
            activeIndextop: e.currentTarget.id
        });
        console.log(this.data.activeIndextop);
        console.log(this.data.sliderOffsettop);
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
        console.log(this.data.sliderOffset);
        console.log(this.data.activeIndex);
    },
    searchTab: function(event) {
    	wx.navigateTo ({
            url: '../search/search'
        })
    },
    QRcodeTap: function(e){
        wx.scanCode({
          success: function(res){
            // success
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
})