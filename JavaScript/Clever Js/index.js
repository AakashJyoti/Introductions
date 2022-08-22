// console.log("Hello World");

// ####################
//  ------Arrays------

// const grocerries = ["apple", "banana", "oranges", "pear"];

// console.log(grocerries);

//   ----indexing---
// console.log(grocerries[0]);
// console.log(grocerries[1]);
// console.log(grocerries[2]);
// console.log(grocerries[3]);
// console.log(grocerries[12]);

// grocerries.push("cookie");
// console.log(grocerries);

// grocerries.push("blueberry");
// console.log(grocerries);

// console.log(grocerries.slice(0, 3));
// console.log(grocerries.slice(2, 3));
// console.log(grocerries.slice(1, 4));

// console.log(grocerries.indexOf("pear"));

// console.log(grocerries.length);

// ####################
//  ------Objects------
// key value pares

// const person = { name: "Lenonardo", shirt: "white" };
// const person2 = { name: "Qazi", shirt: "black" };

// console.log(person);
// console.log(person2);

//  --Dot Notation
// console.log(person.name);
// console.log(person.shirt);

//  --Bracket Notation
// console.log(person["name"]);
// console.log(person["shirt"]);

// assign object
// person.phone = "9999888822"
// person["phone"] = "9999888822";

// console.log(person);
// console.log(person.phone);
// console.log(person2.shirt);
// console.log(person2.name);

// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liability: 50000,
//     netWorth: function () {
//       return this.assets - this.liability;
//     },
//   };
//   const intro = `Hi name is ${person.name} and color of my shirt is ${person.shirt} and my net worth is ${person.netWorth()} `;
//   return intro;
// };

// console.log(introducer("Qazi", "black"));
// console.log(introducer("Leonardo", "white"));

// const howManyLetters = () => {
//   let reult = 0;

//   for (index in phrase) {
//     // console.log(Number(index) + 1);
//     reult = Number(index) + 1;
//   }
//   return { reult };

//   // for (const letter of phrase) {
//   //   console.log(letter);
//   // }
// };

// const phrase = "hey, can please you go to grocecery for me?";
// const phrase1 = prompt("enter your phrase");

// console.log(howManyLetters(phrase));
// console.log(phrase.length);

const sunArray = (numbers) => {
  let result = 0;
  // for loop
  for (const num of numbers) {
    result += num;
  }

  return { result };
};

// console.log(sunArray([1, 2, 3, 4]));

const findMax = (numbers) => {
  let result = numbers[0];

  for (const num of numbers) {
    if (num > result) {
      result = num;
    }
  }
  return { result };
};

// console.log(findMax([1, 2, 4, 3]));

const letterFrequency = (phase) => {
  let result = {};

  for (const letter of phase) {
    if (letter in result) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

// console.log(letterFrequency("Ha bhai kya haal hai tere"));

const wordFreq = (phase) => {
  let result = {};

  const spreadByWord = phase.split(" ");

  for (const word of spreadByWord) {
    if (word in result) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }

  return result;
};

// console.log(wordFreq("तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा ढोलना, वजे तुंबे वाली तार सूड दिल दे पुकार आजा करले ये प्यार ढोलना, वजे तुंबे वाली तार सूड दिल दे पुकार आजा करले ये प्यार ढोलना, वजे तुंबे वाली तार सूड दिल दे पुकार आजा करले ये प्यार ढोलना, वजे तुंबे वाली तार सूड दिल दे पुकार आजा करले ये प्यार ढोलना... तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी सून्न यारा बोले एक तारा मेहन्दी दा यारा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा ढोलना कड़ेह मेरे नाल हस्स मैनु दिल वॅली दस नहीं तां तेरी मेरी बस ढोलना कड़ेह मेरे नाल हस्स मैनु दिल वॅली दस नहीं तां तेरी मेरी बस ढोलना कड़ेह मेरे नाल हस्स मैनु दिल वॅली दस नहीं तां तेरी मेरी बस ढोलना कड़ेह मेरे नाल हस्स मैनु दिल वॅली दस नहीं तां तेरी मेरी बस ढोलना... तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी सून्न यारा बोले एक तारा मेहन्दी दा यारा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा ढोलना तू छान्न में चकोर सद्डे वरगा ना होर रब हाथ सद्दी डोर ढोलना तू छान्न में चकोर सद्डे वरगा ना होर रब लग सद्दी डोर ढोलना तू छान्न में चकोर सद्डे वरगा ना होर रब हाथ सद्दी डोर ढोलना तू छान्न में चकोर सद्डे वरगा ना होर रब हाथ सद्दी डोर ढोलना... तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी दुनिया यारा रंग-बिरंगी' नाल पैदी नये चंगी सून्न यारा बोले एक तारा मेहन्दी दा यारा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा तुनक तुनक तूँ, तुनक तुनक तूँ तुनक तुनक तूँ, दा दा दा"));
// console.log(wordFreq("lol what lol"));
