// Define the BankAccount class
class BankAccount {
    // Constructor to initialize owner, initialBalance, 
    constructor(owner, initialBalance) {
      this.owner = owner;           // Set the owner of the account
      this.balance = initialBalance; // Set the initial balance
    }
  
    // Deposit method to add money to the account
    deposit(amount) {
      this.balance += amount; // Increase the balance by the deposited amount
    }
  
    // Withdraw method to take money from the account
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount; // Decrease the balance if sufficient funds are available
        this.difference = amount; // Calculate the difference
      } else {
        console.log("Insufficient funds."); // Print a message if there are not enough funds
      }
    }
  
    // GetBalance method to retrieve the current balance
    getBalance() {
      return this.balance; // Return the current balance
    }
  
    // DisplayOwnerInfo method to show the owner and balance
    displayOwnerInfo() {
      console.log(`Owner: ${this.owner}, Balance: $${this.balance}`); // Print owner and balance information
    }
  
    // Display the difference between the withdrawn amount and the new balance
    balanceDiffer() {
      console.log(`Difference: $${this.difference}, New Balance: $${this.balance}`);
    }
  }
  
  // Create two bank accounts
  let account1 = new BankAccount("Jesus", 1000, 0); // Account for Jesus with an initial balance of $1000
  let account2 = new BankAccount("Priyansh", 500, 0); // Account for Priyansh with an initial balance of $500
  
  // Interact with the bank accounts
  account1.displayOwnerInfo(); // Display Jesus's account info
  account1.deposit(1000); // Deposit $1000 into Jesus's account
  account1.displayOwnerInfo(); // Display updated info
  
  account2.displayOwnerInfo(); // Display Priyansh's account info
  account2.withdraw(100); // Priyansh withdraws $100
  account2.displayOwnerInfo(); // Display updated info
  
  const jesusBalance = account1.getBalance(); // Get Jesus's balance
  const priyanshBalance = account2.getBalance(); // Get Priyansh's balance
  console.log(`Jesus's Balance: $${jesusBalance}`);
  console.log(`Priyansh's Balance: $${priyanshBalance}`);
  