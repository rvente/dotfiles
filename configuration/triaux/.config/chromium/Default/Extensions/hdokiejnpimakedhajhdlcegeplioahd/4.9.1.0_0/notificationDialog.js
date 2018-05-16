var NotificationDialog=function(i){Dialog.call(this,i,{additionalHeaderClasses:["icon","leftIcon"],dynamicHeight:!0,responsive:!1,closeButtonEnabled:!0,buttonsInsideContent:!0})};NotificationDialog.prototype=Object.create(Dialog.prototype),NotificationDialog.prototype.constructor=NotificationDialog,NotificationDialog.prototype.setupButtons=function(){var i;i=this,$("#notificationDialogFeedback").bind("click",function(){bg.openURL(bg.get("base_url")+"feedback.php"),i.close()}),$("#notificationDialogTryAgain").bind("click",function(){ExtensionDropdown.openDialog("loginTab"),i.close()}),$("#notificationDialogClose").bind("click",function(){i.close()}),$("#notificationDialogDisableMulti").bind("click",function(){bg.openURL(bg.get("base_url")+i.notification.multifactor_disable_url),i.close()}),$("#notificationDialogCreateAccount").bind("click",function(){bg.LPPlatform.openTabDialog("createAccountSimple"),i.close(!0)}),$("#notificationDialogStartTrial").bind("click",function(){bg.start_trial(),i.close()})},NotificationDialog.prototype.setup=function(i,t){if(LPFeatures.updateFeatures({multifactor_disable:!0}),t.notification){LPTools.setContent($("#notificationDialogMessage"),t.notification.msg);var o=[];t.notification.showFeedback&&o.push("feedback"),t.notification.showLogin&&o.push("tryAgain"),t.notification.showCreateAccount&&o.push("createAccount"),t.notification.multifactor_disable_url&&o.push("multifactor"),t.notification.showStartTrial&&o.push("trial"),0===o.length&&o.push("default"),this.dialogContent.children().first().attr("class",o.join(" "))}Dialog.prototype.setup.apply(this,arguments)},NotificationDialog.prototype.handleSubmit=function(){this.close()};
//# sourceMappingURL=sourcemaps/notificationDialog.js.map