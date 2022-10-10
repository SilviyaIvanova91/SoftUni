function solve() {
  let proto = {};
  let inst = Object.create(proto);

  inst.extend = function (templates) {
    Object.entries(templates).forEach(([k, v]) => {
      if (typeof v === "function") {
        proto[k] = v;
      } else {
        inst[k] = v;
      }
    });
  };
  return inst;
}
