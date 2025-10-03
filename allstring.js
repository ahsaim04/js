const fullName = "   ahmed hossain saim   ";
const email = "SAIM@GMAIL.COM";
const bio = "i love coding. javascript is awesome!";
const hobby = "Football,Cricket,Music";


let word = fullName.trim();

let word2 = word.split(" ");

let word3 = word2.map( word4 => word4.charAt(0).toUpperCase() + word4.slice(1).toLowerCase() );
let properName = word3.join(" ");

console.log(`Name: ${properName}`);


let email2 = email.toLowerCase();


let isgmail = email2.includes("@gmail.com");

let index = email2.indexOf("@");


let username  = email2.slice(0, index);

console.log(`Email: ${email2}`);
console.log(`Username: ${username}`);
console.log(`Is Gmail: ${isgmail}`);
console.log( `name : ${username} `);
console.log(`index of @: ${index}`);

