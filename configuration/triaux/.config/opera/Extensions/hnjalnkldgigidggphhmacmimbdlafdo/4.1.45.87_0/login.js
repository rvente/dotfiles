function do_submit(){if(login_submitted)return!1;var e=!1;window.location.search.indexOf("&securereprompt=1")!=-1&&window.location.search.indexOf(!0)&&(e=!0),login_submitted=!0;var t=fix_username(document.getElementById("u").value),o=document.getElementById("p").value;document.getElementById("p").value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";var n=get_key_iterations(t);return 0==e?(getBG().console_log("login calculating key"),getBG().make_lp_key_hash_iterations(t,o,n,function(e,n){if(getBG().console_log("login calculating key completed"),document.getElementById("p").blur(),null!=reprompt_callback){var r=getBG();if(e==r.g_local_key){var d=0;document.getElementById("donotrepromptfor").checked&&(d=document.getElementById("donotrepromptforsecs").value),r.lpPutUserPref("reprompttime",d),r.lpWriteAllPrefs(),"function"==typeof r.set_last_reprompt_time&&r.set_last_reprompt_time(),reprompt_error_callback=null,r.select_selectedtabid(),reprompt_callback(),setTimeout(function(){window.close()},0)}else alert(gs("Invalid Password.")),login_submitted=!1,numfailed<2?(numfailed++,document.getElementById("p").value="",document.getElementById("p").focus()):setTimeout(function(){closePop()},0)}else{var l=getBG();if(!l)return void alert(gs("Can't find hidden LastPass window"));document.getElementById("rememberpassword").checked||(document.getElementById("p").value=""),"block"==document.getElementById("disablepasswordmanagerrow").style.display&&l.disablepasswordmanager(document.getElementById("disablepasswordmanager").checked),l.g_manual_login=!0,l.LP_do_login(t,o,document.getElementById("rememberemail").checked,document.getElementById("rememberpassword").checked,null,document.getElementById("showvault").checked,e,n),reprompt_error_callback=null,o="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",setTimeout(function(){closePop()},0)}})):getBG().make_lp_key_hash_iterations(t,o,n,function(e,t){secure_reprompt_callback(e,t)}),!1}function setup_reprompt(){document.getElementById("reprompttext").style.display="block",document.getElementById("deleteicon").style.display="none",document.getElementById("rememberemailrow").style.display="none",document.getElementById("rememberpasswordrow").style.display="none",document.getElementById("showvaultrow").style.display="none",document.getElementById("donotrepromptforrow").style.display="block",document.getElementById("screenkeyboardcontainer").style.display="none",document.getElementById("forgotcontainer").style.display="none",document.getElementById("u").disabled=!0,setTimeout(function(){document.getElementById("p").focus()},100),document.getElementById("links").style.display="none",document.title=set_innertext(document.getElementById("logintitletxt"),gs("Reprompt")),setTimeout(function(){document.getElementById("p").focus()},150),window.location.search.indexOf("fromcs=1")>0&&(fromcs=!0)}function load(e){try{var t="undefined"!=typeof chrome&&(void 0!==chrome.runtime||void 0!==chrome.extension);if(!(t||e||"undefined"!=typeof safari&&void 0!==safari.extension.globalPage))return void get_data("login",function(){load(!0)});if(t){var o=window.getComputedStyle(document.body,null);parseInt(o.width)<100&&(document.body.style.minWidth="810px",document.body.style.minHeight="333px")}document.getElementById("screenkeyboard")&&(document.getElementById("screenkeyboard").title=gs("Screen Keyboard")),getBG().LPISLOC&&(document.getElementById("forgotcontainer").style.display=document.getElementById("screenkeyboardcontainer").style.display=document.getElementById("createaccountcontainer").style.display="none"),getBG().g_hidecreate&&(document.getElementById("createaccountcontainer").style.display="none"),(getBG().g_hidevault||getBG().g_hideshowvault)&&(document.getElementById("showvaultrow").style.display="none"),getBG().g_hidescreenkeyboard&&(document.getElementById("screenkeyboardcontainer").style.display="none");var n=getBG();if(can_chrome_do_math()||n.openURL(getchromeurl("mathfail.html")),null!=n.g_reprompt_callback){reprompt_callback=n.g_reprompt_callback,n.g_reprompt_callback=null,reprompt_error_callback=n.g_reprompt_error_callback,n.g_reprompt_error_callback=null,setup_reprompt(),document.getElementById("u").value=n.g_username;var r=n.lpGetPref("reprompttime",0);document.getElementById("donotrepromptfor").checked=r>0,document.getElementById("donotrepromptforsecs").value=r,getBG().can_allow_reprompt_skip()||(document.getElementById("donotrepromptfor").checked=!1,document.getElementById("donotrepromptfor").disabled=!0,document.getElementById("donotrepromptforsecs").disabled=!0)}else{var d=n.lpGetPref("rememberemail",1),l=n.lpGetPref("rememberpassword",-1),a=n.lpGetPref("showvault",-1);document.getElementById("rememberemail").checked=1==d,document.getElementById("rememberpassword").checked=1==l,document.getElementById("showvault").checked=1==a,getBG().g_hidescreenkeyboard&&(document.getElementById("screenkeyboardcontainer").style.display="none"),getBG().g_db_transaction_tested=getBG().g_db_transaction_worked=!1,populate_usernames(),g_isfirefoxsdk&&getBG().remembersignons?(document.getElementById("disablepasswordmanagerrow").style.display="block",document.getElementById("disablepasswordmanager").checked=0==getBG().lpGetPref("disablepasswordmanagerasked",0)):t&&void 0!==n.chrome.privacy&&void 0!==n.chrome.privacy.services&&void 0!==n.chrome.privacy.services.passwordSavingEnabled&&n.chrome.privacy.services.passwordSavingEnabled.get({},function(e){"controllable_by_this_extension"==e.levelOfControl&&e.value&&(document.getElementById("disablepasswordmanagerrow").style.display="block",document.getElementById("disablepasswordmanager").checked=0==getBG().lpGetPref("disablepasswordmanagerasked",0))})}var c=document.getElementById("logincontainer").clientHeight;document.getElementsByTagName("html")[0].style.height=document.getElementsByTagName("body")[0].style.height=c+"px",fix_firefox_height()}catch(e){getBG().console_log(e.message)}}function populate_usernames(){getBG().get_saved_logins(function(e){for(var t=new Array,o=0;o<e.length;o++)t[o]=e[o].username,passwords[t[o]]=e[o].password,1==e[o].protected?function(e,t){getBG().unprotect_data(t,!1,function(o){passwords[e]=o,document.getElementById("p").value==t&&(document.getElementById("p").value=o)})}(t[o],passwords[t[o]]):2==e[o].protected&&(passwords[t[o]]=lpdec(passwords[t[o]],AES.hex2bin(SHA256(t[o]))));t.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:1}),create_combo("u",t,!0,document,"","deleteicon",-45,g_isfirefoxsdk?6:-2);var n="",r=document.location.href.indexOf("sesameusername=");if(r!=-1&&(n=document.location.href.substr(r+15),r=n.indexOf("&"),r!=-1&&(n=n.substring(0,r)),n=decodeURIComponent(n)),e.length>0||""!=n){var d=""!=n?n:e[0].username,l=void 0!==passwords[d]?passwords[d]:"";document.getElementById("u")&&(document.getElementById("u").value=d),document.getElementById("p")&&document.getElementById("p").focus(),""!=l&&(document.getElementById("p").value=l,rememberpassword==-1&&(document.getElementById("rememberpassword").checked=!0),document.getElementById("login").focus())}else document.getElementById("u").focus();g_ischrome&&(navigator.userAgent.indexOf("Chrome/4")==-1&&navigator.userAgent.indexOf("Chrome/5")==-1||setTimeout(function(){test_db_failed(1)},5e3)),check_remember_password()})}function handle_keydown(e){var t=0!=e.keyCode?e.keyCode:e.charCode;if(g_issafari&&68==t&&e.ctrlKey){LP_decimate_children(document.body);var o=document.createElement("pre");return set_innertext(o,getBG().g_console_log),document.body.appendChild(o),e.cancelBubble=!0,e.preventDefault(),void e.stopPropagation()}}function test_db_failed(e){L("test_db_failed timeout: "+e),getBG().g_db_transaction_tested=!0,getBG().g_db_transaction_worked||(document.getElementById("u").focus(),create_combo("u",new Array,!0,document,"","deleteicon",-45,g_isfirefoxsdk?6:-2))}function username_changed(){var e=document.getElementById("u").value;void 0!==passwords[e]&&""!=passwords[e]?(document.getElementById("p").value=passwords[e],document.getElementById("rememberpassword").checked=!0):(document.getElementById("p").value="",document.getElementById("rememberpassword").checked=!1),check_remember_password()}function check_remember_password(){if(document.getElementById("u")){var e=document.getElementById("u").value,t="undefined"!=typeof chrome&&(void 0!==chrome.runtime||void 0!==chrome.extension);if(localStorage_getItem(SHA256(e)+".noremember")&&null==getBG().g_reprompt_callback)if(t){document.getElementById("rememberpasswordrow").style.display="none";var o=document.getElementById("logincontainer").clientHeight;document.getElementsByTagName("html")[0].style.height=document.getElementsByTagName("body")[0].style.height=o+"px"}else document.getElementById("rememberpassword").checked=!1,document.getElementById("rememberpassword").disabled="disabled";else if(t){document.getElementById("rememberpasswordrow").style.display="block"}else document.getElementById("rememberpassword").disabled=""}}function delete_user(){var e=document.getElementById("u").value;getBG().delete_saved_login(e),delete passwords[e],delete_combo_item("u",e),document.getElementById("u").value="";for(var t in passwords){document.getElementById("u").value=t;break}username_changed()}function retsubmit(e){return 13!=e.keyCode||(do_submit(),!1)}function glow(e){e.className+=" glow"}function dim(e){e.className=e.className.replace(/\bglow\b/,"")}function closePop(){"undefined"==typeof chrome||void 0===chrome.runtime&&void 0===chrome.extension||!parent?g_ismaxthon?(window.close(),setTimeout(function(){window.external.mxGetRuntime().getActionByName("lppanel").hide()},0)):g_isfirefoxsdk?(getBG().closecurrenttab("login.html"),dispatch_message("closepop",{})):void 0!==getBG().closePop?getBG().closePop():window.close():document.location.href.indexOf("login.html")!=-1&&document.location.search.indexOf("inline")==-1?getBG().closecurrenttab("login.html"):parent.window_close()}function oninitlogin(){}function onshowlogin(){parent.body&&(parent.body.style.margin="0px"),location.search.indexOf("foo")==-1&&(location.href="lp_toolstrip.html?browseraction=1&foo")}function onhidelogin(){parent.body&&(parent.body.style.margin="8px")}function secure_reprompt_callback(e,t){process_response=function(o,n,r){if(4==o.readyState&&200==o.status){var d=JSON.parse(o.response);if(1!==d.success)e==a.g_local_key?(reprompt_callback(),setTimeout(function(){window.close()},0)):alert("Incorrect Password");else{var l=0;document.getElementById("donotrepromptfor").checked&&(l=document.getElementById("donotrepromptforsecs").value);var a=getBG();a.lpPutUserPref("reprompttime",l),a.lpWriteAllPrefs(),"function"==typeof a.set_last_reprompt_time&&a.set_last_reprompt_time();var c=d.secret,s=d.save_all,m=d.aid,i=d.fields,u=get_record(m,!0);secure_reprompt_cached_acct=[];for(var p in u)secure_reprompt_cached_acct[p]=u[p];1==s&&(secure_reprompt_cached_acct.save_all=!0);for(var x in i){var g=i[x][0],y=i[x][1];i[x][2];for(var _ in u.fields)secure_reprompt_cached_acct.fields[_].name==g&&(secure_reprompt_cached_acct.fields[_].value=y)}"http://sn"==u.url?secure_reprompt_cached_acct.extra=c:secure_reprompt_cached_acct.password=c,getBG().SecureReprompter.add_secret(m,secure_reprompt_cached_acct,l,t),fromcs?reprompt_callback(c):reprompt_callback(),setTimeout(function(){window.close()},0)}}};var o=window.location.search,n=o.slice(1),r=n.split("&"),d=null;for(var l in r)if(0==r[l].indexOf("aid=")){d=r[l].split("=")[1];break}var a=get_record(d);a.sharefolderid,a.sharefolderid&&(n+="&sharedfolderid="+encodeURIComponent(a.sharefolderid)),getBG().lpMakeRequest(base_url+"secure_reprompt.php","hash="+encodeURIComponent(t)+"&"+n,process_response,null)}var reprompt_callback=null,reprompt_error_callback=null;g_fixpbkdf2=!0;var login_submitted=!1,fromcs=!1,numfailed=0,passwords=new Array;window.addEventListener("keydown",function(e){handle_keydown(e)},!1);