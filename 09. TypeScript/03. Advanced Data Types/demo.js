function printMessage(text) {
    console.log(text.length);
    if (typeof text === "string") {
        console.log(text);
    }
    else {
        console.log(text.join(" "));
    }
}
