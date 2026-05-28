mp.events.add("ToggleAfk", () => {
  mp.events.callRemote("1357684428");
});
mp.events.add("CallSkills", skill => {
  mp.events.callRemote("387448541", skill);
});
mp.events.add('CallSearch', zone => {
  mp.events.callRemote('1767556280', zone);
});
mp.events.add("JailStart", () => {
  mp.events.callRemote("3857181076");
});
mp.events.add("JailStop", () => {
  mp.events.callRemote("2752742125", "broom_clean", false);
});
mp.events.add("Eat", arg => {
  mp.events.callRemote("3650357649", arg);
});
(function () {
  try {
    function _0x414e0a(_0x3ea75f, _0x9c2bd7, _0x448d8d = 0.0001) {
      return Math.abs(_0x3ea75f.x - _0x9c2bd7.x) < _0x448d8d && Math.abs(_0x3ea75f.y - _0x9c2bd7.y) < _0x448d8d && Math.abs(_0x3ea75f.z - _0x9c2bd7.z) < _0x448d8d;
    }
    function _0x2264d4(_0x1bbbd4, _0x47f36b, _0x2117f0 = 2, _0xd4647d = 0.5) {
      native.taskFollowNavMeshToCoord(_0x1bbbd4.scriptID, _0x47f36b.x, _0x47f36b.y, _0x47f36b.z, _0x2117f0, -1, _0xd4647d, 0, 0);
    }
    function _0x76660() {
      const _0x1f53e9 = alt.Player.local.pos;
      native.drawMarker(1, _0x1f53e9.x, _0x1f53e9.y, _0x1f53e9.z - 25, 0, 0, 0, 0, 0, 0, 45, 45, 50, 255, 255, 255, 100, false, true, 2, false, null, null, false);
    }
    function _0x2cea3f(_0x43d400, _0x3a297e) {
      let _0x44aae5 = null;
      let _0xd05039 = Infinity;
      for (let _0x1578b9 of _0x3a297e) {
        const _0x4e5baf = Math.sqrt((_0x43d400.pos.x - _0x1578b9.x) ** 2 + (_0x43d400.pos.y - _0x1578b9.y) ** 2 + (_0x43d400.pos.z - _0x1578b9.z) ** 2);
        if (_0x4e5baf < _0xd05039) {
          _0xd05039 = _0x4e5baf;
          _0x44aae5 = _0x1578b9;
        }
      }
      return _0x44aae5;
    }
    function _0x36648d(_0x1b25cc) {
      const _0x5d351e = mp.inventory?.["mainStorage"]?.[1];
      if (!_0x5d351e || !Array.isArray(_0x5d351e.items)) {
        return 0;
      }
      return _0x5d351e.items.reduce((_0x67d68, _0x3a3330) => {
        return _0x3a3330.itemId === _0x1b25cc ? _0x67d68 + _0x3a3330.count : _0x67d68;
      }, 0);
    }
    var _0x54fb21 = [{
      'id': 'orangeBot',
      'name': "Апельсины",
      'eventName': "OrangeBot",
      'category': 'Работы',
      'disabled': false
    }, {
      'id': "treeBot",
      'name': " Лесоруб",
      'eventName': "TreeBot",
      'category': "Работы",
      'disabled': false
    }, {
      'id': 'mineAxeBot',
      'name': " Карьер",
      'eventName': "MineAxeBot",
      'category': "Работы",
      'disabled': false
    }, {
      'id': "metalDetectBot",
      'name': " Клады",
      'eventName': "MetalBot",
      'category': 'Работы',
      'disabled': false
    }, {
      'id': "shroomBot",
      'name': " Грибы",
      'eventName': "ShroomBot",
      'category': "Работы",
      'disabled': false
    }, {
      'id': "farmAbuse",
      'name': " Абуз фермы",
      'eventName': "FarmAbuse",
      'category': 'Работы',
      'disabled': false
    }, {
      'id': "seemBot",
      'name': " Швейка",
      'eventName': "SeemBot",
      'category': "Структуры",
      'disabled': false
    }, {
      'id': 'hijacker',
      'name': " Угонки",
      'eventName': "HijackerBot",
      'category': "Структуры",
      'disabled': false
    }, {
      'id': "taxi",
      'name': " Такси",
      'eventName': 'TaxiBot',
      'category': 'Работы',
      'disabled': false
    }, {
      'id': "skills",
      'name': " Скиллы",
      'eventName': "SkillsBot",
      'category': "Общее",
      'disabled': true
    }, {
      'id': 'jail',
      'name': " Деморган",
      'eventName': "JailBot",
      'category': "Общее",
      'disabled': false
    }, {
      'id': 'food',
      'name': "Авто еда, вода",
      'eventName': "FoodBot",
      'category': "Общее",
      'disabled': true
    }, {
      'id': 'fish',
      'name': " Рыбалка х3 ",
      'eventName': "FishBot",
      'category': 'Работы',
      'disabled': false
    }, {
      'id': 'legitFish',
      'name': " Легит Рыбалка",
      'eventName': "LegitFishBot",
      'category': 'Работы',
      'disabled': false
    }, {
      'id': "emsPills",
      'name': " EMS Таблетки",
      'eventName': "EMSPills",
      'category': "Структуры",
      'disabled': false
    }, {
      'id': 'antiAfk',
      'name': " Анти-афк",
      'eventName': 'AntiAfk',
      'category': "Общее",
      'disabled': true
    }];
    var _0x510e0d = _0x54fb21.reduce((_0x2eccc1, _0x436076) => {
      if (!_0x2eccc1[_0x436076.category]) {
        _0x2eccc1[_0x436076.category] = [];
      }
      _0x2eccc1[_0x436076.category].push(_0x436076);
      return _0x2eccc1;
    }, {});
    var _0x55e8d4 = ["Работы", "Структуры", "Общее"];
    function _0x478c5f(_0x530551, _0x12a9d5) {
      let _0x547910 = "<h5>" + _0x530551 + "</h5>";
      _0x12a9d5.forEach(_0x55742a => {
        _0x547910 += "\n      <div class=\"form-check form-switch\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"bot-" + _0x55742a.id + "\" \n          onchange=\"toggleBot('" + _0x55742a.eventName + "', this.checked)\" " + (_0x55742a.disabled ? "disabled" : '') + ">\n        <label class=\"form-check-label\" for=\"bot-" + _0x55742a.id + "\">" + _0x55742a.name + "</label>\n      </div>\n    ";
      });
      return _0x547910;
    }
    var _0x167659 = '';
    _0x55e8d4.forEach(_0x4d869e => {
      if (_0x510e0d[_0x4d869e]) {
        _0x167659 += "<div class=\"column\">" + _0x478c5f(_0x4d869e, _0x510e0d[_0x4d869e]) + '</div>';
      }
    });
    var _0x34d3b7 = "\n  <div class=\"columns-container\">\n    " + _0x167659 + "\n  </div>\n";
    var _0x664eb5 = "\n  <!DOCTYPE html>\n  <html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Bot Menu</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- Подключение шрифта Play -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Play&display=swap\" rel=\"stylesheet\">\n    <!-- Bootstrap 5 CSS -->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <style>\n      body {\n        background: transparent;\n        font-size: 14px;\n        margin: 0;\n        padding: 0;\n        user-select: none;\n        font-family: 'Play', serif;\n        color: #ddd;\n      }\n      #menu {\n        width: auto;\n        min-width: 300px;\n        background: #2b2b2b;\n        border-radius: 10px;\n        box-shadow: 0 8px 16px rgba(0,0,0,0.8);\n        position: absolute;\n        top: 50px;\n        left: 50px;\n        padding: 16px;\n      }\n      /* Заголовок с разными цветами для слов */\n      #menu .title {\n        background: #444;\n        padding: 10px 12px;\n        border-radius: 6px;\n        cursor: move;\n        font-weight: 500;\n        font-size: 18px;\n        text-align: center;\n        margin-bottom: 16px;\n      }\n      /* Убираем отступ между Eye и Squad */\n      #menu .title .title-eye,\n      #menu .title .title-squad {\n        margin: 0;\n      }\n      #menu .title .title-eye {\n        color: #00BFFF; /* Яркий голубой для \"t.me/\" */\n      }\n      #menu .title .title-squad {\n        color: #f1c40f; /* Жёлтый для \"Ret9_Official\" */\n      }\n      #menu .content {\n        padding: 4px 8px;\n      }\n      .columns-container {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        gap: 16px;\n      }\n      .column {\n        display: flex;\n        flex-direction: column;\n      }\n      h5 {\n        margin: 0 0 8px;\n        font-size: 16px;\n        border-bottom: 2px solid #555;\n        padding-bottom: 4px;\n        color: #ccc;\n      }\n      .form-check {\n        margin-bottom: 8px;\n      }\n      .form-check-input {\n        cursor: pointer;\n      }\n      .form-check-label {\n        white-space: nowrap;\n        cursor: pointer;\n        font-size: 14px;\n        color: #ccc;\n      }\n      .form-check-input:checked {\n        background-color: #4a90e2;\n        border-color: #4a90e2;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"menu\">\n      <div class=\"title\">\n        <span class=\"title-eye\">t.me/</span><span class=\"title-squad\">Ret9_Official</span> Manta AIO\n      </div>\n      <div class=\"content\">\n        " + _0x34d3b7 + "\n      </div>\n    </div>\n    <script>\n      // Функция, вызываемая при переключении бота\n      function toggleBot(eventName, state) {\n        if (window.alt) {\n          window.alt.emit('menu:toggleBot', eventName, state);\n        }\n      }\n      // Перетаскивание меню\n      (function() {\n        const menu = document.getElementById('menu');\n        const title = menu.querySelector('.title');\n        let offsetX = 0, offsetY = 0, isDragging = false;\n        title.addEventListener('mousedown', function(e) {\n          isDragging = true;\n          offsetX = e.clientX - menu.offsetLeft;\n          offsetY = e.clientY - menu.offsetTop;\n          document.addEventListener('mousemove', onMouseMove);\n          document.addEventListener('mouseup', onMouseUp);\n        });\n        function onMouseMove(e) {\n          if (isDragging) {\n            menu.style.left = (e.clientX - offsetX) + 'px';\n            menu.style.top = (e.clientY - offsetY) + 'px';\n          }\n        }\n        function onMouseUp() {\n          isDragging = false;\n          document.removeEventListener('mousemove', onMouseMove);\n          document.removeEventListener('mouseup', onMouseUp);\n        }\n      })();\n    </script>\n    <script>\n      // Обработчик события для обновления состояния переключателя\n      window.alt.on(\"menu:updateToggle\", (botId, state) => {\n        const checkbox = document.getElementById(\"bot-\" + botId);\n        if (checkbox) {\n          checkbox.checked = state;\n        }\n      });\n    </script>\n  </body>\n  </html>\n";
    var _0x17cc3f = "data:text/html;charset=utf-8," + encodeURIComponent(_0x664eb5);
    var _0x4882c4 = new alt.WebView(_0x17cc3f);
    _0x4882c4.isVisible = true;
    alt.showCursor(true);
    alt.toggleGameControls(false);
    _0x4882c4.focus();
    var _0x8026e = true;
    _0x4882c4.on("menu:toggleBot", (_0x15c583, _0xefc9b5) => {
      alt.emit("menu:toggleBot", _0x15c583, _0xefc9b5);
    });
    function _0x1f2757() {
      if (_0x8026e) {
        _0x4882c4.unfocus();
        _0x4882c4.isVisible = false;
        _0x8026e = false;
        alt.showCursor(false);
        alt.toggleGameControls(true);
      } else {
        _0x4882c4.isVisible = true;
        _0x4882c4.focus();
        _0x8026e = true;
        alt.showCursor(true);
        alt.toggleGameControls(false);
      }
    }
    var _0x4b3dc2 = [{
      'x': 2324.622,
      'y': 4746.794,
      'z': 35.21409
    }, {
      'x': 2325.839,
      'y': 4761.718,
      'z': 34.9489
    }, {
      'x': 2327.635,
      'y': 4770.847,
      'z': 35.03209
    }, {
      'x': 2339.365,
      'y': 4741.141,
      'z': 33.95229
    }, {
      'x': 2343.661,
      'y': 4755.689,
      'z': 33.65644
    }, {
      'x': 2339.416,
      'y': 4767.201,
      'z': 33.51996
    }, {
      'x': 2353.558,
      'y': 4760.437,
      'z': 32.84432
    }, {
      'x': 2350.412,
      'y': 4734.031,
      'z': 33.71427
    }, {
      'x': 2367.121,
      'y': 4751.343,
      'z': 32.56113
    }, {
      'x': 2364.923,
      'y': 4729.657,
      'z': 33.01887
    }, {
      'x': 2359.232,
      'y': 4723.803,
      'z': 33.41597
    }, {
      'x': 2366.901,
      'y': 4715.882,
      'z': 33.16764
    }, {
      'x': 2374.717,
      'y': 4735.108,
      'z': 32.57
    }, {
      'x': 2386.949,
      'y': 4736.203,
      'z': 32.1963
    }, {
      'x': 2383.16,
      'y': 4713.14,
      'z': 32.60537
    }, {
      'x': 2386.842,
      'y': 4724.461,
      'z': 32.60415
    }, {
      'x': 2381.631,
      'y': 4700.619,
      'z': 32.7961
    }, {
      'x': 2402.223,
      'y': 4717.184,
      'z': 32.17873
    }, {
      'x': 2389.921,
      'y': 4691.092,
      'z': 32.86087
    }, {
      'x': 2404.507,
      'y': 4703.914,
      'z': 32.32716
    }, {
      'x': 2412.787,
      'y': 4707.325,
      'z': 31.93828
    }, {
      'x': 2423.924,
      'y': 4697.846,
      'z': 32.03318
    }, {
      'x': 2401.711,
      'y': 4688.248,
      'z': 32.47532
    }, {
      'x': 2406.985,
      'y': 4676.884,
      'z': 32.92984
    }, {
      'x': 2422.176,
      'y': 4686.693,
      'z': 32.6501
    }, {
      'x': 2419.713,
      'y': 4673.969,
      'z': 32.84568
    }, {
      'x': 2434.335,
      'y': 4678.698,
      'z': 32.3723
    }, {
      'x': 2423.865,
      'y': 4658.72,
      'z': 32.60431
    }, {
      'x': 2443.424,
      'y': 4672.264,
      'z': 32.24414
    }];
    var _0x5bbbcc = 0;
    var _0x79791 = false;
    function _0x51f302() {
      if (!_0x79791) {
        return;
      }
      const _0x295f92 = _0x4b3dc2[_0x5bbbcc];
      _0x2264d4(alt.Player.local, _0x295f92);
    }
    alt.onServer("$bridge$enterColshape", (_0x52a79c, _0x4b8ec5, _0x374fff, _0x579b22, _0x14af72) => {
      if (_0x79791 && _0x14af72 && _0x14af72.hasOwnProperty("orangeTree")) {
        alt.emit("keyup", 69);
        const _0x229eb0 = Math.floor(Math.random() * 2000) + 3000;
        alt.setTimeout(() => alt.emit("workMiniGames.farmerFinished", true), _0x229eb0);
      }
    });
    alt.on("OrangeBot", _0xe80ff => {
      _0x79791 = _0xe80ff;
      if (_0x79791) {
        _0x51f302();
      } else {
        native.clearPedTasks(alt.Player.local.scriptID);
      }
    });
    alt.on("workMiniGames.farmerFinished", _0x29d527 => {
      if (_0x29d527 && _0x79791) {
        alt.setTimeout(() => {
          _0x5bbbcc = (_0x5bbbcc + 1) % _0x4b3dc2.length;
          _0x51f302();
        }, 500);
      }
    });
    alt.onServer("api.longNotifyTrans", (..._0x1cb2f0) => {
      if (_0x79791 && _0x1cb2f0[0] === "inventory.noSpace") {
        alt.emit("OrangeBot", false);
        _0x4882c4.emit("menu:updateToggle", "orangeBot", false);
      }
    });
    var _0x3cb8ec = [{
      'id': 0x1,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-719.77, 5390.96, 54.09),
      'rotation': new mp.Vector3(0, 0, 134),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-714.45, 5373.29, 59.31),
      'rotation': new mp.Vector3(0, 0, 352),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-728.76, 5370.35, 58.38),
      'rotation': new mp.Vector3(0, 0, 290),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-740.46, 5365.61, 58.36),
      'rotation': new mp.Vector3(0, 0, 122),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x5,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-752.7, 5371.18, 54.88),
      'rotation': new mp.Vector3(0, 0, 59),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x6,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-731.2, 5352.46, 61.65),
      'rotation': new mp.Vector3(0, 0, 125),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x7,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-716.35, 5345.17, 66.07),
      'rotation': new mp.Vector3(0, 0, 109),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x8,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-725.61, 5333.65, 67.82),
      'rotation': new mp.Vector3(0, 0, 313),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x9,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-696.13, 5334.67, 68.45),
      'rotation': new mp.Vector3(0, 0, 301),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xa,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-694.01, 5353.44, 66.34),
      'rotation': new mp.Vector3(0, 0, 330),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xb,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-724.73, 5404.89, 49.71),
      'rotation': new mp.Vector3(0, 0, 27),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xc,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-723.7, 5382.77, 56.04),
      'rotation': new mp.Vector3(0, 0, 3),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xd,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-710.12, 5383.83, 56.84),
      'rotation': new mp.Vector3(0, 0, 336),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xe,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-719.21, 5365.24, 60.55),
      'rotation': new mp.Vector3(0, 0, 51),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0xf,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-731.14, 5359.15, 60.53),
      'rotation': new mp.Vector3(0, 0, 308),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x10,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-725.5, 5342.9, 64.38),
      'rotation': new mp.Vector3(0, 0, 5),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x11,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2545.16, 1173.18, 57.62),
      'rotation': new mp.Vector3(0, 0, 63),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x12,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2552.18, 1143.88, 58.87),
      'rotation': new mp.Vector3(0, 0, 294),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x13,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2524.4, 1094.72, 68.36),
      'rotation': new mp.Vector3(0, 0, 187),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x14,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2539.37, 1073.57, 69.4),
      'rotation': new mp.Vector3(0, 0, 252),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x15,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2558.52, 1077.19, 66.14),
      'rotation': new mp.Vector3(0, 0, 118),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x16,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2529.17, 1044.03, 75.34),
      'rotation': new mp.Vector3(0, 0, 233),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x17,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2577.24, 1144.96, 53),
      'rotation': new mp.Vector3(0, 0, 22),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x18,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2536.59, 1165.42, 60.11),
      'rotation': new mp.Vector3(0, 0, 282),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x19,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2564.83, 1175.07, 52.89),
      'rotation': new mp.Vector3(0, 0, 58),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1a,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2581.38, 1132.15, 54.29),
      'rotation': new mp.Vector3(0, 0, 60),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1b,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2493.19, 1100.34, 76.98),
      'rotation': new mp.Vector3(0, 0, 309),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1c,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2559.91, 1045.37, 71.49),
      'rotation': new mp.Vector3(0, 0, 270),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1d,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2490.8, 1058.56, 76.9),
      'rotation': new mp.Vector3(0, 0, 252),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1e,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2485.98, 1080.95, 77.01),
      'rotation': new mp.Vector3(0, 0, 157),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x1f,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2529.52, 1124.93, 66.22),
      'rotation': new mp.Vector3(0, 0, 77),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x20,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2591.35, 1070.3, 59.9),
      'rotation': new mp.Vector3(0, 0, 99),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x21,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2563.52, 1108.95, 60.45),
      'rotation': new mp.Vector3(0, 0, 102),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x22,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2588.22, 1093.37, 58.29),
      'rotation': new mp.Vector3(0, 0, 5),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x23,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2590.18, 1171.61, 48.05),
      'rotation': new mp.Vector3(0, 0, 45),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x24,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2492.12, 1122.04, 80.15),
      'rotation': new mp.Vector3(0, 0, 248),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x25,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2511.04, 1070.02, 73.69),
      'rotation': new mp.Vector3(0, 0, 169),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x26,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2586.9, 1048.89, 64.65),
      'rotation': new mp.Vector3(0, 0, 139),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x27,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2475.14, 1096.29, 80.78),
      'rotation': new mp.Vector3(0, 0, 91),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x28,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2508.25, 1039.04, 76.99),
      'rotation': new mp.Vector3(0, 0, 102),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x29,
      'model': "prop_tree_eng_oak_cr2",
      'level': 0x2,
      'position': new mp.Vector3(2520.35, 1147.75, 66.48),
      'rotation': new mp.Vector3(0, 0, 269),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2a,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(32.31, 3346.7, 36.23),
      'rotation': new mp.Vector3(0, 0, 176),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2b,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(18.21, 3368.19, 38.31),
      'rotation': new mp.Vector3(0, 0, 242),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2c,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(10.55, 3389.77, 42.78),
      'rotation': new mp.Vector3(0, 0, 260),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2d,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-11.42, 3382.47, 42.39),
      'rotation': new mp.Vector3(0, 0, 206),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2e,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-32.85, 3382.47, 44.16),
      'rotation': new mp.Vector3(0, 0, 37),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x2f,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-50.57, 3396.9, 50.05),
      'rotation': new mp.Vector3(0, 0, 53),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x30,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-66.91, 3407.62, 55.84),
      'rotation': new mp.Vector3(0, 0, 342),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x31,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-48.35, 3420.32, 53.89),
      'rotation': new mp.Vector3(0, 0, 181),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x32,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-34.51, 3421.41, 50.28),
      'rotation': new mp.Vector3(0, 0, 128),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x33,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-13.77, 3407.17, 46.02),
      'rotation': new mp.Vector3(0, 0, 45),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x34,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-74.32, 3391.15, 54.78),
      'rotation': new mp.Vector3(0, 0, 157),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x35,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-92.36, 3376.57, 58.04),
      'rotation': new mp.Vector3(0, 0, 335),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x36,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-81.3, 3349, 53.15),
      'rotation': new mp.Vector3(0, 0, 285),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x37,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-75.08, 3322.14, 55.15),
      'rotation': new mp.Vector3(0, 0, 171),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x38,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-59.3, 3303.52, 50.94),
      'rotation': new mp.Vector3(0, 0, 292),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x39,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-31.4, 3289.36, 45.21),
      'rotation': new mp.Vector3(0, 0, 97),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3a,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-21.24, 3306.94, 40.88),
      'rotation': new mp.Vector3(0, 0, 101),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3b,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-22.41, 3327.31, 40.08),
      'rotation': new mp.Vector3(0, 0, 169),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3c,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-35.55, 3344.05, 41.93),
      'rotation': new mp.Vector3(0, 0, 352),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3d,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-41.09, 3364.2, 44.21),
      'rotation': new mp.Vector3(0, 0, 221),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3e,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-59.53, 3366.11, 48.89),
      'rotation': new mp.Vector3(0, 0, 211),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x3f,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-60.94, 3342.58, 47.4),
      'rotation': new mp.Vector3(0, 0, 199),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x40,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-41.58, 3328.45, 42.59),
      'rotation': new mp.Vector3(0, 0, 75),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x41,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-3.91, 3326.35, 38.86),
      'rotation': new mp.Vector3(0, 0, 168),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x42,
      'model': "prop_tree_birch_02",
      'level': 0x3,
      'position': new mp.Vector3(-11.66, 3355.58, 39.38),
      'rotation': new mp.Vector3(0, 0, 219),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x43,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-450.56, 4807, 229.55),
      'rotation': new mp.Vector3(0, 0, 203),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x44,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-440.64, 4826.33, 222.48),
      'rotation': new mp.Vector3(0, 0, 198),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x45,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-387.73, 4713.4, 261.92),
      'rotation': new mp.Vector3(0, 0, 324),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x46,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-413.42, 4740.84, 255.51),
      'rotation': new mp.Vector3(0, 0, 183),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x47,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-422.4, 4794.52, 230.49),
      'rotation': new mp.Vector3(0, 0, 74),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x48,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-455.15, 4766.01, 236.21),
      'rotation': new mp.Vector3(0, 0, 235),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x49,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-435.09, 4720.34, 254.52),
      'rotation': new mp.Vector3(0, 0, 331),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4a,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-416.78, 4684.07, 258.74),
      'rotation': new mp.Vector3(0, 0, 312),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4b,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-407.15, 4707.09, 260.56),
      'rotation': new mp.Vector3(0, 0, 288),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4c,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-398.64, 4764.68, 244.51),
      'rotation': new mp.Vector3(0, 0, 188),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4d,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-422.13, 4825.6, 215.97),
      'rotation': new mp.Vector3(0, 0, 91),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4e,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-395.44, 4837.64, 214.21),
      'rotation': new mp.Vector3(0, 0, 271),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x4f,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-417.41, 4767.68, 242.88),
      'rotation': new mp.Vector3(0, 0, 72),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x50,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-358.87, 4737.67, 246.23),
      'rotation': new mp.Vector3(0, 0, 179),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x51,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-392.71, 4799.5, 224.91),
      'rotation': new mp.Vector3(0, 0, 250),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x52,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-403.41, 4815.47, 222.3),
      'rotation': new mp.Vector3(0, 0, 113),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x53,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-361.74, 4779.32, 224.51),
      'rotation': new mp.Vector3(0, 0, 250),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x54,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-377.62, 4813.49, 218.1),
      'rotation': new mp.Vector3(0, 0, 284),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x55,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-363.61, 4836.91, 212.81),
      'rotation': new mp.Vector3(0, 0, 253),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x56,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-332.8, 4802.23, 219.01),
      'rotation': new mp.Vector3(0, 0, 298),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x57,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-323.57, 4761.41, 226.6),
      'rotation': new mp.Vector3(0, 0, 25),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x58,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-334, 4699.96, 249.64),
      'rotation': new mp.Vector3(0, 0, 166),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x59,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-329.47, 4718.76, 242.02),
      'rotation': new mp.Vector3(0, 0, 216),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x5a,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-369.14, 4695.04, 257.46),
      'rotation': new mp.Vector3(0, 0, 73),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x5b,
      'model': "prop_tree_maple_03",
      'level': 0x4,
      'position': new mp.Vector3(-385.23, 4740.17, 255.28),
      'rotation': new mp.Vector3(0, 0, 52),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }, {
      'id': 0x7b,
      'model': "prop_tree_pine_02",
      'level': 0x1,
      'position': new mp.Vector3(-736.42, 5392.9, 50.49),
      'rotation': new mp.Vector3(0, 0, 276),
      'dropRotation': new mp.Vector3(-86, 0, 0)
    }];
    var _0x1d4a62 = [1380551480, 3015194288, 3124549109, 648056198, 1600467771];
    var _0x1e8eda = _0x3cb8ec.map(_0x5679a5 => _0x5679a5.position);
    function _0x30c748() {
      let _0x3d7133 = alt.LocalObject.all.filter(_0x334a39 => {
        if (!_0x334a39.isStreamedIn) {
          return false;
        }
        if (!_0x1d4a62.includes(_0x334a39.model)) {
          return false;
        }
        return _0x1e8eda.some(_0x5d4891 => _0x414e0a(_0x5d4891, _0x334a39.pos));
      }).filter(_0x58d6c6 => Math.abs(_0x58d6c6.rot.x) < 0.0001);
      let _0x4bc919 = _0x3d7133.map(_0x23870a => _0x23870a.pos);
      _0x4bc919 = _0x4bc919.filter(_0x51d00a => {
        return !alt.Player.all.some(_0x1042f7 => {
          if (!_0x1042f7.isStreamedIn) {
            return false;
          }
          return Math.sqrt((_0x1042f7.pos.x - _0x51d00a.x) ** 2 + (_0x1042f7.pos.y - _0x51d00a.y) ** 2 + (_0x1042f7.pos.z - _0x51d00a.z) ** 2) < 3;
        });
      });
      return _0x4bc919;
    }
    var _0x2061c0 = null;
    var _0x3f8802 = null;
    var _0xd46071 = false;
    var _0x5b1858 = false;
    function _0x3f5637() {
      const _0x221b9d = alt.Player.local;
      if (!_0x221b9d || !_0xd46071) {
        return;
      }
      _0x5b1858 = false;
      const _0x4e6ae1 = _0x30c748();
      _0x3f8802 = _0x2cea3f(_0x221b9d, _0x4e6ae1);
      if (!_0x3f8802) {
        return;
      }
      _0x2264d4(_0x221b9d, _0x3f8802);
      _0x2061c0 = alt.setInterval(() => {
        if (!_0xd46071) {
          if (_0x2061c0 !== null) {
            alt.clearInterval(_0x2061c0);
            _0x2061c0 = null;
          }
          return;
        }
        if (_0x5b1858) {
          return;
        }
        const _0x3873f2 = alt.Player.all.some(_0x4b8651 => {
          if (_0x4b8651 === _0x221b9d) {
            return false;
          }
          return Math.sqrt((_0x4b8651.pos.x - _0x3f8802.x) ** 2 + (_0x4b8651.pos.y - _0x3f8802.y) ** 2 + (_0x4b8651.pos.z - _0x3f8802.z) ** 2) < 5;
        });
        if (_0x3873f2) {
          const _0x32cb7b = _0x30c748();
          const _0x255fae = _0x2cea3f(_0x221b9d, _0x32cb7b.filter(_0xcaf135 => !_0x414e0a(_0xcaf135, _0x3f8802)));
          if (_0x255fae) {
            _0x3f8802 = _0x255fae;
            _0x2264d4(_0x221b9d, _0x3f8802);
          }
        }
        if (Math.sqrt((_0x221b9d.pos.x - _0x3f8802.x) ** 2 + (_0x221b9d.pos.y - _0x3f8802.y) ** 2 + (_0x221b9d.pos.z - _0x3f8802.z) ** 2) < 2) {
          _0x5b1858 = true;
          alt.emit("keyup", 69);
          globalThis.emulateButtonPress = true;
          alt.setTimeout(() => {
            globalThis.emulateButtonPress = false;
            alt.emit("workMiniGames.lumberjackFinished", true);
          }, 15000);
          if (_0x2061c0 !== null) {
            alt.clearInterval(_0x2061c0);
            _0x2061c0 = null;
          }
        }
      }, 200);
    }
    alt.on("TreeBot", _0x458570 => {
      _0xd46071 = _0x458570;
      if (_0xd46071) {
        _0x3f5637();
      } else {
        if (_0x2061c0 !== null) {
          alt.clearInterval(_0x2061c0);
          _0x2061c0 = null;
        }
        native.clearPedTasks(alt.Player.local.scriptID);
      }
    });
    alt.on("workMiniGames.lumberjackFinished", _0x3a1ad3 => {
      if (_0x3a1ad3 && _0xd46071) {
        alt.setTimeout(() => {
          _0x3f5637();
        }, 500);
      }
    });
    function _0xba347f() {
      let _0x501970 = alt.VirtualEntity.streamedIn.filter(_0x54e872 => {
        const _0x5c8bdb = _0x54e872.getStreamSyncedMetaKeys();
        if (!_0x5c8bdb.includes("$bridge$model")) {
          return false;
        }
        if (_0x54e872.getStreamSyncedMeta("$bridge$model") !== 1242439117) {
          return false;
        }
        return true;
      });
      let _0x3d437b = _0x501970.map(_0x199212 => _0x199212.pos);
      _0x3d437b = _0x3d437b.filter(_0x49987a => {
        return !alt.Player.streamedIn.some(_0x5800ea => {
          return Math.sqrt((_0x5800ea.pos.x - _0x49987a.x) ** 2 + (_0x5800ea.pos.y - _0x49987a.y) ** 2 + (_0x5800ea.pos.z - _0x49987a.z) ** 2) < 3;
        });
      });
      return _0x3d437b;
    }
    var _0xa3a86d = false;
    var _0xe22fd5 = false;
    var _0x876b0 = null;
    function _0x124aeb() {
      const _0x576494 = alt.Player.local;
      if (!_0x576494 || !_0xa3a86d || !_0xe22fd5) {
        return;
      }
      if (Math.sqrt((_0x576494.pos.x - _0x876b0.x) ** 2 + (_0x576494.pos.y - _0x876b0.y) ** 2 + (_0x576494.pos.z - _0x876b0.z) ** 2) < 2) {
        return;
      }
      const _0x216771 = alt.Player.streamedIn.some(_0x3a6e4f => {
        if (_0x3a6e4f === _0x576494) {
          return false;
        }
        return Math.sqrt((_0x3a6e4f.pos.x - _0x876b0.x) ** 2 + (_0x3a6e4f.pos.y - _0x876b0.y) ** 2 + (_0x3a6e4f.pos.z - _0x876b0.z) ** 2) < 5;
      });
      if (_0x216771) {
        const _0x5658e9 = _0xba347f();
        const _0x14aafc = _0x2cea3f(_0x576494, _0x5658e9.filter(_0xadb021 => Math.sqrt((_0xadb021.x - _0x876b0.x) ** 2 + (_0xadb021.y - _0x876b0.y) ** 2 + (_0xadb021.z - _0x876b0.z) ** 2) > 0.1));
        if (_0x14aafc) {
          _0x876b0 = _0x14aafc;
          _0x2264d4(_0x576494, _0x876b0);
        }
      }
      alt.setTimeout(_0x124aeb, 200);
    }
    function _0x2c0cf9() {
      const _0x3bbff0 = alt.Player.local;
      if (!_0x3bbff0) {
        return;
      }
      _0xe22fd5 = true;
      const _0x4b885e = _0xba347f();
      _0x876b0 = _0x2cea3f(_0x3bbff0, _0x4b885e);
      if (!_0x876b0) {
        return;
      }
      _0x2264d4(_0x3bbff0, _0x876b0);
      alt.setTimeout(_0x124aeb, 200);
    }
    alt.onServer("$bridge$enterColshape", (_0x30ce15, _0x551e03, _0x4fe8cb, _0xacfb73, _0xc92f8f) => {
      if (_0xa3a86d && _0xc92f8f && _0xc92f8f.hasOwnProperty("ore")) {
        _0xe22fd5 = false;
        native.clearPedTasks(alt.Player.local.scriptID);
        alt.emit("keyup", 69);
        alt.setTimeout(() => {
          alt.emit("workMiniGames.minerFinished", true);
          if (_0xa3a86d) {
            alt.setTimeout(_0x2c0cf9, 500);
          }
        }, 15000);
      }
    });
    alt.on("MineAxeBot", _0x573c0f => {
      _0xa3a86d = _0x573c0f;
      if (_0xa3a86d) {
        globalThis.emulateButtonPress = true;
        _0x2c0cf9();
      } else {
        globalThis.emulateButtonPress = false;
        native.clearPedTasks(alt.Player.local.scriptID);
      }
    });
    var _0xd22758 = false;
    alt.onServer("$bridge$enterColshape", (_0x1fb12f, _0x368dc0, _0x3aa299, _0x462101, _0x343bd6) => {
      if (_0xd22758 && _0x343bd6 && _0x343bd6.hasOwnProperty("plant.needDrink")) {
        const _0x46c537 = _0x343bd6["plant.needDrink"];
        alt.emit("plantPickup", _0x46c537);
      }
    });
    alt.on("FarmAbuse", _0x354d13 => {
      _0xd22758 = _0x354d13;
    });
    var _0x3b6962 = null;
    var _0x5267b8 = null;
    var _0x46a0cb = false;
    var _0x17ba5d = null;
    mp.events.add("playerPolygonEnter", (_0x3d1813, _0x96df5c) => {
      if (!_0x46a0cb) {
        return;
      }
      if (_0x96df5c && _0x96df5c.name && _0x96df5c.name.indexOf("metaldetector-") !== -1) {
        _0x3b6962 = _0x96df5c;
        _0x5267b8 = _0x96df5c.name;
      }
    });
    mp.events.add("playerPolygonExit", (_0x29ff92, _0x372473) => {
      if (!_0x46a0cb) {
        return;
      }
      if (_0x372473 && _0x372473.name && _0x372473.name.indexOf("metaldetector-") !== -1) {
        if (_0x3b6962 && _0x3b6962.name === _0x372473.name) {
          _0x3b6962 = null;
          _0x5267b8 = null;
        }
      }
    });
    var _0x1de9a4 = [];
    var _0x4f0abf = [];
    alt.onServer("metaldetector.foundPoint", _0x44bd53 => {
      if (!_0x46a0cb) {
        return;
      }
      _0x44bd53.forEach(_0x5922dd => {
        const {
          position: _0x51cdb0
        } = _0x5922dd;
        _0x9693ed(_0x1de9a4, _0x51cdb0, alt.RGBA.blue);
      });
    });
    alt.onServer("radarDetector.foundPoint", _0x587d0c => {
      if (!_0x46a0cb) {
        return;
      }
      _0x587d0c.forEach(_0x1c31fb => {
        const {
          position: _0x15605a
        } = _0x1c31fb;
        _0x9693ed(_0x4f0abf, _0x15605a, alt.RGBA.red);
      });
    });
    alt.everyTick(() => {
      if (!_0x46a0cb) {
        return;
      }
      const _0xccd0f = Date.now();
      _0x1de9a4.forEach((_0x5e5f8a, _0x2514b8) => {
        _0x11458c(_0x5e5f8a, _0xccd0f, _0x2514b8, _0x1de9a4);
      });
      _0x4f0abf.forEach((_0x320dd8, _0x2552b4) => {
        _0x11458c(_0x320dd8, _0xccd0f, _0x2552b4, _0x4f0abf);
      });
      if (_0x3b6962 && _0x3b6962.positions && _0x3b6962.positions.length > 1) {
        const _0x2ace86 = _0x3b6962.positions;
        const _0x572a6f = parseFloat(_0x3b6962.minZ) || 0;
        const _0x215730 = parseFloat(_0x3b6962.maxZ) || 0;
        for (let _0x3f0bfb = 0; _0x3f0bfb < _0x2ace86.length; _0x3f0bfb++) {
          const _0x19d4a9 = _0x2ace86[_0x3f0bfb];
          const _0x167e4d = _0x2ace86[(_0x3f0bfb + 1) % _0x2ace86.length];
          native.drawLine(_0x19d4a9.x, _0x19d4a9.y, _0x572a6f, _0x167e4d.x, _0x167e4d.y, _0x572a6f, 255, 0, 0, 255);
          native.drawLine(_0x19d4a9.x, _0x19d4a9.y, _0x215730, _0x167e4d.x, _0x167e4d.y, _0x215730, 255, 0, 0, 255);
          native.drawLine(_0x19d4a9.x, _0x19d4a9.y, _0x572a6f, _0x19d4a9.x, _0x19d4a9.y, _0x215730, 255, 0, 0, 255);
        }
      }
      _0x76660();
    });
    function _0x9693ed(_0x23ae8e, _0x2ef6fa, _0x53479f) {
      const _0x131a38 = _0x23ae8e.find(_0x1b6bbd => _0x1b6bbd.position.x === _0x2ef6fa.x && _0x1b6bbd.position.y === _0x2ef6fa.y && _0x1b6bbd.position.z === _0x2ef6fa.z);
      if (_0x131a38) {
        _0x131a38.timestamp = Date.now();
      } else {
        _0x23ae8e.push({
          'position': _0x2ef6fa,
          'timestamp': Date.now(),
          'blip': null,
          'marker': null,
          'color': _0x53479f
        });
      }
    }
    function _0x11458c(_0x233514, _0xdef0ef, _0x29c3b4, _0x5da4d2) {
      const _0x4b1335 = (_0xdef0ef - _0x233514.timestamp) / 1000;
      if (_0x4b1335 > 15) {
        if (_0x233514.blip) {
          native.removeBlip(_0x233514.blip);
          _0x233514.blip = null;
        }
        if (_0x233514.marker) {
          _0x233514.marker.destroy();
          _0x233514.marker = null;
        }
        _0x5da4d2.splice(_0x29c3b4, 1);
      } else {
        if (!_0x233514.blip) {
          _0x233514.blip = _0x5cefac(_0x233514.position);
        }
        if (!_0x233514.marker) {
          _0x233514.marker = _0x5753e0(_0x233514.position, _0x233514.color);
        }
      }
    }
    function _0x5cefac(_0x291d5b) {
      const [_0x3ab404, _0x426c51] = native.getGroundZFor3dCoord(_0x291d5b.x, _0x291d5b.y, 999, 0, false, false);
      if (_0x3ab404) {
        return _0x4b2ded(_0x291d5b.x, _0x291d5b.y, _0x426c51);
      }
      return null;
    }
    function _0x4b2ded(_0x179e4a, _0x22a062, _0x23dee1) {
      const _0x36a7f0 = native.addBlipForCoord(_0x179e4a, _0x22a062, _0x23dee1);
      native.setBlipSprite(_0x36a7f0, 1);
      native.setBlipColour(_0x36a7f0, 2);
      native.setBlipAsShortRange(_0x36a7f0, true);
      return _0x36a7f0;
    }
    function _0x5753e0(_0x1d1fb2, _0x5bf11d) {
      const [_0x2bb56a, _0xa303d2] = native.getGroundZFor3dCoord(_0x1d1fb2.x, _0x1d1fb2.y, 999, 0, false, false);
      if (_0x2bb56a) {
        return new alt.Utils.Marker(new alt.Vector3(_0x1d1fb2.x, _0x1d1fb2.y, _0xa303d2), {
          'type': 0x1,
          'color': _0x5bf11d,
          'scale': new alt.Vector3(1, 1, 30)
        });
      }
      return null;
    }
    function _0x125b2d() {
      if (!_0x46a0cb) {
        return;
      }
      const _0x5a985a = alt.Player.local.pos;
      _0x1de9a4.forEach((_0x40a786, _0x383f1e) => {
        const _0xf9dda = Math.sqrt((_0x5a985a.x - _0x40a786.position.x) ** 2 + (_0x5a985a.y - _0x40a786.position.y) ** 2 + (_0x5a985a.z - _0x40a786.position.z) ** 2);
        if (_0xf9dda < 3 && _0x5267b8) {
          if (_0x40a786.marker) {
            _0x40a786.marker.destroy();
            _0x40a786.marker = null;
          }
          if (_0x40a786.blip) {
            native.removeBlip(_0x40a786.blip);
            _0x40a786.blip = null;
          }
          _0x1de9a4.splice(_0x383f1e, 1);
        }
      });
      _0x4f0abf.forEach((_0x385695, _0xb0ccd2) => {
        const _0xef4de6 = Math.sqrt((_0x5a985a.x - _0x385695.position.x) ** 2 + (_0x5a985a.y - _0x385695.position.y) ** 2 + (_0x5a985a.z - _0x385695.position.z) ** 2);
        if (_0xef4de6 < 3) {
          if (_0x385695.marker) {
            _0x385695.marker.destroy();
            _0x385695.marker = null;
          }
          if (_0x385695.blip) {
            native.removeBlip(_0x385695.blip);
            _0x385695.blip = null;
          }
          _0x4f0abf.splice(_0xb0ccd2, 1);
        }
      });
    }
    alt.setInterval(_0x125b2d, 500);
    alt.on('MetalBot', _0xebb29a => {
      _0x46a0cb = _0xebb29a;
      if (_0xebb29a) {
        if (!_0x17ba5d) {
          _0x17ba5d = alt.setInterval(() => {
            if (_0x5267b8 != null) {
              alt.emit('CallSearch', _0x5267b8);
            }
          }, 500);
        }
      } else {
        if (_0x17ba5d) {
          alt.clearInterval(_0x17ba5d);
          _0x17ba5d = null;
        }
      }
    });
    var _0x33c943 = [3049769743, 2318332886, 1602264646, 2594215105, 1306000117, 3352194844];
    function _0x4cd28f() {
      let _0x2312c3 = alt.VirtualEntity.streamedIn.filter(_0x478903 => {
        const _0x1697f1 = _0x478903.getStreamSyncedMetaKeys();
        if (!_0x1697f1.includes("$bridge$model")) {
          return false;
        }
        const _0x4c06d3 = _0x478903.getStreamSyncedMeta("$bridge$model");
        if (!_0x33c943.includes(_0x4c06d3)) {
          return false;
        }
        return true;
      });
      let _0x4ba044 = _0x2312c3.map(_0x2991c9 => _0x2991c9.pos);
      _0x4ba044 = _0x4ba044.filter(_0x3f0e1e => {
        return !alt.Player.streamedIn.some(_0x3a9ecb => {
          if (!_0x3a9ecb.isStreamedIn) {
            return false;
          }
          return Math.sqrt((_0x3a9ecb.pos.x - _0x3f0e1e.x) ** 2 + (_0x3a9ecb.pos.y - _0x3f0e1e.y) ** 2 + (_0x3a9ecb.pos.z - _0x3f0e1e.z) ** 2) < 3;
        });
      });
      return _0x4ba044;
    }
    var _0x2ca375 = null;
    var _0x33b80c = null;
    var _0x1c0482 = false;
    var _0x2c92e3 = false;
    function _0x4a389a() {
      const _0x100c37 = alt.Player.local;
      if (!_0x100c37 || !_0x2c92e3 || !_0x1c0482) {
        return;
      }
      if (Math.sqrt((_0x100c37.pos.x - _0x33b80c.x) ** 2 + (_0x100c37.pos.y - _0x33b80c.y) ** 2 + (_0x100c37.pos.z - _0x33b80c.z) ** 2) < 2) {
        return;
      }
      const _0x42de74 = alt.Player.streamedIn.some(_0x534da4 => {
        if (_0x534da4 === _0x100c37) {
          return false;
        }
        return Math.sqrt((_0x534da4.pos.x - _0x33b80c.x) ** 2 + (_0x534da4.pos.y - _0x33b80c.y) ** 2 + (_0x534da4.pos.z - _0x33b80c.z) ** 2) < 5;
      });
      if (_0x42de74) {
        const _0x12878b = _0x4cd28f();
        const _0x4100ae = _0x2cea3f(_0x100c37, _0x12878b.filter(_0x370d43 => Math.sqrt((_0x370d43.x - _0x33b80c.x) ** 2 + (_0x370d43.y - _0x33b80c.y) ** 2 + (_0x370d43.z - _0x33b80c.z) ** 2) > 0.1));
        if (_0x4100ae) {
          _0x33b80c = _0x4100ae;
          _0x2264d4(_0x100c37, _0x33b80c);
        }
      }
      _0x2ca375 = alt.setTimeout(_0x4a389a, 200);
    }
    function _0x323978() {
      const _0x2c1cbf = alt.Player.local;
      if (!_0x2c1cbf) {
        return;
      }
      _0x1c0482 = true;
      const _0x35973a = _0x4cd28f();
      _0x33b80c = _0x2cea3f(_0x2c1cbf, _0x35973a);
      if (!_0x33b80c) {
        return;
      }
      _0x2264d4(_0x2c1cbf, _0x33b80c);
      _0x2ca375 = alt.setTimeout(_0x4a389a, 200);
    }
    alt.onServer("$bridge$enterColshape", (_0x35be89, _0x18fcb3, _0x476c13, _0x4b60c7, _0x33063d) => {
      if (_0x2c92e3 && _0x33063d && _0x33063d.hasOwnProperty('mushroom')) {
        _0x1c0482 = false;
        if (_0x2ca375 !== null) {
          alt.clearTimeout(_0x2ca375);
          _0x2ca375 = null;
        }
        native.clearPedTasks(alt.Player.local.scriptID);
        alt.emit("keyup", 69);
        alt.setTimeout(() => {
          alt.emit("workMiniGames.minerFinished", true);
          if (_0x2c92e3) {
            alt.setTimeout(_0x323978, 500);
          }
        }, 12000);
      }
    });
    alt.on("ShroomBot", _0x54f232 => {
      _0x2c92e3 = _0x54f232;
      if (_0x2c92e3) {
        _0x323978();
      } else {
        if (_0x2ca375 !== null) {
          alt.clearTimeout(_0x2ca375);
          _0x2ca375 = null;
        }
        native.clearPedTasks(alt.Player.local.scriptID);
      }
    });
    var _0x3edd0a = false;
    alt.onServer("job.hijacker.setup", (_0x55c48d, _0x1080f1) => {
      if (!_0x3edd0a) {
        return;
      }
      let _0x33addd = new alt.PointBlip(_0x1080f1.x, _0x1080f1.y, _0x1080f1.z);
      _0x33addd.sprite = 1;
      _0x33addd.color = 5;
      _0x33addd.scale = 0.8;
      _0x33addd.shortRange = true;
      let _0x49543a = alt.everyTick(() => {
        let _0x2ed6eb = alt.Player.local;
        let _0x874791 = _0x2ed6eb.pos.x - _0x1080f1.x;
        let _0x2e6f5a = _0x2ed6eb.pos.y - _0x1080f1.y;
        let _0x155c5f = Math.sqrt(_0x874791 * _0x874791 + _0x2e6f5a * _0x2e6f5a);
        if (_0x155c5f < 5) {
          _0x33addd.destroy();
          alt.clearEveryTick(_0x49543a);
        }
      });
    });
    alt.onServer("job.hijacker.breakDoorToggle", (_0xfad859, _0x2025ec, _0x461efa) => {
      if (!_0x3edd0a) {
        return;
      }
      setTimeout(() => {
        alt.emit("minigame.breakLock", true);
      }, 1000);
    });
    alt.onServer("minigame.startResult", _0x46f09a => {
      if (!_0x3edd0a) {
        return;
      }
      if (_0x46f09a === true) {
        setTimeout(() => {
          alt.emit("minigame.breakEngine", "success");
        }, 1000);
      }
    });
    alt.on("HijackerBot", _0x3701bb => {
      _0x3edd0a = _0x3701bb;
    });
    var _0x552085 = false;
    alt.onServer("iphone.taxi.addOrder", _0x3e136b => {
      if (_0x552085 && _0x3e136b.id != null) {
        alt.emit("iphone.taxiTakeOrder", _0x3e136b.id);
        _0x552085 = false;
        _0x4882c4.emit("menu:updateToggle", "taxi", false);
      }
    });
    alt.on('TaxiBot', _0x2304f0 => {
      _0x552085 = _0x2304f0;
    });
    var _0x32a1e6 = false;
    var _0x5ceb16 = null;
    var _0x3581a8 = 0;
    var _0x4ee123 = [{
      'skill': "stamina",
      'delay': 0xee49
    }, {
      'skill': "strength",
      'delay': 0x16378
    }, {
      'skill': "lung_capacity",
      'delay': 0x222e0
    }, {
      'skill': "wheelie_ability",
      'delay': 0x57e40
    }, {
      'skill': "flying_ability",
      'delay': 0x57e40
    }, {
      'skill': "shooting_ability",
      'delay': 0x2af8
    }];
    var _0x1afae2 = [];
    function _0x544da3() {
      _0x1afae2 = _0x4ee123.map(({
        skill: _0x57ba54,
        delay: _0x1f4b36
      }) => {
        return {
          'skill': _0x57ba54,
          'delay': _0x1f4b36,
          'count': 0x0,
          'nextFireTime': Date.now()
        };
      });
      _0x5ceb16 = alt.setInterval(() => {
        if (!_0x32a1e6) {
          _0x587e90();
          return;
        }
        const _0x428baf = Date.now();
        const _0x3fb9ab = _0x1afae2.find(_0x5c05aa => {
          return _0x5c05aa.count < 100 && _0x428baf >= _0x5c05aa.nextFireTime && _0x428baf - _0x3581a8 >= 200;
        });
        if (!_0x3fb9ab) {
          return;
        }
        alt.emit("CallSkills", _0x3fb9ab.skill);
        _0x3581a8 = _0x428baf;
        _0x3fb9ab.count++;
        if (_0x3fb9ab.count < 100) {
          _0x3fb9ab.nextFireTime = _0x428baf + _0x3fb9ab.delay;
        }
        if (_0x1afae2.every(_0x1c9825 => _0x1c9825.count >= 100)) {
          _0x587e90();
        }
      }, 100);
    }
    function _0x587e90() {
      if (_0x5ceb16) {
        alt.clearInterval(_0x5ceb16);
        _0x5ceb16 = null;
      }
    }
    alt.on("SkillsBot", _0x23a2ea => {
      _0x32a1e6 = _0x23a2ea;
      if (_0x32a1e6) {
        _0x544da3();
      } else {
        _0x587e90();
      }
    });
    var _0x8f107d = false;
    var _0x5c7114;
    function _0x389aac() {
      if (!_0x8f107d) {
        return;
      }
      alt.emit("JailStart");
      _0x5c7114 = setTimeout(() => {
        alt.emit("JailStop");
        _0x389aac();
      }, 10000);
    }
    function _0x561d23() {
      clearTimeout(_0x5c7114);
    }
    alt.on("JailBot", _0x272f27 => {
      _0x8f107d = _0x272f27;
      if (_0x8f107d) {
        _0x389aac();
      } else {
        _0x561d23();
      }
    });
    var _0x1e14c4 = false;
    alt.onServer("seam.client.startMinigame", (_0x18623f, _0x30404b) => {
      if (_0x1e14c4) {
        alt.setTimeout(() => {
          alt.emit("workMiniGames.seamstressFinished", true);
          alt.setTimeout(() => {
            if (_0x1e14c4) {
              alt.emit("keyup", 69);
            }
          }, 2000);
        }, 31000);
      }
    });
    alt.onServer("api.longNotifyTrans", _0x158971 => {
      if (_0x1e14c4 && _0x158971 === "inventory.noSpace") {
        alt.emit("SeemBot", false);
        _0x4882c4.emit("menu:updateToggle", "seemBot", false);
      }
    });
    alt.on('SeemBot', _0x120f0e => {
      _0x1e14c4 = _0x120f0e;
    });
    var _0x202bda = false;
    alt.onServer("setIndicators", (_0x2cd025, _0x500e71) => {
      if (_0x202bda) {
        if (_0x2cd025 < 5) {
          alt.emit("Eat", "prop_vend_soda_02");
        } else if (_0x500e71 < 5) {
          alt.emit('Eat', "prop_vend_snak_01");
        }
      }
    });
    alt.on("FoodBot", _0x54d9fb => {
      _0x202bda = _0x54d9fb;
    });
    var _0x566a53 = false;
    var _0x5dd393 = 0;
    var _0x2b57f9 = 0;
    var _0x43ae9e = null;
    var _0x2e378d = _0x151b57 => {
      const _0xc886b9 = Date.now();
      if (_0x566a53 && _0x151b57 === 1) {
        _0x43ae9e = _0xc886b9;
      }
      if (_0x566a53 && _0x151b57 === 3) {
        _0x5a0168();
      }
    };
    alt.onServer("client.job.fisherman.biteStage", _0x2e378d);
    alt.onServer("client.job.fisherman.updateItems", _0x4825cf => {
      try {
        const _0x2634b8 = _0x4825cf.lure.find(_0xe1f689 => _0xe1f689.select);
        if (_0x2634b8) {
          _0x2b57f9 = _0x2634b8.itemId;
        }
      } catch (_0x4672d8) {}
    });
    var _0x5a0168 = async () => {
      const _0x103d76 = ++_0x5dd393;
      let _0xcb2152;
      if (mp.inventory.mainStorage[1].weight > 33) {
        _0xcb2152 = "letGoFish";
      } else {
        _0xcb2152 = 'takeFish';
      }
      alt.emitServer("job.fisherman.hookFishKey");
      const _0x42f7c3 = _0x43ae9e ? (Date.now() - _0x43ae9e) / 1000 : 0;
      const _0x288bed = Math.max(33 - _0x42f7c3, 0);
      if (_0x288bed > 0) {
        await alt.Utils.wait(_0x288bed * 1000);
      }
      if (_0x103d76 !== _0x5dd393) {
        return;
      }
      alt.emitServer("job.fisherman.fishCaughted");
      await alt.Utils.wait(1000);
      if (_0x103d76 !== _0x5dd393) {
        return;
      }
      alt.emitServer("job.fisherman.fishAction", _0xcb2152);
      alt.emitServer("job.fisherman.setEquipItem", "lure", _0x2b57f9);
      await alt.Utils.wait(2000);
      if (_0x103d76 !== _0x5dd393) {
        return;
      }
      alt.emitServer("job.fisherman.castRodKey", 1);
    };
    alt.on('FishBot', _0x34c436 => {
      if (!_0x34c436) {
        _0x5dd393++;
        alt.emit("W2C:Fishing:Destroyed");
      }
      _0x566a53 = _0x34c436;
    });
    var _0x106eb8 = false;
    var _0x1842ac = 0;
    var _0x346749 = new Map();
    var _0x47b2a9 = null;
    function _0x3e816a() {
      if (Date.now() - _0x1842ac < 200) {
        return;
      }
      const _0x578750 = alt.Player.local;
      if (!_0x578750) {
        return;
      }
      for (const _0x59ec91 of alt.Player.streamedIn) {
        if (_0x346749.has(_0x59ec91.remoteID)) {
          const _0x9761ad = _0x346749.get(_0x59ec91.remoteID);
          if (Date.now() < _0x9761ad) {
            continue;
          }
          _0x346749["delete"](_0x59ec91.remoteID);
        }
        if (_0x59ec91 === _0x578750 || _0x59ec91.getStreamSyncedMeta("member") === 2 || _0x59ec91.health >= _0x59ec91.maxHealth) {
          continue;
        }
        const _0x1b310f = _0x59ec91.pos.x - _0x578750.pos.x;
        const _0x9ee797 = _0x59ec91.pos.y - _0x578750.pos.y;
        const _0x36fee6 = _0x59ec91.pos.z - _0x578750.pos.z;
        if (_0x1b310f * _0x1b310f + _0x9ee797 * _0x9ee797 + _0x36fee6 * _0x36fee6 > 16) {
          continue;
        }
        alt.emit("interaction.select", JSON.stringify({
          'id': "sellPill",
          'title': "Продать таблетку",
          'data': null,
          'actions': false
        }), _0x59ec91.remoteID, "player");
        if (_0x36648d(170) <= 0) {
          alt.emit("EMSPills", false);
          _0x4882c4.emit("menu:updateToggle", "emsPills", false);
        }
        _0x1842ac = Date.now();
        _0x346749.set(_0x59ec91.remoteID, Date.now() + 600000);
        return;
      }
    }
    alt.on("EMSPills", _0x23580a => {
      _0x106eb8 = _0x23580a;
      if (_0x106eb8 && !_0x47b2a9) {
        _0x47b2a9 = alt.everyTick(_0x3e816a);
      } else if (!_0x106eb8 && _0x47b2a9) {
        alt.clearEveryTick(_0x47b2a9);
        _0x47b2a9 = null;
        _0x346749.clear();
        _0x1842ac = 0;
      }
    });
    var _0x342e00 = false;
    var _0x484c65 = true;
    async function _0x5a2ca6() {
      for (let _0x51f61b = 0; _0x51f61b < 100; _0x51f61b++) {
        if (_0x484c65) {
          break;
        }
        await alt.Utils.wait(50);
      }
      await alt.Utils.wait(500);
      alt.emitServer("job.fisherman.castRodKey", 1);
    }
    alt.onServer("client.job.fisherman.updateItems", _0xc58e14 => {
      try {
        const _0x5764e0 = _0xc58e14.lure.find(_0x248865 => _0x248865.select);
        if (_0x5764e0) {
          currentLure2 = _0x5764e0.itemId;
        }
      } catch (_0x58be08) {}
    });
    alt.onServer("client.job.fisherman.showCaughtFish", () => {
      if (!_0x342e00) {
        return;
      }
      let _0x5bb6f1;
      if (mp.inventory.mainStorage[1].weight > 33) {
        _0x5bb6f1 = "letGoFish";
      } else {
        _0x5bb6f1 = "takeFish";
      }
      alt.emitServer("job.fisherman.fishAction", _0x5bb6f1);
      alt.emitServer("job.fisherman.setEquipItem", "lure", 0);
      _0x484c65 = true;
    });
    alt.onServer("client.job.fisherman.setStage", _0x10d70e => {
      if (_0x342e00 && _0x10d70e === 1) {
        _0x5a2ca6();
      }
    });
    alt.onServer("client.job.fisherman.biteStage", _0x37c9e3 => {
      if (_0x342e00 && _0x37c9e3 === 3) {
        alt.emitServer("job.fisherman.hookFishKey");
        _0x484c65 = false;
      }
    });
    alt.on("LegitFishBot", _0x17488d => {
      _0x342e00 = _0x17488d;
      if (_0x17488d) {
        globalThis.FishRightLeft = true;
      }
      if (!_0x17488d) {
        alt.emit("W2C:Fishing:Destroyed");
        globalThis.FishRightLeft = false;
      }
    });
    var _0x304835 = false;
    var _0x110063 = 0;
    alt.everyTick(() => {
      if (!_0x304835) {
        return;
      }
      const _0x2bad7d = alt.Player.local.getStreamSyncedMeta("isAFK");
      if (_0x2bad7d === true) {
        const _0x2a13af = Date.now();
        if (_0x2a13af - _0x110063 >= 30000) {
          alt.emit("ToggleAfk");
          _0x110063 = _0x2a13af;
        }
      }
    });
    alt.on('AntiAfk', _0x4e9183 => {
      _0x304835 = _0x4e9183;
    });
    alt.on("menu:toggleBot", (_0x247a6d, _0x1eeb81) => {
      alt.emit(_0x247a6d, _0x1eeb81);
      _0x1f2757();
    });
    alt.on('keyup', _0x31deaf => {
      if (_0x31deaf === 56) {
        _0x1f2757();
      }
    });
    globalThis.emulateButtonPress = false;
    globalThis.FishRightLeft = false;
    var _0x34439b = mp.game.controls.isDisabledControlPressed;
    mp.game.controls.isDisabledControlPressed = function (_0x5b29cb, _0x93ebbd) {
      if (globalThis.FishRightLeft && globalThis.EyeFish && globalThis.EyeFish.minigameData) {
        const _0x3775db = globalThis.EyeFish.minigameData.chosenDirection;
        if (_0x3775db === "right") {
          if (_0x93ebbd === 34) {
            return true;
          }
          if (_0x93ebbd === 35) {
            return false;
          }
        }
        if (_0x3775db === "left") {
          if (_0x93ebbd === 35) {
            return true;
          }
          if (_0x93ebbd === 34) {
            return false;
          }
        }
      }
      return _0x34439b.call(mp.game.controls, _0x5b29cb, _0x93ebbd);
    };
    var _0x503e5d = mp.game.controls.isControlJustPressed;
    mp.game.controls.isControlJustPressed = (_0x54c875, _0x1d6b86) => {
      if (_0x1d6b86 === 24 && globalThis.emulateButtonPress) {
        return true;
      }
      return _0x503e5d(_0x54c875, _0x1d6b86);
    };
  } catch (_0x7c92e1) {}
})();