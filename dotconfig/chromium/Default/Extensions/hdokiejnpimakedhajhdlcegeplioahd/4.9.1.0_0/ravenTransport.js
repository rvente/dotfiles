var LPRavenTransport=function(){var n=null,e=[];return LPServer.lmiapi.jsonRequest({url:"lmiapi/environment-config",type:"GET",CSRFToken:!1,success:function(t){var u,r;(n=t.isSentryEnabled)&&e.length>0&&(u=e,(r=function(){if(u.length>0){var n=u.pop(),e=n.onSuccess;n.onSuccess=function(){return r(),e.apply(n,arguments)},Raven._makeRequest(n)}})(),e=[])}}),function(t){!1!==n?Raven._makeRequest(t):e.push(t)}}();
//# sourceMappingURL=sourcemaps/ravenTransport.js.map