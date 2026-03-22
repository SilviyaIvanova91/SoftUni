type DetermineParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(val: DetermineParamType<T>) {
  if (typeof val === "number") {
    console.log(val.toFixed(2));
  } else {
    console.log(val);
  }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");

// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');
