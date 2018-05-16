// Generated by CoffeeScript 1.12.5
(function() {
  var CaretMode, Movement, VisualLineMode, VisualMode, backward, character, forward, line, lineboundary, paragraph, root, sentence, vimword, word,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  forward = "forward";

  backward = "backward";

  character = "character";

  word = "word";

  line = "line";

  sentence = "sentence";

  paragraph = "paragraph";

  vimword = "vimword";

  lineboundary = "lineboundary";

  Movement = (function() {
    Movement.prototype.opposite = {
      forward: backward,
      backward: forward
    };

    function Movement(alterMethod) {
      this.alterMethod = alterMethod;
      this.selection = window.getSelection();
    }

    Movement.prototype.getNextForwardCharacter = function() {
      var afterText, beforeText;
      beforeText = this.selection.toString();
      if (beforeText.length === 0 || this.getDirection() === forward) {
        this.selection.modify("extend", forward, character);
        afterText = this.selection.toString();
        if (beforeText !== afterText) {
          this.selection.modify("extend", backward, character);
          return afterText[afterText.length - 1];
        }
      } else {
        return beforeText[0];
      }
    };

    Movement.prototype.nextCharacterIsWordCharacter = (function() {
      var regexp;
      regexp = null;
      return function() {
        regexp || (regexp = /[_0-9\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/);
        return regexp.test(this.getNextForwardCharacter());
      };
    })();

    Movement.prototype.runMovement = function() {
      var args, direction, granularity, ref;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      ref = typeof args[0] === "string" && args.length === 1 ? args[0].trim().split(/\s+/) : args.length === 1 ? args[0] : args.slice(0, 2), direction = ref[0], granularity = ref[1];
      if (granularity === vimword && direction === forward) {
        while (this.nextCharacterIsWordCharacter()) {
          if (!this.runMovements([forward, character])) {
            return;
          }
        }
        while (this.getNextForwardCharacter() && !this.nextCharacterIsWordCharacter()) {
          if (!this.runMovements([forward, character])) {
            return;
          }
        }
      } else if (granularity === vimword) {
        this.selection.modify(this.alterMethod, backward, word);
      }
      if (granularity === word && direction === forward) {
        while (this.getNextForwardCharacter() && !this.nextCharacterIsWordCharacter()) {
          if (!this.runMovements([forward, character])) {
            return;
          }
        }
        while (this.nextCharacterIsWordCharacter()) {
          if (!this.runMovements([forward, character])) {
            return;
          }
        }
      } else {
        return this.selection.modify(this.alterMethod, direction, granularity);
      }
    };

    Movement.prototype.hashSelection = function() {
      var range;
      range = this.selection.getRangeAt(0);
      return [this.selection.toString().length, range.anchorOffset, range.focusOffset, this.selection.extentOffset, this.selection.baseOffset].join("/");
    };

    Movement.prototype.selectionChanged = function(func) {
      var before;
      before = this.hashSelection();
      func();
      return this.hashSelection() !== before;
    };

    Movement.prototype.runMovements = function() {
      var i, len, movement, movements;
      movements = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = movements.length; i < len; i++) {
        movement = movements[i];
        if (!this.selectionChanged((function(_this) {
          return function() {
            return _this.runMovement(movement);
          };
        })(this))) {
          return false;
        }
      }
      return true;
    };

    Movement.prototype.reverseSelection = function() {
      var direction, element, i, length, original, range, ref, results, which;
      direction = this.getDirection();
      element = document.activeElement;
      if (element && DomUtils.isEditable(element) && !element.isContentEditable) {
        length = this.selection.toString().length;
        this.collapseSelectionToFocus();
        results = [];
        for (i = 0, ref = length; 0 <= ref ? i < ref : i > ref; 0 <= ref ? i++ : i--) {
          results.push(this.runMovement(this.opposite[direction], character));
        }
        return results;
      } else {
        original = this.selection.getRangeAt(0).cloneRange();
        range = original.cloneRange();
        range.collapse(direction === backward);
        this.setSelectionRange(range);
        which = direction === forward ? "start" : "end";
        return this.selection.extend(original[which + "Container"], original[which + "Offset"]);
      }
    };

    Movement.prototype.extendByOneCharacter = function(direction) {
      var length;
      length = this.selection.toString().length;
      this.selection.modify("extend", direction, character);
      return this.selection.toString().length - length;
    };

    Movement.prototype.getDirection = function() {
      var change, direction, i, len, ref;
      ref = [forward, backward];
      for (i = 0, len = ref.length; i < len; i++) {
        direction = ref[i];
        if (change = this.extendByOneCharacter(direction)) {
          this.extendByOneCharacter(this.opposite[direction]);
          if (0 < change) {
            return direction;
          } else {
            return this.opposite[direction];
          }
        }
      }
      return forward;
    };

    Movement.prototype.collapseSelectionToAnchor = function() {
      if (0 < this.selection.toString().length) {
        return this.selection[this.getDirection() === backward ? "collapseToEnd" : "collapseToStart"]();
      }
    };

    Movement.prototype.collapseSelectionToFocus = function() {
      if (0 < this.selection.toString().length) {
        return this.selection[this.getDirection() === forward ? "collapseToEnd" : "collapseToStart"]();
      }
    };

    Movement.prototype.setSelectionRange = function(range) {
      this.selection.removeAllRanges();
      return this.selection.addRange(range);
    };

    Movement.prototype.selectLexicalEntity = function(entity, count) {
      var i, ref, results;
      if (count == null) {
        count = 1;
      }
      this.collapseSelectionToFocus();
      if (entity === word) {
        this.runMovement([forward, character]);
      }
      this.runMovement([backward, entity]);
      this.collapseSelectionToFocus();
      results = [];
      for (i = 0, ref = count; i < ref; i += 1) {
        results.push(this.runMovement([forward, entity]));
      }
      return results;
    };

    Movement.prototype.selectLine = function(count) {
      var i, ref;
      this.alterMethod = "extend";
      if (this.getDirection() === forward) {
        this.reverseSelection();
      }
      this.runMovement(backward, lineboundary);
      this.reverseSelection();
      for (i = 1, ref = count; i < ref; i += 1) {
        this.runMovement(forward, line);
      }
      this.runMovement(forward, lineboundary);
      if (this.getNextForwardCharacter() === "\n") {
        return this.runMovement(forward, character);
      }
    };

    Movement.prototype.scrollIntoView = function() {
      var elementWithFocus;
      if (this.selection.type !== "None") {
        elementWithFocus = DomUtils.getElementWithFocus(this.selection, this.getDirection() === backward);
        if (elementWithFocus) {
          return Scroller.scrollIntoView(elementWithFocus);
        }
      }
    };

    return Movement;

  })();

  VisualMode = (function(superClass) {
    extend1(VisualMode, superClass);

    VisualMode.prototype.movements = {
      "l": "forward character",
      "h": "backward character",
      "j": "forward line",
      "k": "backward line",
      "e": "forward word",
      "b": "backward word",
      "w": "forward vimword",
      ")": "forward sentence",
      "(": "backward sentence",
      "}": "forward paragraph",
      "{": "backward paragraph",
      "0": "backward lineboundary",
      "$": "forward lineboundary",
      "G": "forward documentboundary",
      "gg": "backward documentboundary",
      "aw": function(count) {
        return this.movement.selectLexicalEntity(word, count);
      },
      "as": function(count) {
        return this.movement.selectLexicalEntity(sentence, count);
      },
      "n": function(count) {
        return this.find(count, false);
      },
      "N": function(count) {
        return this.find(count, true);
      },
      "/": function() {
        this.exit();
        return new FindMode({
          returnToViewport: true
        }).onExit(function() {
          return new VisualMode;
        });
      },
      "y": function() {
        return this.yank();
      },
      "Y": function(count) {
        this.movement.selectLine(count);
        return this.yank();
      },
      "p": function() {
        return chrome.runtime.sendMessage({
          handler: "openUrlInCurrentTab",
          url: this.yank()
        });
      },
      "P": function() {
        return chrome.runtime.sendMessage({
          handler: "openUrlInNewTab",
          url: this.yank()
        });
      },
      "v": function() {
        return new VisualMode;
      },
      "V": function() {
        return new VisualLineMode;
      },
      "c": function() {
        if (this.name === "caret" || this.selection.toString().length <= 1) {
          this.movement.collapseSelectionToAnchor();
        } else {
          this.movement.collapseSelectionToFocus();
        }
        return new CaretMode;
      },
      "o": function() {
        return this.movement.reverseSelection();
      }
    };

    function VisualMode(options) {
      var keyMapping, keys, movement, name, obj, ref, ref1, ref2, ref3, ref4, selectionRect;
      if (options == null) {
        options = {};
      }
      this.find = bind(this.find, this);
      this.movement = new Movement((ref = options.alterMethod) != null ? ref : "extend");
      this.selection = this.movement.selection;
      keyMapping = {};
      ref1 = this.movements;
      for (keys in ref1) {
        if (!hasProp.call(ref1, keys)) continue;
        movement = ref1[keys];
        if ("function" === typeof movement) {
          movement = movement.bind(this);
        }
        if (keys.length === 1) {
          keyMapping[keys] = {
            command: movement
          };
        } else {
          if (keyMapping[name = keys[0]] == null) {
            keyMapping[name] = {};
          }
          extend(keyMapping[keys[0]], (
            obj = {},
            obj["" + keys[1]] = {
              command: movement
            },
            obj
          ));
        }
      }
      extend(keyMapping, {
        "B": keyMapping.b,
        "W": keyMapping.w,
        "<c-e>": {
          command: function(count) {
            return Scroller.scrollBy("y", count * Settings.get("scrollStepSize"), 1, false);
          }
        },
        "<c-y>": {
          command: function(count) {
            return Scroller.scrollBy("y", -count * Settings.get("scrollStepSize"), 1, false);
          }
        }
      });
      VisualMode.__super__.constructor.call(this, extend(options, {
        name: (ref2 = options.name) != null ? ref2 : "visual",
        indicator: (ref3 = options.indicator) != null ? ref3 : "Visual mode",
        singleton: "visual-mode-group",
        exitOnEscape: true,
        suppressAllKeyboardEvents: true,
        keyMapping: keyMapping,
        commandHandler: this.commandHandler.bind(this)
      }));
      this.shouldRetainSelectionOnExit = this.options.userLaunchedMode && this.selection.type === "Range";
      this.onExit((function(_this) {
        return function(event) {
          if (event == null) {
            event = null;
          }
          if (_this.shouldRetainSelectionOnExit) {
            null;
          } else if ((event != null ? event.type : void 0) === "keydown" && KeyboardUtils.isEscape(event) && _this.name !== "caret") {
            _this.movement.collapseSelectionToFocus();
          } else {
            _this.movement.collapseSelectionToAnchor();
          }
          if (document.activeElement && DomUtils.isEditable(document.activeElement)) {
            if ((event != null ? event.type : void 0) !== "click") {
              return document.activeElement.blur();
            }
          }
        };
      })(this));
      this.push({
        _name: this.id + "/enter/click",
        keypress: (function(_this) {
          return function(event) {
            if (event.key === "Enter") {
              if (!(event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)) {
                _this.yank();
                return _this.suppressEvent;
              }
            }
            return _this.continueBubbling;
          };
        })(this),
        click: (function(_this) {
          return function(event) {
            return _this.alwaysContinueBubbling(function() {
              if (DomUtils.isFocusable(event.target)) {
                return _this.exit(event);
              }
            });
          };
        })(this)
      });
      if (this.name !== "caret") {
        if ((ref4 = this.selection.type) === "Caret" || ref4 === "Range") {
          selectionRect = this.selection.getRangeAt(0).getBoundingClientRect();
          if (window.vimiumDomTestsAreRunning) {
            selectionRect || (selectionRect = {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            });
          }
          selectionRect = Rect.intersect(selectionRect, Rect.create(0, 0, window.innerWidth, window.innerHeight));
          if (selectionRect.height >= 0 && selectionRect.width >= 0) {
            if (this.selection.type === "Caret") {
              this.movement.extendByOneCharacter(forward) || this.movement.extendByOneCharacter(backward);
            }
          } else {
            this.selection.removeAllRanges();
          }
        }
        if (this.selection.type !== "Range" && this.name !== "caret") {
          new CaretMode;
          HUD.showForDuration("No usable selection, entering caret mode...", 2500);
        }
      }
    }

    VisualMode.prototype.commandHandler = function(arg) {
      var command, count, i, ref, ref1;
      (ref = arg.command, command = ref.command), count = arg.count;
      switch (typeof command) {
        case "string":
          for (i = 0, ref1 = count; i < ref1; i += 1) {
            this.movement.runMovement(command);
          }
          break;
        case "function":
          command(count);
      }
      return this.movement.scrollIntoView();
    };

    VisualMode.prototype.find = function(count, backwards) {
      var i, initialRange, ref;
      initialRange = this.selection.getRangeAt(0).cloneRange();
      for (i = 0, ref = count; i < ref; i += 1) {
        if (!FindMode.execute(null, {
          colorSelection: false,
          backwards: backwards
        })) {
          this.movement.setSelectionRange(initialRange);
          HUD.showForDuration("No matches for '" + FindMode.query.rawQuery + "'", 1000);
          return;
        }
      }
      if (this.name === "caret" && 0 < this.selection.toString().length) {
        return new VisualMode;
      }
    };

    VisualMode.prototype.yank = function(args) {
      var message, plural;
      if (args == null) {
        args = {};
      }
      this.yankedText = this.selection.toString();
      this.exit();
      chrome.runtime.sendMessage({
        handler: "copyToClipboard",
        data: this.yankedText
      });
      message = this.yankedText.replace(/\s+/g, " ");
      if (15 < this.yankedText.length) {
        message = message.slice(0, 12) + "...";
      }
      plural = this.yankedText.length === 1 ? "" : "s";
      HUD.showForDuration("Yanked " + this.yankedText.length + " character" + plural + ": \"" + message + "\".", 2500);
      return this.yankedText;
    };

    return VisualMode;

  })(KeyHandlerMode);

  VisualLineMode = (function(superClass) {
    extend1(VisualLineMode, superClass);

    function VisualLineMode(options) {
      if (options == null) {
        options = {};
      }
      VisualLineMode.__super__.constructor.call(this, extend(options, {
        name: "visual/line",
        indicator: "Visual mode (line)"
      }));
      this.extendSelection();
    }

    VisualLineMode.prototype.commandHandler = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      VisualLineMode.__super__.commandHandler.apply(this, args);
      if (this.modeIsActive) {
        return this.extendSelection();
      }
    };

    VisualLineMode.prototype.extendSelection = function() {
      var direction, i, initialDirection, len, ref, results;
      initialDirection = this.movement.getDirection();
      ref = [initialDirection, this.movement.opposite[initialDirection]];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        direction = ref[i];
        this.movement.runMovement(direction, lineboundary);
        results.push(this.movement.reverseSelection());
      }
      return results;
    };

    return VisualLineMode;

  })(VisualMode);

  CaretMode = (function(superClass) {
    extend1(CaretMode, superClass);

    function CaretMode(options) {
      if (options == null) {
        options = {};
      }
      CaretMode.__super__.constructor.call(this, extend(options, {
        name: "caret",
        indicator: "Caret mode",
        alterMethod: "move"
      }));
      switch (this.selection.type) {
        case "None":
          this.establishInitialSelectionAnchor();
          if (this.selection.type === "None") {
            this.exit();
            HUD.showForDuration("Create a selection before entering visual mode.", 2500);
            return;
          }
          break;
        case "Range":
          this.movement.collapseSelectionToAnchor();
      }
      this.movement.extendByOneCharacter(forward);
      this.movement.scrollIntoView();
    }

    CaretMode.prototype.commandHandler = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      this.movement.collapseSelectionToAnchor();
      CaretMode.__super__.commandHandler.apply(this, args);
      if (this.modeIsActive) {
        return this.movement.extendByOneCharacter(forward);
      }
    };

    CaretMode.prototype.establishInitialSelectionAnchor = function() {
      var element, node, nodes, offset, range;
      nodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (node = nodes.nextNode()) {
        if (node.nodeType === 3 && 50 <= node.data.trim().length) {
          element = node.parentElement;
          if (DomUtils.getVisibleClientRect(element) && !DomUtils.isEditable(element)) {
            offset = node.data.length - node.data.replace(/^\s+/, "").length;
            range = document.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset);
            this.movement.setSelectionRange(range);
            return true;
          }
        }
      }
      return false;
    };

    return CaretMode;

  })(VisualMode);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.VisualMode = VisualMode;

  root.VisualLineMode = VisualLineMode;

}).call(this);
