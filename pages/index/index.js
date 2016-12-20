var app = getApp()
Page({
  data: {
    BeijingUnicomValue: '',
    ShanghaiUnicomValue: '',
    GuangzhouUnicomValue: '',
    BeijingTelecomValue: '',
    ShanghaiTelecomValue: '',
    GuangzhouTelecomValue: '',
    HangzhouTelecomValue: '',
    ZhengzhouTelecomValue: '',
    NanjingTelecomValue: '',
    ShenyangTelecomValue: '',
    ChengduTelecomValue: '',
    BeijingMobileValue: '',
    ShanghaiMobileValue: '', 
    GuangzhouMobileValue: '',
    ShenzhenChangchengValue: '',
    GuangxiTietongValue: '',
    GuangdongTietongValue: '',
    changed1: '',
    changed2: '',
    changed3: '',
    changed4: '',
    changed5: '',
    changed6: '',
    changed7: '',
    changed8: '',
    changed9: '',
    changed10: '',
    changed11: '',
    changed12: '',
    changed13: '',
    changed14: '',
    changed15: '',
    changed16: '',
    changed17: ''
  },
  onLoad: function () {
    var self = this
    this.ref = app.getDataList()
    this.ref.child("/Unicom/Beijing-Unicom").on('value',function(snapshot,prKey){
      clearTimeout(timer1)
      this.setData({
        BeijingUnicomValue:snapshot.val(),
        changed1: 'changed'
      })
      var timer1 = setTimeout(function() {
        self.setData({
          changed1: ''
        })
      },250)
    },this)

    this.ref.child("/Unicom/Shanghai-Unicom").on('value',function(snapshot,prKey){
      clearTimeout(timer2)
      this.setData({
        ShanghaiUnicomValue:snapshot.val(),
        changed2: 'changed'
      })
      var timer2 = setTimeout(function() {
        self.setData({
          changed2: ''
        })
      },250)
    },this)

    this.ref.child("/Unicom/Guangzhou-Unicom").on('value',function(snapshot,prKey){
      clearTimeout(timer3)
      this.setData({
         GuangzhouUnicomValue:snapshot.val(),
         changed3: 'changed'
      })
      var timer3 = setTimeout(function() {
        self.setData({
          changed3: ''
        })
      },250)
    },this)

    // 分割线

    this.ref.child("/Telecom/Beijing-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer4)
      this.setData({
         BeijingTelecomValue:snapshot.val(),
         changed4: 'changed'
      })
      var timer4 = setTimeout(function() {
        self.setData({
          changed4: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Shanghai-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer5)
      this.setData({
         ShanghaiTelecomValue:snapshot.val(),
         changed5: 'changed'
      })
      var timer5 = setTimeout(function() {
        self.setData({
          changed5: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Guangzhou-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer6)
      this.setData({
         GuangzhouTelecomValue:snapshot.val(),
         changed6: 'changed'
      })
      var timer6 = setTimeout(function() {
        self.setData({
          changed6: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Hangzhou-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer7)
      this.setData({
         HangzhouTelecomValue:snapshot.val(),
         changed7: 'changed'
      })
      var timer7 = setTimeout(function() {
        self.setData({
          changed7: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Zhengzhou-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer8)
      this.setData({
         ZhengzhouTelecomValue:snapshot.val(),
         changed8: 'changed'
      })
      var timer8 = setTimeout(function() {
        self.setData({
          changed8: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Nanjing-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer9)
      this.setData({
         NanjingTelecomValue:snapshot.val(),
         changed9: 'changed'
      })
      var timer9 = setTimeout(function() {
        self.setData({
          changed9: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Shenyang-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer10)
      this.setData({
         ShenyangTelecomValue:snapshot.val(),
         changed10: 'changed'
      })
      var timer10 = setTimeout(function() {
        self.setData({
          changed10: ''
        })
      },250)
    },this)

    this.ref.child("/Telecom/Chengdu-Telecom").on('value',function(snapshot,prKey){
      clearTimeout(timer11)
      this.setData({
         ChengduTelecomValue:snapshot.val(),
         changed11: 'changed'
      })
      var timer11 = setTimeout(function() {
        self.setData({
          changed11: ''
        })
      },250)
    },this)

    this.ref.child("/Mobile/Beijing-Mobile").on('value',function(snapshot,prKey){
      clearTimeout(timer12)
      this.setData({
         BeijingMobileValue:snapshot.val(),
         changed12: 'changed'
      })
      var timer12 = setTimeout(function() {
        self.setData({
          changed12: ''
        })
      },250)
    },this)

    this.ref.child("/Mobile/Shanghai-Mobile").on('value',function(snapshot,prKey){
      clearTimeout(timer13)
      this.setData({
         ShanghaiMobileValue:snapshot.val(),
          changed13: 'changed'
      })
      var timer13 = setTimeout(function() {
        self.setData({
          changed13: ''
        })
      },250)
    },this)

    this.ref.child("/Mobile/Guangzhou-Mobile").on('value',function(snapshot,prKey){
      clearTimeout(timer14)
      this.setData({
         GuangzhouMobileValue:snapshot.val(),
          changed14: 'changed'
      })
      var timer14 = setTimeout(function() {
        self.setData({
          changed14: ''
        })
      },250)
    },this)

    this.ref.child("/Other/Shenzhen-Changcheng").on('value',function(snapshot,prKey){
      clearTimeout(timer15)
      this.setData({
         ShenzhenChangchengValue:snapshot.val(),
          changed15: 'changed'
      })
     var timer15 = setTimeout(function() {
        self.setData({
          changed15: ''
        })
      },250)
    },this)

    this.ref.child("/Other/Guangxi-Tietong").on('value',function(snapshot,prKey){
      clearTimeout(timer16)
      this.setData({
        GuangxiTietongValue:snapshot.val(),
         changed16: 'changed'
      })
      var timer16 = setTimeout(function() {
        self.setData({
          changed16: ''
        })
      },250)
    },this)

    this.ref.child("/Other/Guangdong-Tietong").on('value',function(snapshot,prKey){
      clearTimeout(timer17)
      this.setData({
         GuangdongTietongValue:snapshot.val(),
         changed17: 'changed'
      })
      var timer17 =  setTimeout(function() {
        self.setData({
          changed17: ''
        })
      },250)
    },this)

  }, 
})
