// Arrays
let myGirls = ["Itrat" , "Muneeba"];
let myBoys = ["Shaheer" , "Hashir"];
let myChildrens = myBoys.concat(myGirls);
console.log(myBoys);
console.log(myChildrens);

// Unshift
let fruits = ["Banana" , "orange" , "Mango" , "Peach"];
fruits.unshift("Grapes");
console.log(fruits);

// Shift
let vegetable = ["Onion" , "Potato"];
console.log(vegetable);
vegetable.shift();
console.log(vegetable.shift());

// Slice
let fastfood = ["Burger" , "French Fries" , "Pizza" , "Momos"];
console.log(fastfood);
let piece_of_Array = fastfood.slice(1,3);
console.log(piece_of_Array);

// Splice
let months = ["June" , "Octuber" , "July" , "Saturday" , "Friday" , "Sunday"];
let days = months.splice(3);
console.log(days);
console.log(months);

// Task
let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(company);
company.shift();
console.log(company.shift());
 
