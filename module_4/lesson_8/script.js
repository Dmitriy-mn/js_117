
const Transaction1 = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};





/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account1 = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],



  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},





  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},





  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},





  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},





  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},





  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};








// ---------------------------------------------------------- РІШЕННЯ













// ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
      const obj = { id: amount, amount, type };
      return obj;
    },


  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
      this.balance += amount;
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
      if(this.balance < amount) {
        console.log("Недостатньо коштів");
        return;
      }

      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
  


    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      for(const item of this.transactions) {
        if(item.id === id) {
          return item;
        }
      }
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let sum = 0;
      for(const item of this.transactions) {
        if(item.type === type) {
          sum += item.amount;
        }
      }

      return sum;
    },
};


// account.deposit(300);
// account.deposit(100);

// account.withdraw(200);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(300));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// console.log(account);

  