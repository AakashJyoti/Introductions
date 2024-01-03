// Take an Array and loop through its original properties

Array.prototype.extraProperty = "Aakash";

const myNewArray = [1, 2, 3, 4, 5];

for (const v in myNewArray) {
  if (myNewArray.hasOwnProperty(v)) {
    console.log(v);
  }
}
