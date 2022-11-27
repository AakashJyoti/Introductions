// --- Normal Define ---
// const getTotal = (numbers: number[]) =>
//   numbers.reduce((acc: number, curr: number) => acc + curr, 0);

// --- Generics ---
// const getTotal = (numbers: Array<number>) =>
//   numbers.reduce((acc: number, curr: number) => acc + curr, 0);

// -- Auto complete
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };

// console.warn(user.firstName);

// --- Type Alias ---
// -- Alias is used to create custom types
// -- use "?" to make field optional
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

// --- Interfaces ---
// -- Example 1
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

// -- Reuse interfaces or Extend interface
// -- Example 1
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

// -- Merging interface
// -- Example 1
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

// -- What to use interface or type
// -- with type unable to merge defines
// -- primitive are for types
// -- objects are for interface

// -- Example 2
// type Book = {
//   name: string;
//   price: number;
// };

// type SanitizedString = string;
// type EvenNumber = number;

// interface SanitizedString extends string {}

// --- Unions ---
// -- Example 1
// narrowing == type check
// type ID = number | string;
// const printId = (id: ID): void =>
//   typeof id == "string"
//     ? console.warn(id.toUpperCase())
//     : console.warn(id + 60);

// printId("go");
// printId(20);

// const getFirstThree = (x: string | number[]) => x.slice(0, 3);

// console.warn(getFirstThree("Done"));
// console.warn(getFirstThree([2, 2, 2, 2]));

// --- Generics ---

// -- Example 1
// const logAll = <T>(arg: T): T => {
//   console.warn(arg);
//   return arg;
// };

// logAll([3, 4]);
// logAll("Hello");
// logAll(400);

// -- Example 2
// interface HasAge {
//   age: number;
// }

// interface Player {
//   name: string;
//   age: number;
// }

// const peoplesArray: HasAge[] = [{ age: 30 }, { age: 50 }, { age: 74 }];

// const players: Player[] = [
//   { name: "John", age: 30 },
//   { name: "Bella", age: 50 },
//   { name: "Astr", age: 40 },
// ];

// const getOldest = <T extends HasAge>(people: T[]): T => {
//   return people.sort((a, b) => b.age - a.age)[0];
// };

// const oldest: HasAge = getOldest(peoplesArray);
// oldest.age;

// const bowler: Player = getOldest(players);
// bowler.name;
// bowler.age;

// -- Example 3
// interface IPost {
//   id: number;
//   title: string;
//   description: string;
// }

// interface IUser {
//   id: number;
//   name: string;
//   age: number;
// }

// -- How not to do
// -- Example 1
// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const res = await fetch(`http://example.com${path}`);
//   const data = await res.json();
//   return data;
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//   const res = await fetch(`http://example.com${path}`);
//   const data = await res.json();
//   return data;
// };

// (async () => {
//   const posts: IPost[] = await fetchPostData("/posts");
//   posts[0].id;
//   posts[0].title;
//   posts[0].description;

//   const users: IUser[] = await fetchUsersData("/users");
//   users[0].id;
//   users[0].name;
//   users[0].age;
// })();

// -- How pros do things
// -- Example 2
// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//   const res = await fetch(`http://example.com${path}`);
//   const data = await res.json();
//   return data;
// };

// (async () => {
//   const users = await fetchData<IUser[]>("/users");
//   users[0].id;
//   users[0].name;
//   users[0].age;

//   const posts = await fetchData<IPost[]>("/posts");
//   posts[0].id;
//   posts[0].title;
//   posts[0].description;
// })();

// --- Structural typing or Duck typing ---
// -- Example 1
// interface ICredential {
//   username: string;
//   password: string;
//   isAdmin: boolean;
// }

// const login = (credentials: ICredential): boolean => {
//   console.warn(credentials);
//   return true;
// };

// const user = {
//   username: "Astr",
//   password: "secret",
//   isAdmin: true,
// };

// login(user);

// -- Example 2
// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
// }

// const auth: IAuth = {
//   username: "Astr",
//   password: "secret",
//   login(username: string, password: string) {
//     console.warn(username, password);
//     return true;
//   },
// };
