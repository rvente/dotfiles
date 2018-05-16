function openCombo(e,t,o,i){i=i||document;var n=i.getElementById(t);if(!n.disabled){gComboEx=i.getElementById(o);var l=gComboEx;"block"==l.style.display?(setStyle(l,"display","none",""),gItemNum=-1):(showCombo(n,l,null,i),gItemNum=-1),gFocusItem=n;("undefined"!=typeof window?window:i.defaultView).setTimeout(function(){doFocus()},0)}}function showCombo(e,t,o,i){if(i=i||document,g_iField=e,g_cb=t,null!=e){var n=getComboButtonId(e.id);g_combobox_button=i.getElementById(n),void 0!==e.addEventListener?e.addEventListener("move",function(e){realShowCombo(i)},!1):e.attachEvent("onmove",function(e){realShowCombo(i)})}realShowCombo(i)}function getY(e){for(var t=0;null!=e;)t+=e.offsetTop,e=e.offsetParent;return t}function getX(e){for(var t=0;null!=e;)t+=e.offsetLeft,e=e.offsetParent;return t}function realShowCombo(e){null==e&&(e=document);var t=getY(g_iField),o=getX(g_iField),i=t+g_iField.offsetHeight+"px",n=o+"px";g_cb.style.minWidth=g_iField.offsetWidth-14+"px",setStyle(g_cb,"top",i,""),setStyle(g_cb,"left",n,""),setStyle(g_cb,"display","block",""),g_combobox_button&&setStyle(g_combobox_button,"display","","");var l=LP_getAbsolutePos(e,g_iField);if(null!=l&&l.left>0){var d="undefined"!=typeof window&&void 0!==window.setTimeout?window:e.defaultView,s=d.innerWidth;null==s&&"undefined"!=typeof getWindowWidth&&(s=getWindowWidth(d)),null!=s&&s>0&&(g_cb.style.maxWidth=parseInt(s)-parseInt(l.left)-16+"px",parseInt(g_cb.style.maxWidth)<parseInt(g_cb.style.minWidth)&&(g_cb.style.minWidth=g_cb.style.maxWidth))}}function focusCombo(e,t,o){if(e||(e=window.event),e){var i=e.keyCode;if("undefined"!=typeof TABKEY&&(i==TABKEY||i==SHIFTKEY)){var n="undefined"!=typeof document&&document.location?document.location.href:"";if(n.indexOf("popupfilltab.html")!=-1||n.indexOf("#framesrc=LPMAGIC")!=-1)return tabfocuser(e),!1}var l="undefined"!=typeof document?document:e.view.document,i=e.keyCode,d=!0;gComboEx=l.getElementById(o);var s=gComboEx;if(i==KEY_DOWN||i==KEY_F4){d=!1;"block"==s.getAttribute("style.display")||showCombo(t,s,null,l);for(var r=s.childNodes,a=r.length,u=0;null!=r[u]&&u<a;){if(r[u].nodeType==ELEMENT_NODE&&"item"==r[u].className&&"none"!=r[u].style.display){gFocusItem=r[u];break}u++}gItemNum=u,u>=a&&(gItemNum=0),setTimeout(function(){doFocus()},0),d=!1}else i==KEY_ENTER||i==KEY_ESCAPE&&(null!=t.val&&t.val.length>0?d=!0:(d=!1,setStyle(gComboEx,"display","none",""),gItemNum=-1));return d}}function focusItem(e,t,o){for(var i=o.val,n=null,l=getItems(t),d=l.length,s=!1,r=0;r<d;r++)if(l[r].hasChildNodes()&&l[r].firstChild.nodeValue==i){s=!0,n=l[r],gItemNum=r;break}if(s||(n=addItem(t,i,l.length),gItemNum=l.length),null!=n){if(gFocusItem=n,"block"!=gComboEx.getAttribute("style.display")){var a=o.offsetTop+o.offsetHeight+"px",u=o.offsetLeft+"px";setStyle(t,"top",a,""),setStyle(t,"left",u,"")}else setStyle(t,"display","none","");setStyle(t,"display","block",""),setTimeout(function(){doFocus()},0)}}function addItem(e,t,o,i){i||(i=document);var n=i.createElement("div"),l=void 0!==t.label?t.label:t,d=void 0!==t.label?t.value:t;if(n.val=d,n.label=l,void 0!==t.label&&(n.label=t.label,void 0!==t.image)){var s=i.createElement("img");s.src=t.image,s.style.paddingRight="15px",n.appendChild(s),n.img=s.src}var r=i.createTextNode(l),a=n;return n.appendChild(r),n.setAttribute("tabindex","-1"),n.setAttribute("class","item"),n.setAttribute("data-lpcount",o),void 0!==n.addEventListener?(n.addEventListener("click",function(){gItemNum=this.getAttribute("data-lpcount")}),n.addEventListener("mouseover",function(){gFocusItem=this,doFocus()})):(n.attachEvent("onclick",function(){gItemNum=a.getAttribute("data-lpcount")}),n.attachEvent("onmouseover",function(){gFocusItem=a,doFocus()})),n.setAttribute("role","listitem"),n.setAttribute("origText",ofa(l)),e.appendChild(n),n}function doComboNav(e,t,o,i){if(e||(e=window.event),e){var n=e.keyCode,l=!0;if(null==gComboEx&&(gComboEx=t),n==KEY_UP||n==KEY_DOWN){l=!1;var d=0,s=getItems(gComboEx),r=s.length;if(n==KEY_UP)for(d=gItemNum-1;d>=0&&"none"==s[d].style.display;)"none"==s[d].style.display&&d--;else{for(d=gItemNum+1,d==r&&(d=-1);d>=0&&d<r&&"none"==s[d].style.display;)"none"==s[d].style.display&&d++;d==r&&(d=-1)}gItemNum=d,gFocusItem=gItemNum==-1?i.getElementById(o):s[d],setTimeout(function(){doFocus()},0)}else if(n==KEY_ENTER||!e.keyCode&&e.button>=0){var s=getItems(gComboEx),a=s[gItemNum];if(null!=a&&"true"!=a.getAttribute("aria-disabled")){var u=a.label,g=a.val,m=i.getElementById(o);m.value=u,m.val=g,void 0!==a.img&&(m.style.background="url("+a.img+") no-repeat 2px 5px",m.style.paddingLeft="25px"),m.onchange&&m.onchange(),setStyle(gComboEx,"display","none",""),gItemNum=0,gFocusItem=m,setTimeout(function(){doFocus()},0)}}else n==KEY_ESCAPE&&(l=!1,setStyle(t,"display","none",""),gItemNum=0,gFocusItem=i.getElementById(o),setTimeout(function(){doFocus()},0));return l}}function getItems(e){if(null===e)return[];for(var t=new Array,t=new Array,o=e.childNodes,i=o.length,n=0;n<i;n++)o[n].nodeType!=ELEMENT_NODE||"item"!=o[n].getAttribute("class")&&"item focus"!=o[n].getAttribute("class")||(t[t.length]=o[n]);return t}function setStyle(e,t,o,i){var n=!1;try{e.style&&e.style.setProperty&&(e.style.setProperty(t,o,i),n=!0)}catch(e){alert("exception caught setting style: "+e.message)}if(!n)try{e.style[t]=o,n=!0}catch(e){alert("exception caught setting direct style: "+e.message)}return n}function doFocus(){null!=gFocusItem&&(gFocusItem.focus(),gLastFocusItem&&"item focus"==gLastFocusItem.className&&(gLastFocusItem.className="item"),gFocusItem&&"item"==gFocusItem.className&&(gFocusItem.className="item focus"),gLastFocusItem=gFocusItem,gFocusItem=null)}function create_combo(e,t,o,i,n,l,d,s,r){i||(i=document),n||(n="");var a=i.getElementById(e),u=getComboId(e);if(a&&!i.getElementById(u)&&null!==u){a.onkeydown=function(e){return e||(e=window.event),focusCombo(e,a,u)},a.onkeyup=function(e){return e||(e=window.event),keyupCombo(i,e,a,u),!1},a.setAttribute("role","textfield"),a.setAttribute("aria-haspopup","true"),a.setAttribute("autocomplete","off"),a.style.marginRight="0px";var g,m=i.createElement(n+"div"),f=m;m.setAttribute("role","list"),m.style.display="none","undefined"!=typeof g_isie&&g_isie&&(m.style.display="none"),m.setAttribute("id",u),m.setAttribute("class","dropStyle"),"undefined"!=typeof g_isie&&g_isie&&(m.className="dropStyle"),m.onkeydown=function(e){return doComboNav(e,this,this.id.substring(0,this.id.length-6),i)},void 0!==m.addEventListener?m.addEventListener("click",function(e){doComboNav(e,this,this.id.substring(0,this.id.length-6),i)}):m.attachEvent("onclick",function(e){if(e||(e=window.event),!e)return!1;doComboNav(e,f,f.id.substring(0,f.id.length-6),i)}),m.style.overflowY="auto",m.style.overflowX="auto","undefined"!=typeof g_isie&&g_isie&&(m.style.background="#fff"),m.style.paddingLeft="6px",m.style.paddingRight="6px",m.style.position="absolute",m.setAttribute("autofilled","false"),r?insertAfter(i.getElementById(r),m):void 0!==i.body&&i.body?i.body.appendChild(m):a.parentNode.parentNode.appendChild(m),void 0!==a.ownerDocument.defaultView&&void 0!==a.ownerDocument.defaultView.addEventListener?(a.ownerDocument.defaultView.addEventListener("click",function(t){t.target.id!=e&&close_combo(e,i)},!1),a.addEventListener("keydown",function(t){9==t.keyCode&&close_combo(e,i)},!1)):(document.attachEvent("onclick",function(t){window.event.srcElement.id!=e&&close_combo(e,i)}),document.attachEvent("onkeydown",function(t){9==window.event.keyCode&&close_combo(e,i)}));for(var c=0;c<t.length;c++)addItem(m,t[c],c,i);var p=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/pwdrop.png";if(g_do_svg&&(p=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/teardrop.png"),("undefined"!=typeof g_isie&&g_isie||"undefined"!=typeof g_isfirefox&&g_isfirefox)&&(p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfElEQVQ4T2NkoDJgpLJ5DKMGUh6io2GIGobe3t4LGBkZ49FD9v///wu3bt2agC3ECYYhuqH4DANZQNDAgIAAgT9//hwAqtUH4ossLCwOGzZs+IArPRA0EKQRZOjv378nsLKyFuAzjCgXkpoyiXIhKYaOGkhKaGFXS/UwBABG2SEVsoLJ9AAAAABJRU5ErkJggg=="),o&&"undefined"!=typeof LP_getAbsolutePos){var b=0,y=0,m=i.createElement(n+"div");void 0!==i.body&&i.body?l?insertAfter(i.getElementById(l),m):i.body.appendChild(m):a.parentNode.appendChild(m);var h,v=getComboButtonId(e),g=new Array,_=3;h=void 0!==a.ownerDocument.defaultView&&void 0!==a.ownerDocument.defaultView.getComputedStyle?a.ownerDocument.defaultView.getComputedStyle(a):a.currentStyle;var E=LP_getAbsolutePos(i,a);if(!E)return;if(null!=E&&E.left>0&&E.top>0){var I,I=E.left+parseInt(E.width)+4-30;b=0,y=0,"undefined"!=typeof g_isie&&g_isie&&(y=-4,b=2),g.left=I+y+"px",g.position="absolute",g.top=parseInt(E.top)+4+b+"px","undefined"!=typeof g_isfirefox&&g_isfirefox||(g.padding=_+"px")}var C=Math.floor((30-E.height)/2);C>=1&&E.height<30&&(b=0,y=0,"undefined"!=typeof g_isie&&g_isie,g=new Array,g.position="absolute",g.height=E.height-4+"px",g.width=E.height-4+"px",g.top=parseInt(E.top)+4+C+4+"px",I=E.left+parseInt(E.width)+4-30+C+4,g.left=I+C+"px",_-=2*C,_<0&&(_=0),"undefined"!=typeof g_isfirefox&&g_isfirefox||(g.padding=_+"px"));var w=Math.round((E.height-30)/2);if(E.height>30){if(b=0,y=0,"undefined"!=typeof g_isie&&g_isie){var A=parseInt(h.borderTopWidth);w-=(A+parseInt(h.borderBottomWidth))/2,y=-5,b=A}g=new Array,g.left=I+y+"px",g.position="absolute",g.top=E.top+w+b+"px",_+=2*w,"undefined"!=typeof g_isfirefox&&g_isfirefox||(g.padding=_+"px")}"undefined"!=typeof g_isie&&g_isie&&(g.border="0px"),a.style.textOverflow="ellipsis",a.style.whiteSpace="nowrap",l&&(m.style.marginLeft=d?d+"px":"-15px",m.style.display="inline",m.style.verticalAlign="top",m.style.marginTop="6px",s?(g=new Array,g.marginTop=s+"px"):g.marginTop="-18px");var x=m.ownerDocument.createElement(g_isfirefox?"image":"img");x.setAttribute("id",v),x.setAttribute("src",p),x.setAttribute("valign","middle"),m.appendChild(x);var N=i.getElementById(v);if(!N)return;for(var c in g)g.hasOwnProperty(c)&&(N.style[c]=g[c]);N.onclick=function(e){openCombo(e,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),i),null!=e?e.cancelBubble=!0:window.event.cancelBubble=!0}}else if(!o&&"undefined"!=typeof LP_getAbsolutePos){var N=i.createElement(n+"img");N.id=getComboButtonId(e),null!==N.id&&(N.onclick=function(e){openCombo(e,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),i),null!=e?e.cancelBubble=!0:window.event.cancelBubble=!0}),N.setAttribute("src",p),N.setAttribute("valign","middle"),"undefined"!=typeof g_isopera&&g_isopera&&(N.style.position="relative",N.style.top="7px"),void 0!==i.body&&i.body?i.body.appendChild(N):i.getElementById("main").appendChild(N);var E=LP_getAbsolutePos(i,a);if(null!=E&&E.left>0&&E.top>0){var I=E.left+E.width+2;N.style.left=I+"px",N.style.position="absolute",N.style.top=E.top+"px"}var C=Math.floor((30-E.height)/2);C>=1&&E.height<30&&(N.style.height=E.height+"px",N.style.width=E.height+"px",N.style.top=E.top+C+"px");var w=Math.round((E.height-30)/2);E.height>30&&(N.style.top=E.top+w+"px")}N.className+="teardrop"}}function delete_combo_item(e,t){var o=getComboId(e),i=document.getElementById(o);if(i)for(var n=getItems(i),l=0;l<n.length;l++)if(n[l].innerHTML==t){for(n.splice(l,1);i.hasChildNodes();)i.removeChild(i.firstChild);for(var d=0;d<n.length;d++)addItem(i,n[d].innerHTML,d);break}}function close_combo(e,t){t||(t=document);var o=getComboId(e),i=t.getElementById(o);if(i){"block"==i.style.display&&(setStyle(i,"display","none",""),gItemNum=-1),g_do_complete&&unhighlight_combo_all_items(t,e)}}function repopulate_combo(e,t,o){o||(o=document);var i=getComboId(e),n=o.getElementById(i);if(n){for(;n.hasChildNodes();)n.removeChild(n.firstChild);for(var l=0;l<t.length;l++)addItem(n,t[l],l,o)}var d=getComboButtonId(e),s=o.getElementById(d);s&&setStyle(s,"display","","")}function destroy_combo(e,t){if(t||(t=document),!(null==e||e.length<=0))try{var o=getComboId(e),i=t.getElementById(o);if(i){for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.parentNode.removeChild(i)}var n=getComboButtonId(e),l=t.getElementById(n);l&&l.parentNode.removeChild(l)}catch(e){console_log("destroy_combo error: "+e.message)}}function highlight_combo_item(e,t,o,i){return 0}function unhighlight_combo_item(e,t,o){return 0}function unhighlight_combo_all_items(e,t){return 0}function getComboId(e){return null===e||""===e?null:e+"_combo"}function getComboButtonId(e){return null===e||""===e?null:e+"_button"}function hide_combo_item(e){null!==e&&setStyle(e,"display","none","")}function show_combo_item(e){null!==e&&setStyle(e,"display","","")}function show_all_combo_items(e,t){if(e||(e=document),!(null==t||t.length<=0)){var o=getComboId(t),i=e.getElementById(o);if(i)for(var n=getItems(i),l=0;l<n.length;l++)show_combo_item(n[l])}}function combo_filter(e,t,o){if(e||(e=document),!(null===t||t.length<=0)){var i=!0,n=0;null===o&&(o="");var l=of(o,e),d=null,s=getComboId(t),r=e.getElementById(s);if(r){for(var a=getItems(r),u=0;u<a.length;u++){var g="undefined"!=typeof g_isfirefox&&g_isfirefox?a[u].textContent:get_innertext(a[u]),m=o,f=g;f=void 0===g.trim?g.replace(/^\s*|\s+$/g,""):g.trim(),m=void 0===o.trim?o.replace(/^\s*|\s+$/g,""):o.trim(),""===m||f.toLowerCase().indexOf(l.toLowerCase())>=0?(show_combo_item(a[u]),highlight_combo_item(e,t,a[u],o),i=!1,n++,d=a[u]):(hide_combo_item(a[u]),unhighlight_combo_item(e,t,a[u]))}if(i)close_combo(t,e);else{var c=r.getAttribute("autofilled");if(1===n&&"false"==c){r.setAttribute("autofilled","true");var p=e.getElementById(t);if(p){var b=p.value.length,y=d.val.length;if(p.value=d.val,"selectionStart"in p)p.selectionStart=b,p.selectionEnd=y;else{var h=p.createTextRange();h.moveStart("character",b),h.collapse(),h.moveEnd("character",y),h.select()}}close_combo(t,e)}}}}}function keyupCombo(e,t,o,i){if(e||(e=document),t||(t=window.event),t){var n=e.getElementById(i);if(null!==n&&null!==o){var l=t.keyCode;if(l!=KEY_DOWN&&l!=KEY_F4&&l!=KEY_UP&&l!=KEY_ENTER&&l!=KEY_ESCAPE){if("undefined"!=typeof TABKEY&&(l==TABKEY||l==SHIFTKEY)){var d="undefined"!=typeof document&&document.location?document.location.href:"";if(d.indexOf("popupfilltab.html")!=-1||d.indexOf("#framesrc=LPMAGIC")!=-1)return tabfocuser(t),!1}isComboShowing(n)||(showCombo(o,n,null,e),gItemNum=-1,setTimeout(function(){doFocus()},0)),combo_filter(e,o.id,o.value)}}}}function keydownCombo(e,t,o,i){}function isComboShowing(e){return null!==e&&"block"==e.style.display}function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}var KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,ELEMENT_NODE=1,KEY_ESCAPE=27,KEY_F4=115,KEY_LEFT=37,KEY_RIGHT=39,KEY_HOME=36,KEY_END=35,g_do_complete=!0,g_do_svg=!0,g_iField=null,g_cb=null,g_combobox_button=null,gItemNum=0,gComboEx=null,gFocusItem=null,gLastFocusItem=null;