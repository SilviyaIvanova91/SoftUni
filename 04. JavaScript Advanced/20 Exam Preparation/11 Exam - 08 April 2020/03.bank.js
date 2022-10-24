class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    let firstN = this.allCustomers.find(
      (a) => a.personalId == customer.personalId
    );
    if (firstN) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push({
      firstName: customer.firstName,
      lastName: customer.lastName,
      personalId: Number(customer.personalId),
    });
    return customer;
  }

  depositMoney(personalId, amount) {
    amount = Number(amount);
    personalId = Number(personalId);

    let custommers = this.allCustomers.find((a) => a.personalId == personalId);
    if (!custommers) {
      throw new Error("We have no customer with this ID!");
    }

    if (!custommers.hasOwnProperty("totalMoney")) {
      custommers.totalMoney = 0;
      custommers.transactions = [];
    }

    custommers.totalMoney += amount;
    custommers.transactions.push(
      `${custommers.firstName} ${custommers.lastName} made deposit of ${amount}$!`
    );
    return `${custommers.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    personalId = Number(personalId);
    amount = Number(amount);

    let custommers = this.allCustomers.find((a) => a.personalId == personalId);
    if (!custommers) {
      throw new Error("We have no customer with this ID!");
    }

    if (custommers.totalMoney < amount) {
      throw new Error(
        `${custommers.firstName} ${custommers.lastName} does not have enough money to withdraw that amount!`
      );
    }

    custommers.totalMoney -= amount;
    custommers.transactions.push(
      `${custommers.firstName} ${custommers.lastName} withdrew ${amount}$!`
    );

    return `${custommers.totalMoney}$`;
  }

  customerInfo(personalId) {
    let custommers = this.allCustomers.find((a) => a.personalId == personalId);

    if (!custommers) {
      throw new Error("We have no customer with this ID!");
    }

    let sortingTrans = custommers.transactions
      .map((a, i) => `${i + 1}. ${a}`)
      .reverse()
      .join("\n");
    return `Bank name: ${this._bankName}\nCustomer name: ${custommers.firstName} ${custommers.lastName}\nCustomer ID: ${custommers.personalId}\nTotal Money: ${custommers.totalMoney}$\nTransactions:\n${sortingTrans}`;
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
