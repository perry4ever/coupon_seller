Page({
    data: {
        name: '该券持有人',
        openValue: false,
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
    kindToggle: function (e) {
        var openV=this.data.openValue;
        console.log(openV);
        
        this.setData({
            openValue: !openV
        });
        console.log(this.data.openValue);
    }
});
