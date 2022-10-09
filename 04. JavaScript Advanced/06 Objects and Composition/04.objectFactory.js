function factory(lib, list) {
  return list.map((order) =>
    Object.assign(
      {},
      order.template,
      Object.fromEntries(order.parts.map((p) => [p.lib[p]]))
    )
  );
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);
console.log(products);

//---------------------------------------
// function factory(lib, list) {
//     return list.map((order) => {
//       const obj = Object.assign({}, order.template);

//       for (let part of order.parts) {
//         obj[part] = lib[part];
//       }
//       return obj;
//     });
//   }

//---------------------------------------
// function factory(lib, list) {
//     const res = [];
//     for (let order of list) {
//       let obj = {};
//       let template = order.template;
//       for (let prop in order.template) {
//         obj[prop] = order.template[prop];
//       }

//       const parts = order.parts;

//       for (let part of parts) {
//         obj[part] = lib[part];
//       }
//       res.push(obj);
//     }
//     return res;
//   }
