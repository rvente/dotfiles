// Generated by CoffeeScript 1.12.5
(function() {
  var $, $$, HelpDialog, compareKeys, root,
    hasProp = {}.hasOwnProperty;

  $ = function(id) {
    return document.getElementById(id);
  };

  $$ = function(element, selector) {
    return element.querySelector(selector);
  };

  compareKeys = function(a, b) {
    a = a.replace("<", "~");
    b = b.replace("<", "~");
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  };

  HelpDialog = {
    dialogElement: null,
    isShowing: function() {
      return true;
    },
    getShowAdvancedCommands: function() {
      return Settings.get("helpDialog_showAdvancedCommands");
    },
    init: function() {
      if (this.dialogElement != null) {
        return;
      }
      this.dialogElement = document.getElementById("vimiumHelpDialog");
      this.dialogElement.getElementsByClassName("closeButton")[0].addEventListener("click", (function(_this) {
        return function(clickEvent) {
          clickEvent.preventDefault();
          return _this.hide();
        };
      })(this), false);
      document.getElementById("helpDialogOptionsPage").addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        return chrome.runtime.sendMessage({
          handler: "openOptionsPageInNewTab"
        });
      }, false);
      document.getElementById("toggleAdvancedCommands").addEventListener("click", HelpDialog.toggleAdvancedCommands.bind(HelpDialog), false);
      return document.documentElement.addEventListener("click", (function(_this) {
        return function(event) {
          if (!_this.dialogElement.contains(event.target)) {
            return _this.hide();
          }
        };
      })(this), false);
    },
    instantiateHtmlTemplate: function(parentNode, templateId, callback) {
      var node, templateContent;
      templateContent = document.querySelector(templateId).content;
      node = document.importNode(templateContent, true);
      parentNode.appendChild(node);
      return callback(parentNode.lastElementChild);
    },
    show: function(arg) {
      var showAllCommandDetails;
      showAllCommandDetails = arg.showAllCommandDetails;
      $("help-dialog-title").textContent = showAllCommandDetails ? "Command Listing" : "Help";
      $("help-dialog-version").textContent = Utils.getCurrentVersion();
      return chrome.storage.local.get("helpPageData", (function(_this) {
        return function(arg1) {
          var command, commands, container, descriptionElement, group, helpPageData, i, j, key, keysElement, lastElement, len, len1, ref, useTwoRows;
          helpPageData = arg1.helpPageData;
          for (group in helpPageData) {
            if (!hasProp.call(helpPageData, group)) continue;
            commands = helpPageData[group];
            container = _this.dialogElement.querySelector("#help-dialog-" + group);
            container.innerHTML = "";
            for (i = 0, len = commands.length; i < len; i++) {
              command = commands[i];
              if (!(showAllCommandDetails || 0 < command.keys.length)) {
                continue;
              }
              keysElement = null;
              descriptionElement = null;
              useTwoRows = 12 <= command.keys.join(", ").length;
              if (!useTwoRows) {
                _this.instantiateHtmlTemplate(container, "#helpDialogEntry", function(element) {
                  if (command.advanced) {
                    element.classList.add("advanced");
                  }
                  return keysElement = descriptionElement = element;
                });
              } else {
                _this.instantiateHtmlTemplate(container, "#helpDialogEntryBindingsOnly", function(element) {
                  if (command.advanced) {
                    element.classList.add("advanced");
                  }
                  return keysElement = element;
                });
                _this.instantiateHtmlTemplate(container, "#helpDialogEntry", function(element) {
                  if (command.advanced) {
                    element.classList.add("advanced");
                  }
                  return descriptionElement = element;
                });
              }
              $$(descriptionElement, ".vimiumHelpDescription").textContent = command.description;
              keysElement = $$(keysElement, ".vimiumKeyBindings");
              lastElement = null;
              ref = command.keys.sort(compareKeys);
              for (j = 0, len1 = ref.length; j < len1; j++) {
                key = ref[j];
                _this.instantiateHtmlTemplate(keysElement, "#keysTemplate", function(element) {
                  lastElement = element;
                  return $$(element, ".vimiumHelpDialogKey").innerHTML = Utils.escapeHtml(key);
                });
              }
              if (lastElement) {
                lastElement.removeChild($$(lastElement, ".commaSeparator"));
              }
              if (showAllCommandDetails) {
                _this.instantiateHtmlTemplate($$(descriptionElement, ".vimiumHelpDescription"), "#commandNameTemplate", function(element) {
                  var commandNameElement;
                  commandNameElement = $$(element, ".vimiumCopyCommandNameName");
                  commandNameElement.textContent = command.command;
                  commandNameElement.title = "Click to copy \"" + command.command + "\" to clipboard.";
                  return commandNameElement.addEventListener("click", function() {
                    chrome.runtime.sendMessage({
                      handler: "copyToClipboard",
                      data: commandNameElement.textContent
                    });
                    return HUD.showForDuration("Yanked " + commandNameElement.textContent + ".", 2000);
                  });
                });
              }
            }
          }
          _this.showAdvancedCommands(_this.getShowAdvancedCommands());
          return DomUtils.simulateClick(_this.dialogElement);
        };
      })(this));
    },
    hide: function() {
      return UIComponentServer.hide();
    },
    toggle: function() {
      return this.hide();
    },
    toggleAdvancedCommands: function(event) {
      var scrollHeightBefore, scrollHeightDelta, showAdvanced, vimiumHelpDialogContainer;
      vimiumHelpDialogContainer = $("vimiumHelpDialogContainer");
      scrollHeightBefore = vimiumHelpDialogContainer.scrollHeight;
      event.preventDefault();
      showAdvanced = HelpDialog.getShowAdvancedCommands();
      HelpDialog.showAdvancedCommands(!showAdvanced);
      Settings.set("helpDialog_showAdvancedCommands", !showAdvanced);
      scrollHeightDelta = vimiumHelpDialogContainer.scrollHeight - scrollHeightBefore;
      if (0 < scrollHeightDelta) {
        return vimiumHelpDialogContainer.scrollTop += scrollHeightDelta;
      }
    },
    showAdvancedCommands: function(visible) {
      var addOrRemove;
      document.getElementById("toggleAdvancedCommands").innerHTML = visible ? "Hide advanced commands" : "Show advanced commands";
      addOrRemove = visible ? "add" : "remove";
      return HelpDialog.dialogElement.classList[addOrRemove]("showAdvanced");
    }
  };

  UIComponentServer.registerHandler(function(event) {
    var ref;
    switch ((ref = event.data.name) != null ? ref : event.data) {
      case "hide":
        return HelpDialog.hide();
      case "activate":
        HelpDialog.init();
        HelpDialog.show(event.data);
        Frame.postMessage("registerFrame");
        return Mode.setIndicator();
      case "hidden":
        Frame.postMessage("unregisterFrame");
        return HUD.abandon();
    }
  });

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.HelpDialog = HelpDialog;

  root.isVimiumHelpDialog = true;

}).call(this);
