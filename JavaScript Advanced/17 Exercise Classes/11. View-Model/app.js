class Textbox {
  constructor(selector, regex) {
    this._value = "";
    this._elements = Array.from(document.querySelectorAll(selector));
    this._invalidSymbols = regex;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
    for (let index = 0; index < this._elements.length; index++) {
      this._elements[index].value = v;
    }
  }

  get elements() {
    return this._elements;
  }

  isValid() {
    return !this._invalidSymbols.test(this.value);
  }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName(".textbox");

inputs.addEventListener("click", function () {
  console.log(textbox.value);
});

// class Textbox {
//   constructor(selector, invalidSymbolRegEx) {
//     this._invalidSymbolRegEx = invalidSymbolRegEx;
//     this._elements = document.querySelectorAll(selector);
//     Array.from(this.elements).forEach((el) =>
//       el.addEventListener("change", () => (this.value = el.value))
//     );
//   }

//   get elements() {
//     return this._elements;
//   }

//   get value() {
//     return this.elements[0].value;
//   }

//   set value(val) {
//     Array.from(this._elements).forEach((el) => (el.value = val));
//   }

//   isValid() {
//     return !this._invalidSymbolRegEx.test(this.elements[0].value);
//   }
// }
