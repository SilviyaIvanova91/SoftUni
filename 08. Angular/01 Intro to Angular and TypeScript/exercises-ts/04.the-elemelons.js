"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = exports.AirMelon = exports.EarthMelon = exports.FireMelon = exports.WaterMelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var WaterMelon = /** @class */ (function (_super) {
    __extends(WaterMelon, _super);
    function WaterMelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(WaterMelon.prototype, "elIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    WaterMelon.prototype.toString = function () {
        {
            return "Element: Water\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this.elIndex, "\u201D\n        ");
        }
    };
    return WaterMelon;
}(Melon));
exports.WaterMelon = WaterMelon;
var FireMelon = /** @class */ (function (_super) {
    __extends(FireMelon, _super);
    function FireMelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(FireMelon.prototype, "elIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    FireMelon.prototype.toString = function () {
        {
            return "Element: Fire\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this.elIndex, "\u201D\n        ");
        }
    };
    return FireMelon;
}(Melon));
exports.FireMelon = FireMelon;
var EarthMelon = /** @class */ (function (_super) {
    __extends(EarthMelon, _super);
    function EarthMelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(EarthMelon.prototype, "elIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    EarthMelon.prototype.toString = function () {
        {
            return "Element: Earth\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this.elIndex, "\u201D\n        ");
        }
    };
    return EarthMelon;
}(Melon));
exports.EarthMelon = EarthMelon;
var AirMelon = /** @class */ (function (_super) {
    __extends(AirMelon, _super);
    function AirMelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(AirMelon.prototype, "elIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    AirMelon.prototype.toString = function () {
        {
            return "Air\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this.elIndex, "\u201D\n        ");
        }
    };
    return AirMelon;
}(Melon));
exports.AirMelon = AirMelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.el = ["Water", "Fire", "Earth", "Air"];
        _this.currIndex = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.currIndex = (this.currIndex + 1) % this.el.length;
    };
    Melolemonmelon.prototype.toString = function () {
        var currEl = this.el[this.currIndex];
        {
            return "".concat(currEl, "\n        Sort: ").concat(this.melonSort, "\n        Element Index: ").concat(this.elIndex, "\u201D\n        ");
        }
    };
    return Melolemonmelon;
}(WaterMelon));
exports.Melolemonmelon = Melolemonmelon;
//let test : Melon = new Melon(100, "Test");
//Throws error
var watermelon = new WaterMelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
