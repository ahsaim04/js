/* 🔹 Problem Statement:

You are given a dataset of employees, their worked hours per week, and hourly pay rate.

const employees = [
  { name: "Alex", hours: [8, 9, 7, 10, 6], rate: 15 },
  { name: "Bella", hours: [10, 10, 10, 10, 10], rate: 20 },
  { name: "Chris", hours: [5, 6, 5, 6, 5], rate: 12 },
  { name: "Diana", hours: [9, 8, 10, 9, 10], rate: 18 }
];

🔹 Your Tasks

for loop → For each employee, calculate their total hours worked.

for...of loop → Print each employee’s daily hours nicely.

while loop → Count how many employees worked more than 40 hours.

do...while loop → Print a message “Processing employee #X” for each employee.

for...in loop → For one employee object, print all its properties and values.

Bonus Challenge → Find the highest paid employee (total hours × rate).

🔹 Expected Output:
Alex → Total Hours: 40
Bella → Total Hours: 50
Chris → Total Hours: 27
Diana → Total Hours: 46

Daily hours:
Alex: 8, 9, 7, 10, 6
Bella: 10, 10, 10, 10, 10
Chris: 5, 6, 5, 6, 5
Diana: 9, 8, 10, 9, 10

Employees with more than 40 hours: 2

Processing employee #1
Processing employee #2
Processing employee #3
Processing employee #4

Employee Object:
name → Alex
hours → 8,9,7,10,6
rate → 15

Top Earner: Bella → $1000


👉 This combines all 5 loop types into one real-life payroll system challenge.

Do you want me to write the full JavaScript solution for this problem, or keep it as a challenge for you to solve step by step?
*/


const employees = [
    { name: "Alex", hours: [8, 9, 7, 10, 6], rate: 15 },
    { name: "Bella", hours: [10, 10, 10, 10, 10], rate: 20 },
    { name: "Chris", hours: [5, 6, 5, 6, 5], rate: 12 },
    { name: "Diana", hours: [9, 8, 10, 9, 10], rate: 18 }
  ];
  let alltotal = [];

  
  for(const i in employees){
    let total = 0;
    for(const j of employees[i].hours){
        total += j;
    }
     alltotal.push(total);
    console.log(`${employees[i].name} -> total salary  ${total}`);
  }

  console.log(`\n`);
console.log("daily hours")
console.log(`\n`);
for (const i of employees){
    console.log(`${i.name} : ${i.hours}`);
}

count = 0;
let i = 0;

while(i < alltotal.length){
    if( alltotal[i] > 40){
      count++;
    }
    i++;
  }
  console.log(`\n`);
  console.log(`Employees worked more than 40 hours: ${count}`);
  console.log(`\n`);



 let h = 1;

do {
  console.log(`Processing employee #${h}`);
  h++;
} while (h <= Object.keys(employees).length);


console.log(`\n`);
console.log("Employee Objects ");
  for (const i  of employees) {
   if(i == employees[0])
    { console.log( `Name -> ${i.name}`);
    console.log( `Hours -> ${i.hours}`);
    console.log( `Rate -> ${i.rate}`);
    console.log(`\n`);
    }
    else break;
  }
  console.log(`\n`);
