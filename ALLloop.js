// use all loop in one problem
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