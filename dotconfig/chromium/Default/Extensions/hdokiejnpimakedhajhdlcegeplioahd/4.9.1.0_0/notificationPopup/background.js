var omsNotification=function(){var e,t={opened:!1,tabInterface:null,dialogId:-1},n=!1;return _textVersion=Math.ceil(2*Math.random()),LPPlatform.onTabActivated(function(e){t.opened&&(p(),t.tabInterface=e,o(e))}),LPPlatform.onTabUpdated(function(e){t.opened&&e.tabDetails.tabID===t.tabInterface.tabDetails.tabID&&(t.opened=!1,t.tabInterface=e,o(e))}),setInterval(function(){LPPlatform.getCurrentTab(function(e){e&&o(e)})},1e4),{startOms:function(){var e=(Date.now()-a())/1e3;p(),openvault(!1,"omsstart",function(t){sendLpImprove("oneminute::notificationomsstart",{provider:r(),elapsedTimeInSec:e.toFixed(),textVersion:_textVersion})})},cancelNotification:function(){var e=(Date.now()-a())/1e3;i(oneMinuteSignup.FeatureState.cancel),p(),sendLpImprove("oneminute::notificationclose",{elapsedTimeInSec:e.toFixed(),textVersion:_textVersion})},postponeNotification:function(e){var t=(Date.now()-a())/1e3;i(e?oneMinuteSignup.FeatureState.postponeNextDay:oneMinuteSignup.FeatureState.postpone),p(),localStorage_setItem(db_prepend("oms_postponed_date"),Date.now()),e||sendLpImprove("oneminute::notificationnotnowclicked",{elapsedTimeInSec:t.toFixed(),textVersion:_textVersion})},setState:i,getState:function(){return localStorage_getItem(db_prepend("oms_state"))}};function o(o){var a=OmsNotificationPopup.getState();if(lploggedin&&!isOffline()&&g_onemin_advert_enabled&&!(function(){var e=0;for(var t in g_sites)g_sites.hasOwnProperty(t)&&e++;return e}()>g_onemin_advert_app_threshold)&&!t.opened&&a!==oneMinuteSignup.FeatureState.started&&a!==oneMinuteSignup.FeatureState.cancel){if(a===oneMinuteSignup.FeatureState.postpone||a===oneMinuteSignup.FeatureState.postponeNextDay){var i=parseInt(localStorage_getItem(db_prepend("oms_postponed_date"))),p=parseInt(localStorage_getItem(db_prepend("oms_postponed_threshold_days")));p=isNaN(p)?7:p,a===oneMinuteSignup.FeatureState.postponeNextDay&&(p=1);var s=24*p*60*60*1e3;if(Date.now()-i<s)return}n||(e=Date.now(),n=!0,sendLpImprove("oneminute::notificationshown",{textVersion:_textVersion})),o.getTop().LPFrame.openDialog("omsNotificationPopup",{provider:r(),textVersion:_textVersion},{css:{top:0,right:0},callback:function(e){t.dialogId=e}}),t.opened=!0,t.tabInterface=o}}function a(){return e}function i(e){switch(e){case oneMinuteSignup.FeatureState.started:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.started);break;case oneMinuteSignup.FeatureState.cancel:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.cancel);break;case oneMinuteSignup.FeatureState.postpone:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.postpone);break;case oneMinuteSignup.FeatureState.postponeNextDay:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.postponeNextDay)}}function r(){if(g_username){if(-1!==g_username.indexOf("@gmail"))return"Gmail";if(-1!==g_username.indexOf("@yahoo"))return"Yahoo";if(-1!==g_username.indexOf("@outlook"))return"Office365"}return"Unknown"}function p(){t.opened=!1;var e=t.dialogId;e&&t.tabInterface&&LPTabs.get({tabID:t.tabInterface.tabDetails.tabID,callback:function(t){var n=t.getTop();n&&n.LPFrame.close(e)}})}}();
//# sourceMappingURL=sourcemaps/notificationPopup/background.js.map