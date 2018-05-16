var LPUtils,lastpass;!function(t){(LPUtils||(LPUtils={})).stringContains=function(t,n){if(t&&n){Array.isArray(n)||(n=[n]);for(var i=0;i<n.length;++i)if(t.indexOf(n[i])>-1)return!0}return!1}}(),function(t){var n=function(){function t(){var t=this;bg.basicAuth.hasFeature(function(n){n&&bg.basicAuth.isBasicAuth(function(n,i){return t.init(n,i)})})}return t.prototype.init=function(t,n){var i=this;t&&(this.backgroundInterface=bg,this.loadContent(function(){i.initContent(n)}))},t.prototype.loadContent=function(t){var n=this;$.get(chrome.runtime.getURL("/basicAuth/views/basicAuthFrame.html"),function(i){var o=n.replaceRelativePaths(i);$(document.body).empty().append(o),t()})},t.prototype.initContent=function(t){$("#ba_username").focus(),t||$("#wronguserpass").hide(),document.title="Lastpass basic auth login",$("#title").text(location.host),"http:"===location.protocol?$("#secureWarning").show():$("#secureWarning").hide(),this.subscribeEvents(),this.openPopupNotification(),this.backgroundInterface.sendLpImprove("basicauth::triggered")},t.prototype.subscribeEvents=function(){var t=this;$("#lp-login-btn").click(function(){$(".js-notification").toggle("notification-visible"),t.doLogin()}),$("#password").keypress(function(n){13==n.which&&t.doLogin()}),$("#lp-cancel-btn").click(function(){t.cancelBasicAuth(),t.backgroundInterface.sendLpImprove("basicauth::cancel")}),$(".notification__close__button").click(function(){$(".notification__body").removeClass("slide-in").addClass("slide-out"),t.backgroundInterface.basicAuth.closeNotification()})},t.prototype.doLogin=function(){var t=$("#ba_username").val(),n=$("#ba_password").val();this.backgroundInterface.sendLpImprove("basicauth::login"),this.backgroundInterface.basicAuth.setAuthCredential(t,n,function(){return location.reload()})},t.prototype.cancelBasicAuth=function(){this.backgroundInterface.basicAuth.cancelBasicAuth(),$("#login-body").hide(),location.reload()},t.prototype.replaceRelativePaths=function(t){var n=chrome.runtime.getURL("");return t.replace(new RegExp("{extensionUrl}","g"),n)},t.prototype.openPopupNotification=function(){this.backgroundInterface.basicAuth.isNotificationClosed(function(t){t?$(".notification__body").hide():$(".notification__body").addClass("slide-in")})},t}();t.BasicAuthContentScript=n}(lastpass||(lastpass={})),this.basicAuth=new lastpass.BasicAuthContentScript;
//# sourceMappingURL=sourcemaps/modules-contentscript.js.map
