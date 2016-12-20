var wilddog = require('wilddog-weapp-all')
App({
  onLaunch: function () {
    var config = {
      syncURL: 'https://ping-value.wilddogio.com',
      authDomain: 'ping-value.wilddog.com'
    }
    wilddog.initializeApp(config)
    let authauth=wilddog.auth();
    wilddog.auth().signInWeapp().then(function(user){
      console.log(user);
    }).catch(function(err){
      console.log("err:"+JSON.stringify(err));
    })
    this.ref = wilddog.sync().ref('/')
  },
  getDataList: function() {
    return this.ref.child('BJNY-IDC')
  }
})