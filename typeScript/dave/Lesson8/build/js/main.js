"use strict";
// Generics
const stringEcho = (arg) => arg; // only String type
const echo = (arg) => arg; // with all parameters
// Check if the input is Array ot not
const isObj = (arg) => typeof arg === "object" && !Array.isArray(arg) && arg !== null;
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));
// Check if input contains data or not
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
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
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// Whit this way user mut have HasId defined properties
const processUser = (user) => {
    // process user with logic
    return user;
};
console.log(processUser({ id: 1, name: "David" }));
// console.log(processUser({ name: "David" }));
const getUserProperty = (users, key) => {
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
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12;
const myState = new StateObject([12]);
