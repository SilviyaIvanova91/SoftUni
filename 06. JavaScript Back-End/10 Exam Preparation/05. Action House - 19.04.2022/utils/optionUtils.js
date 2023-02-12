exports.generateOptions = function (currentOption) {
  const options = [
    { key: "Vehicles", label: "Vehicles", selected: false },
    { key: "Real Estate", label: "Real Estate", selected: false },
    { key: "Electronics", label: "Electronics", selected: false },
    { key: "Furniture", label: "Furniture", selected: false },
    { key: "Other", label: "Other", selected: false },
  ];

  const result = options.map((x) =>
    x.key === currentOption ? { ...x, selected: true } : x
  );

  return result;
};
