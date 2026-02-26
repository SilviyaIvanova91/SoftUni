var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.value));
    };
    return KeyValuePair;
}());
// let kvp = new KeyValuePair<number, string>();
// kvp.setKeyValue(1, "Steve");
// kvp.display();
var pair = new KeyValuePair(1, "Hello");
pair.display(); // key = 1, value = Hello
pair.setKeyValue(2, "World");
pair.display(); // key = 2, value = World
