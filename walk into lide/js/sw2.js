$(document).ready(function() {
  var length = $(".content_01").children(".box1").length;//ç›’å­ä¸ªæ•°
  var boxWidth = $(".bigbox1").width() / 2;//è§†çª—å®½åº¦é™¤ä»¥4èŽ·å¾—ç§»åŠ¨å®½åº¦
  var virtual = length * boxWidth;	//åˆ‡æ¢çš„ä¸´ç•Œç‚¹
  var speed = 500;	//ç§»åŠ¨é€Ÿåº¦ï¼Œé€Ÿåº¦å»ºè®®è¦å°äºŽé—´éš”æ—¶é—´çš„ä¸€åŠã€‚
  var time =4000;	//é—´éš”æ—¶é—´
  $(".box1").width(boxWidth-3);

  var Item = $('#switcher1'); //è¦ç§»åŠ¨çš„å…ƒç´ 
  Item.css({ position: 'relative' }); //è®¾ç½®position
  var move = boxWidth + 'px'; //ç§»åŠ¨çš„èŒƒå›´ï¼Œæ˜¯ä¸€ä¸ªboxçš„å®½åº¦ã€‚
  var leftCriticalPoint = "-" + virtual + "px"; //æœ‰nä¸ªç›’å­ï¼Œå°±ä»¥nä¸ªç›’å­çš„é•¿åº¦ä½œä¸ºè·³è·ƒç‚¹

  var flag = true;//ç‚¹å‡»å…è®¸

  scrollContentStructure(length);

  function scrollContentStructure(length) {
    if(length < 2) {
      $('#switcher1').width(boxWidth * (length + 4)); //è§†çª—å®½åº¦ æ¡çŠ¶ä½“l+4ï¼Œè¡¥ä½“6-lï¼›å‡è®¾l=3ï¼Œæ¡çŠ¶ä½“7.è¡¥ä½“3
      if(length != 0) {
        var content_1 = $(".content_01").html();
        for(var i = 0; i < 4 - length; i++) {
          $(".content_01").append(content_1); //æœ€å°‘6ä¸ªç›’å­ï¼Œè¡¥å¤Ÿ
        }
      }
    } else {
      $('#switcher1').width(virtual * 2);
      $(".content_02").html($(".content_01").html()); //å¤åˆ¶
    }
  }

  if(length != 0) {
    var callback = setInterval(moving, time);
  }

  function moving() {
    flag = false;
    if(Item[0].style.left == leftCriticalPoint) {
      Item[0].style.left = "0px";
    }
    Item.animate({ left: '-=' + move }, speed, function() {
      if(Item[0].style.left == leftCriticalPoint) {
        Item[0].style.left = "0px";
      }
    });
    flag = true;
  }

  $("li").click(function() {
    //å½“å‰å¤„äºŽåŠ¨ç”»çŠ¶æ€åŠå¯ç‚¹å‡»çŠ¶æ€åˆ¤æ–­
    //æ ‡å¿—ä½é˜²æ­¢äº‹ä»¶æ ˆç§¯ç´¯ï¼Œ
    if(!Item.is(":animated") && flag) {
      var left = Item[0].style.left;
      clearInterval(callback);

      if($(this).index() == 1) {
        if(left == leftCriticalPoint) {
          Item[0].style.left = "0px";
        }
        Item.animate({ left: '-=' + move }, speed, function() {
          if(Item[0].style.left == leftCriticalPoint) {
            Item[0].style.left = "0px";
          }
          callback = setInterval(moving, time);
        });
        // console.log("å³");
      } else if($(this).index() == 0) {
        if(isNaN(parseInt(left)) || left == "0px") {
          Item[0].style.left = leftCriticalPoint;
        }
        Item.animate({ left: '+=' + move }, speed, function() {
          if(Item[0].style.left == "0px") {
            Item[0].style.left = leftCriticalPoint;
          }
          callback = setInterval(moving, time);
        });
        // console.log("å·¦");
      }
    }
  });

})
