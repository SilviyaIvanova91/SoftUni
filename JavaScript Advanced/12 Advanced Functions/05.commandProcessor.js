function commandProcessor() {
  let state = "";

  function append(str) {
    state += str;
  }

  function removeStart(n) {
    state = state.slice(n);
  }

  function removeEnd(n) {
    state = state.slice(0, -n);
  }

  function print() {
    console.log(state);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

let firstZeroTest = commandProcessor();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

//-----------------------------
// function commandProcessor() {
//     let state = "";

//     function append(str) {
//       state += str;
//     }

//     function removeStart(n) {
//       state = state.slice(n);
//     }

//     function removeEnd(n) {
//       state = state.slice(0, -n);
//     }

//     function print() {
//       console.log(state);
//     }

//     append("hello");
//     append("again");
//     removeStart(3);
//     removeEnd(4);
//     print();
//   }

// commandProcessor();
