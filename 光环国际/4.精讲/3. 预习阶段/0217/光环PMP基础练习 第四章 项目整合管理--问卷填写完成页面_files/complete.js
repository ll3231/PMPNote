function replaceImg(a){var b="http://pubimageqiniu.paperol.cn",c="//pubnewfr.paperol.cn";0==a.src.indexOf("http://pubssl.sojump.com")||0==a.src.indexOf("https://pubssl.sojump.com")||0==a.src.indexOf("http://pubimage.sojump.com")||0==a.src.indexOf("http://pubimage.sojump.cn")||0==a.src.indexOf("http://pubssl.sojump.cn")?a.src=a.src.replace("http://pubssl.sojump.com",b).replace("https://pubssl.sojump.com",b).replace("http://pubimage.sojump.com",b).replace("http://pubimage.sojump.cn",b).replace("http://pubssl.sojump.cn",b):(0==a.src.indexOf("http://pubalifr.sojump.com")||0==a.src.indexOf("https://pubalifr.sojump.com")||0==a.src.indexOf("https://pubali.sojump.com")||0==a.src.indexOf("http://pubali.sojump.com")||0==a.src.indexOf("http://pubali.sojump.cn")||0==a.src.indexOf("http://pubalifr.sojump.cn")||0==a.src.indexOf("https://pubali.sojump.cn")||0==a.src.indexOf("https://pubalifr.sojump.cn"))&&(a.src=a.src.replace("http://pubalifr.sojump.com",c).replace("https://pubalifr.sojump.com",c).replace("http://pubali.sojump.com",c).replace("https://pubali.sojump.com",c).replace("http://pubali.sojump.cn",c).replace("https://pubali.sojump.cn",c).replace("http://pubalifr.sojump.cn",c).replace("https://pubalifr.sojump.cn",c))}function getbxactivity(a,b){var c=document.getElementById("hrefAward"),d="1"==c.getAttribute("hp")?"1":"0",e="/joinnew/statsample.ashx?activity="+a+"&hp="+d+"&cc=1&t="+(new Date).valueOf(),f=getXmlHttp();return f.onreadystatechange=function(){4==f.readyState&&(window.location.href=b)},f.open("get",e),f.send(null),!0}function closeAlert(){var a=document.getElementById("alert_box");a.style.display="none",a.callback&&a.callback()}function alertNew(a,b){var c=document.getElementById("alert_box");c?document.getElementById("pop_box_msg").innerHTML=a:(c=document.createElement("div"),c.id="alert_box",alertHtml="<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='min-height: 160px;width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:4px;'><div style='font-size:18px;color:#000;font-weight:600;padding: 26px 0px 10px;width:100%;text-align:center;border-radius:8px 8px 0 0;vertical-align: middle;z-index: 1;'><div>系统提示</div></div><div style='width: 100%;border-radius: 0 0 8px 8px; z-index: 1;'><div style='min-height: 50px;padding:6px 10px 10px;font-size: 15px;line-height: 22px;text-align: center;' id='pop_box_msg'>"+a+"</div>"+"<div style='width:100%;height: 50px;text-align:center;border-top:1px solid #D2D3D5;'><button style='display:inline-block;width:100%;font-size:18px;height:50px;box-sizing:border-box;line-height:50px;color:#3296FA;text-align: center;text-decoration: none;border: none;background: none;outline:none;cursor:pointer;' onclick='closeAlert();'>确定</button></div>"+"</div></div>",c.innerHTML=alertHtml,document.body.appendChild(c)),c.style.display="",c.callback=b||""}function addtolog(a){var k,l,m,n,o,p,b=document.createElement("img"),c=window.activity,d=window.joinactivity,e=window.isVip?1:0,f=window.cqType||0,g=1,h=0,i=window.isrejoin||0,j=window.jclacount||0;for(window.divAward?(h=1,window.divPromoteComplete&&(h=5)):window.divPromoteComplete&&(h=3),k=0,l=awardData.split("§"),m=0;m<l.length;m++)n=l[m].split("〒"),n.length<2||(o=n[1].split(","),n[2]&&o[1]&&parseInt(o[1])==o[1]&&(k=parseInt(o[1])));p="activitydata",b.src="//sojump.cn-hangzhou.log.aliyuncs.com/logstores/"+p+"/track.gif?APIVersion=0.6.0&t="+a+"&a="+c+"&j="+d+"&i="+e+"&q="+f+"&s="+g+"&w="+h+"&d="+k+"&r="+i+"&c="+j}function getXmlHttp(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new XMLHttpRequest}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}}return a}function gethongbaoaward(a){return window.hja?(alertNew("很抱歉，您已经参与过此问卷的抽奖！"),void 0):(document.getElementById("startCJ").innerHTML="抽奖中 <img style='width:20px' src='/Images/WJX/award/loading.gif'>",setTimeout(function(){var b="/joinnew/joinhbactivitymobo.ashx?t="+(new Date).valueOf()+"&iwxh=1&activity="+activity+"&joinactivity="+a+"&v="+(window.isAValid||""),c=new XMLHttpRequest;c.open("get",b),c.send(),c.onreadystatechange=function(){var b,d,e;if(4==c.readyState&&200==c.status){if(document.getElementById("startCJ").innerHTML="点击抽奖",b="awardhb_"+activity,d=new Date,d.setHours(d.getHours()+48),setCookie(b,"1",d.toGMTString(),"/","",null),e=c.responseText,-2==e)return alertNew("提示：不能重复抽取！"),void 0;dspAward(e,activity,a)}}},3e3),void 0)}function setCookie(a,b,c,d,e,f){document.cookie=a+"="+escape(b)+(c?"; expires="+c:"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(f?"; secure":"")}function dspAward(a,b,c){var d,e;if(window.hja=1,"1"==a)d="/mobile/getred.aspx?activity="+b+"&joinactivity="+c+"&rurl="+encodeURIComponent(rurl),window.jidx&&(d+="&jidx="+jidx),PDF_launch(d,400,550);else{if(window.rurl)return alertNew("很抱歉，您未抽中红包，感谢您的参与！"),window.location=rurl,void 0;e=document.getElementById("noGetAwardWrap"),e.innerHTML=' <div class="noGetAward" style="text-align:center;"><div style="font-size:24px;color:#F34637;margin:60px 0 94px;position:relative"><img class="leftYh" src="/Images/mobile/ShapeCopy@2x.png" alt="" />很抱歉，您未抽中红包<img class="rightYh" src="/Images/mobile/Shape@2x.png" alt="" /></div><img style="width:227px;" src="/Images/WJX/award/nogetaward.png" alt="" /></div>',PDF_launch("noGetAwardWrap",400,496)}}function postHeight(){if(window!=window.top)try{var a=parent.postMessage?parent:parent.document.postMessage?parent.document:null;null!=a&&a.postMessage("heightChanged,"+((document.documentElement.scrollHeight||document.body.scrollHeight)+50),"*")}catch(b){}}window.onload=function(){var a,b,c;for(addtolog(1),a=document.getElementsByTagName("img"),b=0;b<a.length;b++)a[b].onerror=function(){this.onerror=null,replaceImg(this)},replaceImg(a[b]);if(isNewUser&&window._czc&&(2==isNewUser?_czc.push(["_trackEvent","电脑端本地问卷","新用户","完成"]):_czc.push(["_trackEvent","电脑端本地问卷","老用户","完成"])),c=document.getElementById("divTab"),window.top!=window&&c&&c.scrollIntoView)try{c.scrollIntoView()}catch(d){}postHeight()};