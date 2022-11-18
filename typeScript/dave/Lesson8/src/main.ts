// Generics

const stringEcho = (arg: string): string => arg; // only String type

const echo = <T>(arg: T): T => arg; // with all parameters

// Check if the input is Array ot not
const isObj = <T>(arg: T): boolean =>
  typeof arg === "object" && !Array.isArray(arg) && arg !== null;

console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));

// Check if input contains data or not
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(true));
console.log(isTrue("Dave"));
console.log(isTrue(1));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([1, 2, 3]));

console.log(isTrue(false));
console.log(isTrue(""));
console.log(isTrue(0));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(-0));

interface BooCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BooCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasId {
  id: number;
}

// Whit this way user mut have HasId defined properties
const processUser = <T extends HasId>(user: T): T => {
  // process user with logic
  return user;
};

console.log(processUser({ id: 1, name: "David" }));
// console.log(processUser({ name: "David" }));

const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "James",
    email: "James@gmail.com",
    phNo: "9900990099",
  },
  {
    id: 2,
    name: "Dax",
    email: "Dax@gmail.com",
    phNo: "9988998899",
  },
];

console.log(getUserProperty(usersArray, "id"));
console.log(getUserProperty(usersArray, "name"));
console.log(getUserProperty(usersArray, "email"));
console.log(getUserProperty(usersArray, "phNo"));

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<string>("John");

console.log(store.state);
store.state = "Dave";
// store.state = 12;

const myState = new StateObject<(number | string | boolean)[]>([12]);
