(function () {
  try {
    var key = "REDEFINE-THEME-STATUS";
    var raw = localStorage.getItem(key);
    var data = raw ? JSON.parse(raw) : {};
    data.isDark = true;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
})();
