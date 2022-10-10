(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    } else {
      return str + this.toString();
    }
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    } else {
      return this.toString() + str;
    }
  };

  String.prototype.isEmpty = function (str) {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (n <= 3) {
      return ".".repeat(n);
    }
    if (this.toString().length <= n) {
      return this.toString();
    } else {
      let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");
      if (lastIndex !== -1) {
        return this.substring(0, lastIndex) + "...";
      } else {
        return this.substring(0, n - 3) + "...";
      }
    }
  };

  String.format = function (string, ...params) {
    let str = string;
    params.forEach((p, i) => {
      str = str.replace(`{${i}}`, p);
    });
    return str;
  };
})();
