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
