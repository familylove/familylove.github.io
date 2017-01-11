/** 技术支持 app吾爱 QQ:1430566311  旺旺：hcc511306835  2016*/
jQuery.fn.app52Map2 = function(app52madData){
	var D = this; 
		D.madData = app52madData;	 
		D._$app52Map = this;		 
		D._transitRoute = null;
		//D._$mapBox = $('<div id="' + D._mapID + '" class="baiduMap"></div>');
		D._$mapBox = $('<div class="c-singlemap-cardBox z-show"><ul style="width: 100%; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); -webkit-transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; -webkit-transition-duration: 0ms; transform: translate(-15px, 0px) translateZ(0px);"><li class="c-singlemap-card"><h2>'+D.madData.title+'</h2><p>'+D.madData.tel+'</p><p>'+D.madData.address+'</p><div class="c-singlemap-btnBox f-fix"><a class="c-singlemap-btnCallTel first" href="tel:'+D.madData.tel+'"><img src="http://staticeng.liveapp.cn/tpl/components/map/singlemap/front/img/phone.png">打电话</a><a href="http://api.map.baidu.com/marker?location='+D.madData.lat+','+D.madData.lng+'&title='+D.madData.title+'&content='+D.madData.address+'&output=html" class="c-singlemap-btnShowMap" ><img src="http://staticeng.liveapp.cn/tpl/components/map/singlemap/front/img/navigation.png">导航</a></div><img class="close-icon closeMap" src="http://staticeng.liveapp.cn/tpl/components/map/singlemap/front/img/close.png"></li></ul></div>');
		D.__navigationButtonsID = Math.random().toString(32).replace("0.", "box_");
		D._$app52Map.append(D._$mapBox);
		D._$app52Map.delegate(".closeMap", "click", function(H) {
			/*H.preventDefault();*/
			D._$app52Map.animate({
				"top": 800
			});
			setTimeout(function() {
				D._$app52Map.remove()
			}, 500)
		});
		D._$app52Map.delegate(".c-singlemap-card h2", "click", function(H) {
			/*H.preventDefault();*/
			D._$app52Map.animate({
				"top": 800
			});
			setTimeout(function() {
				D._$app52Map.remove()
			}, 500)
		});
		D._$app52Map.on("mousedown mousemove mouseup touchstart touchmove touchend", function(H) {
			H.stopPropagation()
		})
};
 