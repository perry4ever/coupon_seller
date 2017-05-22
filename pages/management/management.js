var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()

Page({
    data: {
        tabs: ["商品/服务管理", "优惠券管理"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        open : false,
        goodslist: [
            {
                id: '3',
                name: '大份黄焖鸡',
                price:'￥16',
            },
            {
                id: '2',
                name: '照烧鸡排饭',
                price:'￥16',
            },
            {
                id: '1',
                name: '超辣麻辣烫大份',
                price:'￥16',
            },
            {
                id: '4',
                name: '黑椒猪排饭',
                price:'￥16',
            },
            {
                id: '5',
                name: '黑椒牛柳饭',
                price:'￥16',
            }
        ],
        couponlist: [
            {
                id: '3',
                name: '满100减10',
                time:'2017-3-16-14:23',
                open: false,
                info: [{'name':'优惠券发行总数','detail':'100'}, {'name':'已发出总数','detail':'59'}, {'name':'优惠券ID范围','detail':'1~100'},{'name':'送券条件','detail':'单次消费满100元'}]
            },
            {
                id: '2',
                name: '满60打八折',
                time:'2017-3-6-18:31',
                open: false,
                info: [{'name':'优惠券发行总数','detail':'100'}, {'name':'已发出总数','detail':'59'}, {'name':'优惠券ID范围','detail':'1~100'},{'name':'送券条件','detail':'单次消费满100元'}]
            },
            {
                id: '1',
                name: '买二送一',
                time:'2017-3-14-23:59',
                open: false,
                info: [{'name':'优惠券发行总数','detail':'100'}, {'name':'已发出总数','detail':'59'}, {'name':'优惠券ID范围','detail':'1~100'},{'name':'送券条件','detail':'单次消费满100元'}]
            },
            {
                id: '4',
                name: '满50减5',
                time:'2017-3-6-18:31',
                open: false,
                info: [{'name':'优惠券发行总数','detail':'100'}, {'name':'已发出总数','detail':'59'}, {'name':'优惠券ID范围','detail':'1~100'},{'name':'送券条件','detail':'单次消费满100元'}]
            }
        ]
    },
    tap_ch: function(e){
        if(this.data.open){
            this.setData({
            open : false
            });
        }else{
            this.setData({
            open : true
            });
        }
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    tapAdd: function() {
    	wx.navigateTo ({
            url: '../goods/addNew/addNew'
        })
    },
    tapAddC: function() {
    	wx.navigateTo ({
            url: '../coupon/addNew/addNew'
        })
    },
    onTapEdit: function() {
    	wx.navigateTo ({
            url: '../goods/edit/edit'
        })
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.couponlist;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            couponlist: list
        });
    }
})
