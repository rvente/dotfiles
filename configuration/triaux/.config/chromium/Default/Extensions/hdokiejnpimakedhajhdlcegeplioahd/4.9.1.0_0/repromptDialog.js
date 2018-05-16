var RepromptDialog=function(t){Dialog.call(this,t,{additionalHeaderClasses:["icon","leftIcon"],dynamicHeight:!0,responsive:!1,buttonsInsideContent:!0,nextButtonText:Strings.translateString("Continue"),title:Strings.translateString("Reprompt"),confirmOnClose:!1,overlayDialog:!0}),this.numfailed=0};RepromptDialog.prototype=Object.create(Dialog.prototype),RepromptDialog.prototype.constructor=RepromptDialog,function(){var t=Strings.translateString("Invalid Password.");RepromptDialog.prototype.initialize=function(t){"undefined"!=typeof lpFederatedLoginObj&&lpFederatedLoginObj.wasLastLoginFederated()&&(this.options.hideButtons=!0),Dialog.prototype.initialize.call(this,t)},RepromptDialog.prototype.open=function(t){this.numfailed=0,Dialog.prototype.open.call(this,t)},RepromptDialog.prototype.preSetup=function(t){Dialog.prototype.preSetup.call(this,t),"undefined"!=typeof lpFederatedLoginObj&&lpFederatedLoginObj.wasLastLoginFederated()&&(document.getElementById("reprompt-master-password").style.display="none",document.getElementById("reprompt-federated").style.display="block")},RepromptDialog.prototype.postSetup=function(t){Dialog.prototype.postSetup.call(this,t);var e=this;"undefined"!=typeof lpFederatedLoginObj&&lpFederatedLoginObj.wasLastLoginFederated()&&setTimeout(function(){e.inputFields.password.input.val(lpFederatedLoginObj.getFederatedMasterPassword()),e.submit()},20)},RepromptDialog.prototype.success=function(){"function"==typeof this.data.successCallback&&this.data.successCallback()},RepromptDialog.prototype.error=function(){this.numfailed<2?(this.numfailed++,this.addError("password",t),this.inputFields.password.focus()):this.close()},RepromptDialog.prototype.validateReprompt=function(t){if("function"!=typeof this.data.validate)throw"Must override RepromptDialog.prototype.validate or pass a validate callback to dialogs.reprompt.open().";this.data.validate(t)},RepromptDialog.prototype.handleSubmit=function(t){LPRequest.makeRequest(this.createDynamicHandler(function(t){var e;t.repromptFailed=(e=this,function(){if("undefined"!=typeof lpFederatedLoginObj&&lpFederatedLoginObj.wasLastLoginFederated())return document.querySelector(".loading-gif").classList.add("is-hidden"),document.querySelector(".login-text").classList.add("is-hidden"),document.querySelector(".login-error").classList.add("is-visible"),void document.querySelector(".error-text").classList.add("is-visible");e.error(),t.error("")}),this.validateReprompt(t)}),{params:t,success:this.createDynamicHandler(this.success)})}}();
//# sourceMappingURL=sourcemaps/repromptDialog.js.map