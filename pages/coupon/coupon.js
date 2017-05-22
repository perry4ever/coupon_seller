Page({
    data: {
        list: [
            {
                id: 'manjian',
                name: '满100减10',
                time:'2017-3-16-14:23',
                open: false,
            },
            {
                id: 'manzhe',
                name: '满88打7折',
                time:'2017-3-6-18:31',
                open: false,
            },
            {
                id: 'maisong',
                name: '买一送一',
                time:'2017-3-14-23:59',
                open: false,
            },
            {
                id: 'daijin',
                name: '代金8元',
                time:'2017-3-6-18:31',
                open: false,
            },
            {
                id: 'manzhe',
                name: '满50打9折',
                time:'2017-3-6-18:31',
                open: false,
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
