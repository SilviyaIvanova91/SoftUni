function friday13th(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el instanceof Date && el.getDay() === 5 && el.getDate() === 13) {
            console.log("".concat(el.getDate(), "-").concat(el.getMonth(), "-").concat(el.getFullYear()));
        }
    }
}
friday13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    "13-09-2023",
    new Date(2025, 6, 13),
]);
