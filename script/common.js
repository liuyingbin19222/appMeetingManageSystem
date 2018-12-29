
  var srchttp = "http://120.78.213.231:8080";
  function timetostamp(mydate){
    var date = new Date(mydate);
    return date.getTime();//日期转时间戳;
  };
  //时间戳转换为日期;
  function add0(m){return m<10?'0'+m:m }
  function stampformat(shijianchuo)
  {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      return y+'-'+m+'-'+d+' '+h+':'+mm;
  };
  function stampformatDate(stamp){
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(stamp);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    return y+'-'+m+'-'+d;
  };

  //获取当前时间;
  function getNow(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    return year + " " + month + " " + strDate;
  }

  function ajax({
    url,
    method,
    data,
    headers
  }) {
    return new Promise((resolve, reject) => {
      api.ajax({
          url,
          method,
          data,
          headers
      },function(ret, err){
          if (ret) {
              resolve(ret)
          } else {
              reject(err)
          }
      });

    })
  }
  function getAuthorization(){
    if(api.getGlobalData({key:"status"}) == ""){
      alert("未登录，请登录");
      api.openWin({
          name: 'login',
          url: '../html/login.html',
      });

    }else {
      return 1;
    }
  };
  function getBar(){
    var tabBar = api.require('tabBar');
    tabBar.open({
        bgImg: 'widget://res/img/bg.png',
        items: [{
            title: '标题一',
            img: 'widget://res/img/ic/item.png',
        }, {
            title: '标题二',
            img: 'widget://res/img/ic/item.png',
        }, {
            title: '标题三',
            img: 'widget://res/img/ic/item.png',
        }],
        fixedOn: api.frameName
    }, function(ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
        } else {
            alert(JSON.stringify(err));
        }
    });
  }
