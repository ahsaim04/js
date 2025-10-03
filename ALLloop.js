/*🔹 Problem Statement

You are given an object containing students and their scores in different subjects.

const students = {
  Alex: [85, 90, 78],
  Bella: [92, 88, 95],
  Chris: [70, 75, 80],
  Diana: [60, 65, 70]
};

Your Task:

Use a for loop → Print each student's average score.

Use a while loop → Count how many students have an average score above 80.

Use a do...while loop → Print numbers from 1 to the number of students.

Use a for...in loop → Print each student's name.

Use a for...of loop → For each student, print all their subject scores.

🔹 Expected Output (example)
Alex → Average: 84.33
Bella → Average: 91.67
Chris → Average: 75.00
Diana → Average: 65.00

Students above 80: 2

1
2
3
4

Student: Alex
Scores: 85 90 78
Student: Bella
Scores: 92 88 95
Student: Chris
Scores: 70 75 80
Student: Diana
Scores: 60 65 70


👉 Do you want me to also write the full JavaScript solution code for this, or just leave it as a problem for you to solve?

You said:
how select  2 d*/




const students = {
  Alex: [85, 90, 78],
  Bella: [92, 88, 95],
  Chris: [70, 75, 80],
  Diana: [60, 65, 70]
};


let allSAS=[];
let alltotal = [];

for (const i in students) {
  let total = 0;
  for(const j of students[i]) {
    total += j;
  }
alltotal.push(total);

  let average = total / students[i].length;
  allSAS.push(average);
  console.log(`${i} -> Average: ${average.toFixed(2)}`);
}



let count=0;
for(let k of allSAS){
  if(k>80){
    count++;
  }
}

console.log(`\n`);
console.log(`\n`);

console.log(`Students above 80: ${count}`);

console.log(`\n`);
console.log(`\n`);

let h = 1;

do {
  console.log(h);
  h++;
} while (h <= Object.keys(students).length);

  console.log(`\n`);

for (i in students) {
  console.log(`Student : ${i}`);

  console.log(`Score : ${students[i]}`);
  console.log(`\n`);

}

console.log(`\n`);

for(const i in allSAS){
  console.log(`Top `)
}