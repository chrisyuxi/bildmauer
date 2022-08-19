/*************************/
/*功能*/
/*作者:eveningwater*/
/*日期:2017/1/11*/
/*************************/
/*全局变量定义部分可根据img文件夹进行调整*/
var imgobj = [
	{
		src:"img/1.jpg",
		name:"1",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/2.jpg",
		name:"2",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/3.jpg",
		name:"3",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/4.jpg",
		name:"4",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/5.jpg",
		name:"5",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/6.jpg",
		name:"6",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/7.jpg",
		name:"7",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/8.jpg",
		name:"8",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/9.jpg",
		name:"9",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/10.jpg",
		name:"10",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/11.jpg",
		name:"11",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/12.jpg",
		name:"12",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/13.jpg",
		name:"13",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/14.jpg",
		name:"14",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/15.jpg",
		name:"15",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	},
	{
		src:"img/16.jpg",
		name:"16",
		data_title:"一只猫的自述",
		data_content:"墙角数只猫，凌寒独自跑。遥知不是雪，唯有猫影俏。"
	}
]
var count = 0;
/*函数定义部分*/
window.onload = function(){
	imgChange();
	//获取button
	var changebtn = document.getElementsByClassName("changebtn")[0];
	changebtn.onclick = function(){
		imgChange();
	}
}
function imgChange(){
    //定义数组对象长度
    var img_len = imgobj.length,
        a = document.getElementsByClassName("img"),
        a_len = a.length;
    for(var i = 0; i < a_len; i++,count++){
    	var r=Math.round((Math.random(count))*(img_len -1));
        a[i].style.backgroundImage = "url("+imgobj[r].src+")";
        a[i].setAttribute("data-title",imgobj[r].data_title);
        a[i].setAttribute("data-content",imgobj[r].data_content);
        a[i].index = i;
        a[i].onclick = function(){
            var bgSrc = getCss(this,'background-image');
            preview(bgSrc.slice(bgSrc.indexOf('(') + 2,bgSrc.lastIndexOf(')') - 1),600);
        }
    }
}
function preview(src, time) {
    var img = document.createElement('img'), imgMask = document.createElement('div');
    imgMask.style.cssText += 'position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;';
    img.style.cssText += 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:auto;height:auto;border-radius:5px;';
    imgMask.id = 'previewMask';
    img.src = src;
    imgMask.appendChild(img);
    var mask = document.getElementById('previewMask');
    if(!mask){
        document.body.appendChild(imgMask);
        ani.fadeIn(imgMask, time);
    }else{
        document.body.replaceChild(imgMask,mask);
        ani.fadeIn(imgMask, time);
    }
    imgMask.addEventListener('click', function (e) {
        var el = e.target.tagName.toLowerCase().indexOf('img') > -1 ? e.target.parentElement : e.target;
        ani.fadeOut(el, time);
    }, false)
}
function getCss(el, prop) {
    var getStyle = el.currentStyle ? function (prop) {
        var propName = el.currentStyle[prop];
        if (propName.indexOf('height') > -1 && propName.search(/px/i) > -1) {
            var rect = el.getBoundingClientRect;
            return rect.bottom - rect.top - parseInt(getStyle('padding-bottom')) - parseInt(getStyle('padding-top')) + 'px';
        }
    } : function (prop) {
        return window.getComputedStyle(el, null)[prop];
    };
    return getStyle(prop);
};
var ani = (function () {
    var animation = {};
    function TimerManager() {
        this.timers = [];
        this.args = [];
        this.isTimerRun = false;
    }
    TimerManager.makeTimerManage = function (element) {
        if (
            !element.TimerManage ||
            element.TimerManage.constructor !== TimerManager
        ) {
            element.TimerManage = new TimerManager();
        }
    };
    TimerManager.prototype.add = function (timer, args) {
        this.timers.push(timer);
        this.args.push(args);
        this.timerRun();
    };
    TimerManager.prototype.timerRun = function () {
        if (!this.isTimerRun) {
            var timer = this.timers.shift(),
                args = this.args.shift();
            if (timer && args) {
                this.isTimerRun = true;
                timer(args[0], args[1]);
            }
        }
    };
    TimerManager.prototype.next = function () {
        this.isTimerRun = false;
        this.timerRun();
    };
    function slideUp(element, time) {
        if (element.offsetHeight > 0) {
            var totalHeight = element.offsetHeight;
            var currentHeight = totalHeight;
            var reduceValue = totalHeight / (time / 10);
            element.style.transition = "height " + time + " ms";
            element.style.overflow = "hidden";
            var timer = setInterval(function () {
                currentHeight -= reduceValue;
                element.style.height = currentHeight + "px";
                if (currentHeight <= 0) {
                    clearInterval(timer);
                    element.style.display = "none";
                    element.style.height = totalHeight + "px";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function slideDown(element, time) {
        if (element.offsetHeight <= 0) {
            element.style.display = "block";
            element.style.transition = "height" + time + " ms";
            element.style.overflow = "hidden";
            var totalHeight = element.offsetHeight;
            var currentHeight = 0;
            element.style.height = "0px";
            var addValue = totalHeight / (time / 10);
            var timer = setInterval(function () {
                currentHeight += addValue;
                element.style.height = currentHeight + "px";
                if (currentHeight >= totalHeight) {
                    clearInterval(timer);
                    element.style.height = totalHeight + "px";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function fadeIn(element, time) {
        element.style.transition = "opacity" + time + " ms";
        if (!getCss(element, 'opactiy') || !parseInt(getCss(element, 'opactiy')) <= 0) {
            element.style.display = "none";
            let curAlpha = 0;
            element.style.opacity = 0;
            let addAlpha = 1 * 100 / (time / 10);
            var timer = setInterval(function () {
                curAlpha += addAlpha;
                element.style.display = "block";
                element.style.opacity = (curAlpha / 100).toFixed(2);
                if (curAlpha >= 100) {
                    clearInterval(timer);
                    element.style.opacity = 1;
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function fadeOut(element, time) {
        element.style.transition = "opacity" + time + " ms";
        if (!getCss(element, 'opactiy') || !parseInt(getCss(element, 'opactiy')) >= 1) {
            let curAlpha = 100;
            element.style.opacity = 1;
            element.style.display = "block";
            let reduceAlpha = 1 * 100 / (time / 10);
            var timer = setInterval(function () {
                curAlpha -= reduceAlpha;
                element.style.opacity = (curAlpha / 100).toFixed(2);
                if (curAlpha <= 0) {
                    clearInterval(timer);
                    element.style.opacity = 0;
                    element.style.display = "none";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    animation.slideUp = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideUp, arguments);
        return this;
    };
    animation.slideDown = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideDown, arguments);
        return this;
    };
    animation.fadeIn = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(fadeIn, arguments);
        return this;
    };
    animation.fadeOut = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(fadeOut, arguments);
        return this;
    };
    return animation;
})();