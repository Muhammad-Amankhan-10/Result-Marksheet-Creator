   
   let username = prompt ("Please Enter your Name");
   let fatherName = prompt ("Enter your Father Name");
   if (!username) {
      alert("Error: Name is required..! , Otherwise your Result will Generate without Name..!");
   }
   if (!fatherName) {
    alert("Error: fatherName is required..! , Otherwise your Result will Generate without Name..!");
   }
    
   let totalmarks = prompt ("Enter your Total marks");
   let obtainedmarks = prompt ("Enter your Obtained marks");

   let percentage = (obtainedmarks / totalmarks) * 100 ;
   
   let grade;
   let regards;

   if (percentage >=85 && percentage < 100){
     grade = "A+1";
     regards = "CONGRATULATIONS YOU ARE THE GENIUS..!";
   } 
   else if (percentage >=70 && percentage < 85){
     grade = "A";
     regards = "VERY NICE PERFORMANCE"; 
   }
   else if (percentage >=60 && percentage < 70){
     grade = "B";
     regards = "GOOD BETTER LUCK NEXT TIME";
   }
   else if (percentage >=50 && percentage < 60){
    grade = "C";
    regards = "BETTER NEED IMPROMENT";
   }
   else if (percentage >=40 && percentage < 50){
    grade = "D";
    regards = "NEED HARD WORRK..";
   }
   else if (percentage >=40 && percentage < 0){
    grade = "FAIL";
    regards = "NEED VERY HARK WORK ";
   }

   alert(`Result for : ${username} : \nFather Name : ${fatherName} : \nObtained Marks : ${obtainedmarks} : \nTotal Marks : ${totalmarks} : \nPercentage : ${percentage.toFixed(2)} : \nGrade : ${grade} : \nRegards : ${regards} :`)





   