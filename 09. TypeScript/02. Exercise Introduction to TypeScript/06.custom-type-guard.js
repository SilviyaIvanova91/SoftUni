function isNonEmptyStringArray(arg) {
    return (Array.isArray(arg) &&
        arg.length > 0 &&
        arg.every(function (el) { return typeof el === "string"; }));
}
var arr = {};
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
