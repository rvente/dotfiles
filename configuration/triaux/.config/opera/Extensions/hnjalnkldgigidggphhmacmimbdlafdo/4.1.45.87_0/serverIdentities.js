LPServer.identities=function(){var e=function(e,i){var t={iid:e.params.identity.iid,iname:e.params.identity.iname,edit:"1",aids:e.params.identity.aids,ffids:e.params.identity.ffids,appaids:e.params.identity.appaids};e.params.identity.pw_prompt&&(t.pwprotect="on"),LPServer.xmlRequest({url:"identity.php",data:t,success:i,userSupplied:e})},i=function(i){e(i,"identadded")},t=function(i){e(i,"identupdated")};return{add:i,remove:function(e){LPServer.xmlRequest({url:"identity.php",data:{src:"website",deleteext:1,iid:e.params.id},success:"identdeleted",userSupplied:e})},update:t}}();