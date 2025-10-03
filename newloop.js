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



  