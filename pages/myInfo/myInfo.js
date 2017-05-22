const App = getApp()

Page({
	data: {
		userInfo: {},
		items: [
			{
				icon: '../../images/Ui_Image_coupon_slcted.png',
				text: '历史订单',
				path: '../orderList/orderList',
			}, 
			{
				icon: '../../images/Ui_Image_starUser.png',
				text: '关注本店用户列表',
				path: '../starUser/starUser',
			}, 
			{
				icon: '../../images/Ui_Image_order_slcted.png',
				text: '客户评论',
				path: '../comment/comment'
			},
			{
				icon: '../../images/Ui_Image_kefu.png',
				text: '联系客服',
				path: '15501101582',
			}, 
			{
				icon: '../../images/Ui_Image_help.png',
				text: '常见问题',
				path: '../problems/problems',
			},
		],
		settings: [
			{
				icon: '../../images/Ui_Image_clear.png',
				text: '清除缓存',
				path: '5956.23KB'
			}, 
			{
				icon: '../../images/Ui_Image_about_slcted.png',
				text: '关于我们',
				path: '../aboutUs/aboutUs'
			}, 
		]
	},
	onLoad() {

	},
	onShow() {

	}
})