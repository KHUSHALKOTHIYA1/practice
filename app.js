// const person = {
//   name: "khushal",
//   greet() {
//     console.log(`hello, i'm ${this.name}`);
//   },
// };
// person.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`hi, I'm ${this.name}`);
//   }
// }
// const emma = new Person("khushal", 21);
// emma.greet();

// class employee extends Person {
//   constructor(name, age, role) {
//     super(name, age);
//     this.role = role;
//   }
//   work() {
//     console.log(`${this.name} is working as a ${this.role}`);
//   }
// }
// const bob = new employee("bob", 21, "devloper");
// bob.work();

// class BankAccount {
//   #balance = 0;
//   deposite(amount) {
//     this.#balance += amount;
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }
// const acc = new BankAccount();
// acc.deposite(100);
// console.log(acc.getBalance());

// class Animal {
//   speak() {
//     console.log("animal speak");
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log("dog barks");
//   }
// }
// const pet = new Dog();
// pet.speak();
