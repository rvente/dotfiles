!function(o){var i="",e=[],t={},a=["newvaultGlobal","dialog","buttons"],l=["dialog","dialogFields"],r=function(o){e.push(o)},n=function(o){for(var i=0,t=e.length;i<t;++i)e[i]===o&&e.splice(i,1)},g=function(o){return i+LPPlatform.getResourcePath(o)},s=function(){var i=null,e=function(o,e){for(var t=0,a=o.length;t<a;++t){var l=o[t].getAttribute(e);l&&(i[l]=!0)}};return{loadFile:function(o,e){null===i&&s.initialize();var a=g(o.name);void 0===i[a]?(i[a]=!0,t[a]=[e],o.load(function(){var o=t[a];delete t[a];for(var i=0,e=o.length;i<e;++i)o[i]()})):t[a]?t[a].push(e):e()},initialize:function(){null===i&&(i={},e(o.getElementsByTagName("link"),"href"),e(o.getElementsByTagName("script"),"src"))}}}(),d=function(){this.files=[],this.addedFiles={}};d.prototype.load=function(o){var i=0,e=this.files,t=function(){++i,i===e.length?o&&o():s.loadFile(e[i],t)};0===i&&e.length>0&&s.loadFile(e[0],t)},d.prototype.addFile=function(o){void 0===this.addedFiles[o.name]&&(this.files.push(o),this.addedFiles[o.name]=!0)},d.prototype.addFiles=function(o){if(o){o=[].concat(o);for(var i=0,e=o.length;i<e;++i)this.addFile(o[i])}};var c=function(i){i.indexOf(".js")!==i.length-3&&(i=i+=".js"),this.name=i,this.load=function(e){var t=o.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",g(i)),LPPlatform.addEventListener(t,"load",e),o.body.appendChild(t)}},u=function(i){i.indexOf(".css")!==i.length-4&&(i=i+=".css"),this.name=i,this.load=function(e){var t=o.createElement("link");t.setAttribute("type","text/css"),t.setAttribute("rel","stylesheet"),t.setAttribute("href",g(i)),LPPlatform.addEventListener(t,"load",e),o.body.appendChild(t)}},D=function(o){d.call(this),o=o?a.concat(o):a;for(var i=0,e=o.length;i<e;++i)this.addFile(o[i])};D.prototype=Object.create(d.prototype),D.prototype.constructor=D,D.prototype.addFile=function(o){o&&d.prototype.addFile.call(this,new u(o))},D.prototype.load=function(o){for(var i=0,e=this.files,t=function(){++i===e.length&&o()},a=0,l=e.length;a<l;++a)s.loadFile(e[a],t)};var p=function(o){d.call(this),o=o?l.concat(o):l;for(var i=0,e=o.length;i<e;++i)this.addFile(o[i])};p.prototype=Object.create(d.prototype),p.prototype.constructor=p,p.prototype.addFile=function(o){o&&d.prototype.addFile.call(this,new c(o))};var h=function(o){var e=this,t=!1,a=null,l=new p(o.js),g=new D(o.css),s=null;this.parentElementID=o.parentElementID,this.type=o.type;var d=function(){if(null===s)for(var o in dialogs)if(dialogs[o]===e){s=o;break}return s},c=function(o,i){var e,t,a={},l=o?[].concat(o):[];for(i=i?[].concat(i):[],e=0,t=l.length;e<t;++e)a[l[e]]=!0;for(e=0,t=i.length;e<t;++e)a.hasOwnProperty(i[e])||l.push(i[e]);return l};this.extend=function(i){return new LPDialog.DialogLoader({id:i.id||o.id,htmlSource:c(o.htmlSource,i.htmlSource),css:c(o.css,i.css),js:c(o.js,i.js),type:i.type||o.type,parentElementID:i.parentElementID||o.parentElementID})},this.loadedJS=function(){return t},this.getID=function(){return o.id};var u=function(i){return function(e){var l=window[o.type];a=new l(i),t=!0,e(a)}}(this);this.loadJS=function(o){l?(Topics.get(Topics.DIALOG_LOADING).publish(),l.load(function(){u(o)})):u(o)};var h=function(o,i){var e=o.find("img");if(e.length>0)for(var t=function(){var o=0;return function(){++o===e.length&&i()}}(),a=0,l=e.length;a<l;++a)$(e[a]).bind("load",t);else i()},m=function(o,i){i=$(i),i.find("[dialogsection]").addBack("[dialogsection]").each(function(){var i=this.getAttribute("dialogsection"),e=o.find("[dialogsection="+i+"]");e.before(this),e.remove()}),i.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var i=this.getAttribute("dialogsectionbefore");o.find("[dialogsection="+i+"]").before(this)}),i.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var i=this.getAttribute("dialogsectionafter");o.find("[dialogsection="+i+"]").after(this)}),i.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var i=this.getAttribute("dialogsectionappend");o.find("[dialogsection="+i+"]").append(this)}),i.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var i=this.getAttribute("dialogsectionprepend");o.find("[dialogsection="+i+"]").prepend(this)})},f=function(e,t,a,l){a<t.length?LPPlatform.getHTML(i+o.htmlSource[a],function(o){m(e,o),f(e,t,++a,l)}):l()},y=function(e,t){var a=function(){h(e,t)};o.htmlSource instanceof Array?LPPlatform.getHTML(i+o.htmlSource[0],function(i){e.html(i),f(e,o.htmlSource,1,a)}):LPPlatform.getHTML(i+o.htmlSource,function(o){e.html(o),a()})};this.load=function(o,i){g?g.load(function(){y(o,i)}):y(o,i)},this.open=function(){var o=arguments;this.loadedJS()?a.open.apply(a,o):(r(e),this.loadJS(function(){LPDialog.beforeLoad?LPDialog.beforeLoad(d(),function(){a.open.apply(a,o)}):a.open.apply(a,o),n(e)}))},this.close=function(){a&&a.close.apply(a,arguments)},this.getDialog=function(){return a}};LPRequire={requireJS:function(o,i){new p(o).load(i)}},LPDialog={DialogLoader:h,JSFileSet:p,CSSFileSet:D,getPendingCount:function(){return e.length},getDialogs:function(){var o=[];for(var i in dialogs)o.push(dialogs[i]);return o},setBaseURL:function(o){i=o},openDialog:function(o,i){dialogs[o].open(i)}}}(document),dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:["buttons","dialog","siteDialog","passwordMeter"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","editableFieldsDialog","siteDialog","passwordMeter","bloodhound","bloodhoundDropdown"],type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:["buttons","dialog","noteDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","noteDialog"],type:"NoteDialog"}),customNoteTemplate:new LPDialog.DialogLoader({id:"customNoteTemplateDialog",htmlSource:"customNoteTemplateDialog.html",css:["buttons","dialog","customNoteTemplateDialog"],js:["selectDropdown","typeaheadDropdown","dialog","customNoteTemplateDialog"],type:"CustomNoteTemplateDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:["buttons","dialog","formFillDialog"],js:["selectDropdown","typeaheadDropdown","dialog","formFillDialog","phoneFormatDropdown"],type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",htmlSource:"acceptRejectShareDialog.html",css:["buttons","dialog","acceptRejectShareDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","acceptRejectShareDialog"],type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:["buttons","dialog","shareDialog","containerSelectionDialog","vaultItem"],js:["selectDropdown","typeaheadDropdown","dialog","shareDialog","bloodhound","bloodhoundDropdown","vaultItemTypeahead","sharingModel"],type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:["buttons","dialog","containerSelectionDialog","identityDialog"],js:["dialog","containerSelectionDialog","identityDialog"],type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:["buttons","dialog","containerSelectionDialog","sharedFolderAccessDialog"],js:["dialog","containerSelectionDialog","sharedFolderAccessDialog"],type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:["buttons","dialog","sharedFolderDialog"],js:["dialog","sharedFolderDialog","bloodhound","selectDropdown","typeaheadDropdown","bloodhoundDropdown"],type:"SharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:["buttons","dialog"],js:["dialog","dialogWithGroupInput","folderDialog"],type:"CreateSharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:["buttons","dialog","createCreditMonitoringDialog"],js:["dialog","createCreditMonitoringDialog"],type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:["buttons","dialog","generatePasswordDialog","passwordMeter"],js:["dialog","generatePasswordDialog","selectDropdown","passwordMeter"],type:"GeneratePasswordDialog"}),login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:["loginDialog"],js:["loginDialog","capslockstate"],type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:["repromptDialog"],js:["repromptDialog"],type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",css:["buttons","dialog","createAccountDialog","passwordMeter"],js:["dialog","createAccountDialog","selectDropdown","passwordMeter"],type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:["buttons","dialog"],js:["dialog","selectDropdown","typeaheadDropdown","dialogWithGroupInput","folderDialog"],htmlSource:"folderDialog.html"}),fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:["buttons","dialog","fieldHistoryDialog"],js:["dialog","fieldHistoryDialog"],type:"FieldHistoryDialog"}),linkAccount:new LPDialog.DialogLoader({id:"linkAccountDialog",htmlSource:"linkAccountDialog.html",css:["buttons","dialog","linkAccountDialog"],js:["dialog","linkAccountDialog"],type:"LinkAccountDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",htmlSource:"alertDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"AlertDialog"}),enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:["buttons","dialog"],js:["dialog","enterpriseTrialDialog"],type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","denyEmergencyAccessDialog"],type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:["buttons","dialog"],js:["dialog","verifyEmailDialog"],type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:["buttons","dialog","passwordMeter"],js:["dialog","dialogWithGroupInput","editableFieldsDialog","passwordMeter","applicationDialog","selectDropdown","typeaheadDropdown"],type:"ApplicationDialog"}),chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:["buttons","dialog","chooseProfileDialog"],js:["dialog","chooseProfileDialog"],type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:["buttons","dialog","vaultItem"],js:["dialog","vaultItemSelectDialog"],type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",css:["buttons","dialog"],js:["dialog","inviteFriendsDialog"],type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","addEmergencyAccessDialog"],type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:["buttons","dialog"],js:["dialog","upgradePremiumDialog"],type:"UpgradePremiumDialog"}),sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:["buttons","dialog"],js:["dialog","sharingKeyDialog"],type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:["dialog","dialogWithGroupInput","editableFieldsDialog"],type:"AddFormFieldDialog"})},dialogs.changePassword=dialogs.vaultItemSelect.extend({id:"changePasswordDialog",js:"changePasswordDialog",type:"ChangePasswordDialog"}),$.extend(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:["buttons","dialog","notificationDialog"],js:["dialog","notificationDialog"],type:"NotificationDialog"}),duplicatePassword:new LPDialog.DialogLoader({id:"duplicatePasswordDialog",htmlSource:"duplicatePasswordDialog.html",css:["buttons","dialog","duplicatePasswordDialog"],js:["dialog","duplicatePasswordDialog"],type:"DuplicatePasswordDialog"}),weakPassword:new LPDialog.DialogLoader({id:"weakPasswordDialog",htmlSource:"weakPasswordDialog.html",css:["buttons","dialog","weakPasswordDialog"],js:["dialog","weakPasswordDialog"],type:"WeakPasswordDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:["buttons","dialog","preferencesDialog"],js:["dialog","preferencesDialog"],type:"PreferencesDialog"}),introTutorialInboxImporter:new LPDialog.DialogLoader({id:"introTutorialInboxImporter",htmlSource:"IntroTutorial/introTutorialInboxImporter.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial","IntroTutorial/introTutorialInboxImporter"],js:["dialog","IntroTutorial/introTutorialInboxImporter"],type:"IntroTutorialInboxImporterDialog"}),introTutorialWelcome:new LPDialog.DialogLoader({id:"introTutorialWelcomeDialog",htmlSource:"IntroTutorial/introTutorialWelcomeDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialHelpDialogOriginal","IntroTutorial/introTutorialWelcomeDialog"],type:"IntroTutorialWelcomeDialog"}),introTutorialSelectSite:new LPDialog.DialogLoader({id:"introTutorialSelectSiteDialog",htmlSource:"IntroTutorial/introTutorialSelectSiteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialImages","IntroTutorial/introTutorialSelectSiteDialog"],type:"IntroTutorialSelectSiteDialog"}),introTutorialComplete:new LPDialog.DialogLoader({id:"introTutorialCompleteDialog",htmlSource:"IntroTutorial/introTutorialCompleteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialCompleteDialog"],type:"IntroTutorialCompleteDialog"}),introTutorialHelp:new LPDialog.DialogLoader({id:"introTutorialHelpDialog",htmlSource:"IntroTutorial/introTutorialHelpDialog.html",css:"IntroTutorial/introTutorialHelpDialog",js:["IntroTutorial/introTutorialHelpDialog"],type:"IntroTutorialHelpDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"})}),dialogs.login=dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog",js:["extensionLoginDialog","selectDropdown","typeaheadDropdown"],type:"ExtensionLoginDialog"}),dialogs.siteTutorial=dialogs.site.extend({css:"IntroTutorial/introTutorialHelpDialogOriginal",js:["IntroTutorial/introTutorialHelpDialogOriginal","extensionSiteTutorialDialog"],type:"ExtensionSiteTutorialDialog"}),function(){var o=new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"extensionLoginDialogSimple.html",css:["fonts/opensans/opensans.css","loginDialog","extensionDialogSimple","extensionLoginDialogBase","lpGrid","backgroundOverlay"],js:["loginDialog","extensionLoginDialog","capslockstate","extensionLoginDialogSimple","selectDropdown","typeaheadDropdown","fieldValidator","backgroundOverlay"],type:"ExtensionLoginDialogSimple"});dialogs.loginSimple=o.extend({css:["extensionLoginDialogSimple"]}),dialogs.loginTab=o.extend({css:["extensionLoginDialogTab"]});var i=new LPDialog.DialogLoader({id:"createAccountDialog",css:["fonts/opensans/opensans.css","extensionDialogSimple","buttons","dialog","lpGrid","passwordMeter","backgroundOverlay","extensionCreateAccountBase"],js:["createAccountDialog","dialog","extensionCreateAccount","selectDropdown","passwordMeter","fieldValidator","backgroundOverlay","fieldToolTip","emailToolTip","buildVars"],type:"ExtensionCreateAccount"});dialogs.createAccountSimple=i.extend({htmlSource:"extensionCreateAccountDialogSimple.html",css:["extensionCreateAccountSimple"],js:["extensionCreateAccountSimple"],type:"ExtensionCreateAccountSimple"}),dialogs.createAccountIcon=i.extend({htmlSource:"extensionCreateAccountDialogIcon.html",css:["extensionCreateAccountIcon"],js:["extensionCreateAccountIcon","request","lpArrow"],type:"ExtensionCreateAccountIcon"})}();