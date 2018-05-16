// Generated by CoffeeScript 1.12.5
(function() {
  var fakeManifest, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.chromeMessages = [];

  document.hasFocus = function() {
    return true;
  };

  fakeManifest = {
    version: "1.51"
  };

  root.chrome = {
    runtime: {
      connect: function() {
        return {
          onMessage: {
            addListener: function() {}
          },
          onDisconnect: {
            addListener: function() {}
          },
          postMessage: function() {}
        };
      },
      onMessage: {
        addListener: function() {}
      },
      sendMessage: function(message) {
        return chromeMessages.unshift(message);
      },
      getManifest: function() {
        return fakeManifest;
      },
      getURL: function(url) {
        return "../../" + url;
      }
    },
    storage: {
      local: {
        get: function() {},
        set: function() {}
      },
      sync: {
        get: function(_, callback) {
          return typeof callback === "function" ? callback({}) : void 0;
        },
        set: function() {}
      },
      onChanged: {
        addListener: function() {}
      }
    },
    extension: {
      inIncognitoContext: false,
      getURL: function(url) {
        return chrome.runtime.getURL(url);
      }
    }
  };

}).call(this);