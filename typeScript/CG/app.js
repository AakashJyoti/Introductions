// Normal Define
// const getTotal = (numbers: number[]) =>
//   numbers.reduce((acc: number, curr: number) => acc + curr, 0);
// Generics
// const getTotal = (numbers: Array<number>) =>
//   numbers.reduce((acc: number, curr: number) => acc + curr, 0);
// Auto complete
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };
// console.warn(user.firstName);
// Type Alias
//Alias is used to create custom types
// use "?" to make field optional
// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };
// const user: User = {
//   name: "Rakes",
//   age: 26,
//   address: "Moh Garden",
// };
// function logIn(userData: User): User {
//   return userData;
// }
// console.warn(logIn({ name: "John Doe", age: 108 }));
// console.warn(logIn(user));
// type ID = number | string;
// const userId: ID = 12;
// Interfaces
// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
//   amount: number;
// }
// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transaction: Transaction[];
// }
// const transaction1: Transaction = {
//   payerAccountNumber: 223,
//   payeeAccountNumber: 112,
//   amount: 33,
// };
// const transaction2: Transaction = {
//   payerAccountNumber: 222,
//   payeeAccountNumber: 333,
//   amount: 44,
// };
// const bankAccount: BankAccount = {
//   accountNumber: 12,
//   accountHolder: "Bang",
//   balance: 556,
//   isActive: true,
//   transaction: [transaction1, transaction2],
// };
// Reuse interfaces or Extend interface
// interface Book {
//   name: string;
//   price: number;
// }
// interface Ebook extends Book {
//   fileSize: number;
//   format: string;
// }
// interface AudioBook extends Ebook {
//   duration: number;
// }
// const book: AudioBook = {
//   name: "Atomic",
//   price: 700,
//   fileSize: 500,
//   format: "pdf",
//   duration: 5,
// };
// Merging interface
// interface Book {
//   name: string;
//   price: number;
// }
// interface Book {
//   size: number;
// }
// const book: Book = {
//   name: "Atom",
//   price: 500,
//   size: 60,
// };
// What to use interface or type
// with type unable to merge defines
// primitive are for types
// objects are for interface
// type Book = {
//   name: string;
//   price: number;
// };
// type SanitizedString = string;
// type EvenNumber = number;
// interface SanitizedString extends string {}
// Unions
// narrowing == type check
// type ID = number | string;
// const printId = (id: ID): void =>
//   typeof id == "string"
//     ? console.warn(id.toUpperCase())
//     : console.warn(id + 60);
// printId("go");
// printId(20);
var getFirstThree = function (x) { return x.slice(0, 3); };
console.warn(getFirstThree("gazab"));
console.warn(getFirstThree([2, 2, 2, 2]));
