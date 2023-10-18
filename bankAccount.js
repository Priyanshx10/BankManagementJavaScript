// Define the BankAccount class
class BankAccount {
    // Constructor to initialize owner and initialBalance
    constructor(owner, initialBalance) {
      this.owner = owner;        // Set the owner of the account
      this.balance = initialBalance;  // Set the initial balance
    }
  
    // Deposit method to add money to the account
    deposit(amount) {
      this.balance += amount;   // Increase the balance by the deposited amount
    }
  
    // Withdraw method to take money from the account
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;   // Decrease the balance if sufficient funds are available
      } else {
        console.log("Insufficient funds.");  // Print a message if there are not enough funds
      }
    }
  
    // GetBalance method to retrieve the current balance
    getBalance() {
      return this.balance;  // Return the current balance
    }
  
    // DisplayOwnerInfo method to show the owner and balance
    displayOwnerInfo() {
      console.log(`Owner: ${this.owner}, Balance: $${this.balance}`);  // Print owner and balance information
    }
  }
  
  // Create two bank accounts
  let account1 = new BankAccount("Alice", 1000); // Account for Alice with an initial balance of $1000
  let account2 = new BankAccount("Bob", 500);   // Account for Bob with an initial balance of $500
  
  // Interact with the bank accounts
  account1.displayOwnerInfo(); // Display Alice's account info
  account1.deposit(200);      // Deposit $200 into Alice's account
  account1.displayOwnerInfo(); // Display updated info
  
  account2.displayOwnerInfo(); // Display Bob's account info
  account2.withdraw(100);     // Bob withdraws $100
  account2.displayOwnerInfo(); // Display updated info
  
  const aliceBalance = account1.getBalance(); // Get Alice's balance
  const bobBalance = account2.getBalance();   // Get Bob's balance
  console.log(`Alice's Balance: $${aliceBalance}`);
  console.log(`Bob's Balance: $${bobBalance}`);
  