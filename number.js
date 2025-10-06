/*Excellent 👏 You’ve mastered strings, now let’s jump into a number-focused JavaScript problem that helps you learn every important number operation and method from W3Schools — all in one challenge.

🔹 Problem: “Student Score Analyzer”

You are given a list of student scores in a test. You’ll perform various number operations — rounding, finding max/min, generating random numbers, and doing math calculations.

const scores = [78.6, 85.4, 91.9, 67.3, 88.5];

🔹 Your Tasks
1️⃣ Basic Math Operations

Find the total and average score.

Round the average to 2 decimal places.

👉 Use: +, /, Math.round(), .toFixed()

2️⃣ Find Max and Min Scores

Get the highest and lowest score.

👉 Use: Math.max(), Math.min(), and the spread operator (...)

3️⃣ Random Bonus

Add a random bonus between 1 and 5 points to each student’s score.

Use Math.random() and Math.floor().

👉 Use: map(), Math.random(), Math.floor()

4️⃣ Square Root and Power

Find the square root of the lowest score.

Find the cube of the highest score.

👉 Use: Math.sqrt(), Math.pow()

5️⃣ Absolute Difference

Calculate the absolute difference between the highest and lowest scores.

👉 Use: Math.abs()

6️⃣ Convert Number to String and Back

Convert the average score to a string.

Then convert it back to a number.

👉 Use: toString(), Number(), or parseFloat()

✅ Expected Output Example:
Total: 411.7
Average: 82.34
Highest: 91.9
Lowest: 67.3
After Bonus: [83, 89, 95, 70, 92]
Square Root of Lowest: 8.20
Cube of Highest: 776,239.86
Difference: 24.6
Average as String: "82.34"
Average as Number: 82.34

💡 Bonus Challenge:

Generate 10 random scores between 50 and 100, round them, and print their average.
👉 Use: for loop, Math.random(), Math.round()

*/


const scores = [78.6, 85.4, 91.9, 67.3, 88.5];

let total = 0;
for( const score of scores){
    total += score; 

}

 let max = Math.max(...scores);
 let min = Math.min(...scores);

  console.log("Total: ", total);
  let average = total / scores.length;
  console.log("Average: ", average.toFixed(2));


console.log("Highest: ", max);
console.log("Lowest: ", min);