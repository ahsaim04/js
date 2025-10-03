/*🔹 Problem: “User Profile Analyzer”

You are given some user data as strings. You must clean, analyze, and format the data properly using different string methods.

const fullName = "   ahmed hossain saim   ";
const email = "SAIM@GMAIL.COM";
const bio = "i love coding. javascript is awesome!";
const hobby = "Football,Cricket,Music";

🔹 Your Tasks
1️⃣ Trim and format name

Remove extra spaces.

Make the first letter of each word uppercase.

👉 Use: trim(), split(), toUpperCase(), toLowerCase(), join()

2️⃣ Normalize email

Convert email to lowercase.

Check if it includes “@gmail.com”.

Find the index of “@” symbol.

Extract only the username (before the @).

👉 Use: toLowerCase(), includes(), indexOf(), slice()

3️⃣ Bio Formatting

Replace “javascript” with “JavaScript ❤️”.

Convert the first letter of the whole bio to uppercase.

👉 Use: replace(), charAt(), toUpperCase(), slice()

4️⃣ Hobby List

Split hobbies into an array.

Join them with | symbol instead of commas.

Check if the user’s hobbies include “Cricket”.

👉 Use: split(), join(), includes()

5️⃣ Combine Everything

Make a final formatted string like:

Name: Ahmed Hossain Saim
Email: saim@gmail.com
Username: saim
Bio: I love coding. JavaScript ❤️ is awesome!
Hobbies: Football | Cricket | Music

💡 Bonus Challenge

Count how many times the letter “a” appears in the fullName.
👉 Use: match() or replace() with regex. */





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


// bio formatting
