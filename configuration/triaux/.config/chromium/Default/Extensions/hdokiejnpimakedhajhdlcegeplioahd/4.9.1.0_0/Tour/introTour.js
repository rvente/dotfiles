var IntroTour=function(e,t,r,n,o,s){"use strict";var u,i;function c(){i.laterThisTour(),s.save(i.getOptions())}function a(){i.neverThisTour(),s.save(i.getOptions())}function T(){i.takeThisTour(),s.save(i.getOptions())}function l(){u&&(u.closeCurrentStep(),u.unSubscribeAction("later"),u.unSubscribeAction("never"),u.unSubscribeAction("start"),u.unSubscribeAction("close"),u.cleanup(),u=null)}function b(e){o.get(o.CLEAR_DATA).subscribeFirst(function(){e&&e.cleanup&&e.cleanup()})}return{start:function(r){var n;l(),s.migrateOldPrefs(),r?(n=(i=new e).getAvailableTour(r))&&(u=new t(n),b(this),u.startFlow(r)):(i=new e(s.retrieve()),s.save(i.getOptions()),(n=i.getAvailableTour())?((u=new t(n)).subscribeToAction("later",c),u.subscribeToAction("never",a),u.subscribeToAction("start",T),u.subscribeToAction("close",l),b(this),u.startFlow(r)):o.get(o.INTRO_TOURS_LOADED).publish())},cleanup:l,neverThisTour:a,laterThisTour:c,takeThisTour:T,resetAllTours:function(){s.save(null)},makeLaterNowTours:function(){i.makeLaterNowTours(),s.save(i.getOptions())}}}(IntroTourQueue,IntroTourFlow,IntroTourData,LPProxy,Topics,IntroTourPreferences);
//# sourceMappingURL=sourcemaps/Tour/introTour.js.map
