
let username = prompt("Please Enter your Name");
   let fatherName = prompt("Enter your Father Name");

   if (!username) {
      alert("Error: Name is required..! Otherwise your Result will Generate without Name..!");
   }
   if (!fatherName) {
    alert("Error: Father Name is required..! Otherwise your Result will Generate without Name..!");
   }

   let totalmarks = prompt("Enter your Total marks");
   let obtainedmarks = prompt("Enter your Obtained marks");

   let percentage = (obtainedmarks / totalmarks) * 100;
   let grade;
   let regards;

   if (percentage >= 85 && percentage <= 100) {
     grade = "A+1";
     regards = "CONGRATULATIONS! YOU ARE A GENIUS!";
   } 
   else if (percentage >= 70 && percentage < 85) {
     grade = "A";
     regards = "VERY NICE PERFORMANCE"; 
   }
   else if (percentage >= 60 && percentage < 70) {
     grade = "B";
     regards = "GOOD! BETTER LUCK NEXT TIME";
   }
   else if (percentage >= 50 && percentage < 60) {
    grade = "C";
    regards = "BETTER, BUT NEEDS IMPROVEMENT";
   }
   else if (percentage >= 40 && percentage < 50) {
    grade = "D";
    regards = "NEEDS HARD WORK";
   }
   else if (percentage < 40 && percentage >= 0) {
    grade = "FAIL";
    regards = "NEEDS MUCH HARDER WORK";
   }

   document.write(`
     <div class="result-container">
       <h2>Student Result</h2>
       <p><span class="highlight">Name:</span> ${username || 'N/A'}</p>
       <p><span class="highlight">Father's Name:</span> ${fatherName || 'N/A'}</p>
       <p><span class="highlight">Total Marks:</span> ${totalmarks}</p>
       <p><span class="highlight">Obtained Marks:</span> ${obtainedmarks}</p>
       <p><span class="highlight">Percentage:</span> ${percentage.toFixed(2)}%</p>
       <p><span class="highlight">Grade:</span> ${grade}</p>
       <div class="remarks">${regards}</div>
     </div>
   `);