/*🔹 Problem: “Employee Data Manager”

You’re given an object containing employee details. You need to perform multiple operations on it.

const employee = {
  name: "Saim",
  age: 25,
  position: "Frontend Developer",
  salary: 40000,
  skills: ["JavaScript", "React", "Next.js"],
  address: {
    village: "East Bhujpur",
    city: "Chattogram",
    country: "Bangladesh"
  }
};

🔹 Your Tasks
1️⃣ Access Properties

Print the employee’s name and city.
👉 Use: dot notation and bracket notation.

2️⃣ Update and Add

Update the salary to 45,000.

Add a new property: experience: "2 years".
👉 Use: assignment (=).

3️⃣ Loop through keys

Print all property names and values.
👉 Use: for...in loop.

4️⃣ Check Property Exists

Check if skills and married properties exist.
👉 Use: hasOwnProperty() or in operator.

5️⃣ Work with Arrays Inside Object

Add "TypeScript" to the skills array.

Print all skills in one line.
👉 Use: push() and join().

6️⃣ Nested Object Access

Print the country name from inside the address object.
👉 Use: nested property access (employee.address.country).

7️⃣ Delete Property

Delete the age property from the object.
👉 Use: delete keyword.

🖨 Expected Output Example:
Name: Saim
City: Chattogram

Updated Salary: 45000
Experience: 2 years

Properties:
name → Saim
age → 25
position → Frontend Developer
salary → 45000
skills → JavaScript,React,Next.js,TypeScript
address → [object Object]
experience → 2 years

Has skills? true
Has married? false

Skills: JavaScript, React, Next.js, TypeScript
Country: Bangladesh

After deleting age → { name: 'Saim', position: 'Frontend Developer', salary: 45000, ... }


Would you like me to now show you the full JavaScript solution for this object problem (step by step, like we did for strings and numbers)?*/



const employee = {
  name: "Saim",
  age: 25,
  position: "Frontend Developer",
  salary: 40000,
  skills: ["JavaScript", "React", "Next.js"],
  address: {
    village: "East Bhujpur",
    city: "Chattogram",
    country: "Bangladesh"
  }
};


console.log(`${employee["name"]} \n${employee["address"]["city"]}`);
console.log("\n");


employee.salary= 45000;
console.log(employee.salary);
console.log("\n");



employee.experience = "2 years";
console.log(employee.experience);
console.log("\n");



console.log("Properties: ");
console.log("\n");

for ( const key in employee){
    console.log(`${key} -> ${employee[key]}`);
}


console.log("\n");

console.log(`Has Skills? ${employee.hasOwnProperty("skills")}`);
console.log(`Has married? ${employee.hasOwnProperty("married")}`);
console.log("\n");

employee.skills.push("TypeScript");

console.log("\n");


console.log(`Skills: ${employee.skills.join(", ")}`);
console.log("\n");  


console.log(`Country: ${employee.address.country}`);
console.log("\n");

delete employee.age;
console.log("After deleting age -> ", employee);