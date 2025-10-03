/* 🔹 Problem Statement:

You are given a shop order system where each customer has placed multiple orders with prices.

const orders = {
  Alex: [120.50, 89.99, 45.00],
  Bella: [300.00, 150.25],
  Chris: [50.00, 60.00, 70.00, 100.00],
  Diana: [500.00]
};

Your Tasks:

for loop → For each customer, calculate their total spending.

while loop → Count how many customers spent more than 200.

do...while loop → Print numbers from 1 to the number of customers.

for...in loop → Print each customer’s name.

for...of loop → For each customer, print all their order values.

Bonus Challenge → Find the customer who spent the most (use any loop you want).

🔹 Expected Output:
Alex → Total: 255.49
Bella → Total: 450.25
Chris → Total: 280.00
Diana → Total: 500.00

Customers who spent more than 200: 3

1
2
3
4

Customer: Alex
Orders: 120.5, 89.99, 45
Customer: Bella
Orders: 300, 150.25
Customer: Chris
Orders: 50, 60, 70, 100
Customer: Diana
Orders: 500

Top Spender: Diana → 500.00


👉 This one is more real-world (like a POS system), not just numbers.
Do you want me to also write the full JavaScript solution code for this complex problem, or keep it as a challenge for you to solve? */

const orders = {
    Alex: [120.50, 89.99, 45.00],
    Bella: [300.00, 150.25],
    Chris: [50.00, 60.00, 70.00, 100.00],
    Diana: [500.00]
  };
   let allToatal = [];
   let allAvarage = [];
   let maxax = 0;
   let maxName = "";

  for(const i in orders){
    let total = 0;
    for(const k of orders[i]){
        total += k;
    } 
    if(total > maxax)
{
  maxax = total;
  maxName = i;
}
    allToatal.push(total);
    
    let average = total / orders[i].length;
    allAvarage.push(average);
    console.log(`${i}  -> total  ${total}`)
  }

  let count = 1;
  let idx = 0;
  while (idx < allAvarage.length) {
    const i = allAvarage[idx];
    if (i > 200) count++;
    idx++;
  }

  
  console.log(`\n`);
  console.log(`customers who spent more than 200: ${count}`);
  console.log(`\n`);
 
  let sidx = 1;
  do {
    console.log(sidx);
    sidx++;
  }while ( sidx <= Object.keys(orders).length)
  console.log(`\n`);
  console.log(`\n`);

  for (const i in orders) {
    console.log(`Customer : ${i}`);
    console.log(`Orders: ${orders[i]}`)
  }
  console.log(`\n`);


  
  console.log(`Top Spender : ${maxName} -> ${maxax}`);
  console.log(`\n`);



  