/** layuiAdmin.pro-v1.0.0-beta7 LPPL License By http://www.layui.com/admin/ */
 ;function Trim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function sortNumber(e,t){return e-t}function duplicateRemoval(e){for(var t=[],n=0;n<e.length;n++)t.indexOf(e[n])==-1&&t.push(e[n]);return t}function getCopy(e){var t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInput",t.style.display="none"}Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t){var r=t[n];new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?r:("00"+r).substr((""+r).length)))}return e};