LPBackgroundRequester=function(e){return function(t,n){var i,a,r=this,o=null,s=!1,c=[],u=(n=n||{}).interfaceDefinition,f=Date.now(),d=function(e){e.sourceFrameID=o,LPMessaging.makeRequest(i,e)},l=(a=function(e){if(e.frameID===o)switch(e.type){case"backgroundResponse":case"contentScriptResponse":l=e.data,LPMessaging.handleResponse(l);break;case"contentScriptRequest":t=e.data,a=e.sourceFrameID,LPMessaging.handleRequest(u,t,function(e){d({type:"contentScriptResponse",data:e,frameID:a})},{context:n.reflectionContext,additionalArguments:a})}else"initialization"===e.type&&function(e){if(null===o&&e.request.initializationID===f){"undefined"!=typeof Topics&&Topics.get(Topics.REQUEST_FRAMEWORK_INITIALIZED).publish(e,r),o=e.frameID,s=!1,i({type:"initialized",sourceFrameID:o});for(var t=0,n=c.length;t<n;++t)c[t]()}}(e.data);var t,a,l},e.Raven?e.Raven.wrap(a):a),m=function(t){var a,r,o,s;a=function(){i({type:"initialize",data:{initializationID:f,interfaceName:n.interfaceName,top:n.mainRequestFramework,url:e.location.href,childFrameCount:document.getElementsByTagName("iframe").length,frameIdentity:t}})},r=n.reflectionContext||e,o=!1,(s=function(){var e="interactive"===document.readyState||"complete"===document.readyState;return e&&!o&&(o=!0,r.removeEventListener("readystatechange",s,!0),a()),e})()||r.addEventListener("readystatechange",s,!0)};this.initialize=function(e){null!==o||s||(i=t(l),n.frameIdentityManager?n.frameIdentityManager.getFrameIdentity(m):m(),s=!0),e&&c.push(e)},this.sendRequest=function(e){null===o?this.initialize(function(){d(e)}):d(e)}}}(this);
//# sourceMappingURL=sourcemaps/backgroundRequester.js.map
