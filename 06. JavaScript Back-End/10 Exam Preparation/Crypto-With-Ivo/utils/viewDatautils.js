const { paymentMethodMap } = require("../constants");

exports.gtePaymentMethodViewData = (selectedPaymentMethod) => {
  const paymentMethod = Object.keys(paymentMethodMap).map((key) => ({
    value: key,
    label: paymentMethodMap[key],
    isSelected: selectedPaymentMethod == key,
  }));

  return paymentMethod;
};
