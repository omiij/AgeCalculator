function calculateage() {
  let D_date = document.getElementById("DOB_date").value;
  let D_months = document.getElementById("DOB_Months").value;
  let D_year = document.getElementById("DOB_year").value;

  if (D_date > 31 || D_date < 1) {
    alert("Input valid date");
    return;
  }

  if (D_year < 1971) {
    alert("Input valid year");
    return;
  }

  let DOB = new Date(`${D_date} ${D_months} ${D_year}`);
  console.log(DOB.getFullYear());
  console.log(DOB.getMonth());
  console.log(DOB.getDate());

  let Age_date = document.getElementById("Age_at_date").value;
  let Age_months = document.getElementById("Age_at_Months").value;
  let Age_year = document.getElementById("Age_at_year").value;

  if (Age_at_date > 31 || Age_at_date < 1) {
    alert("Input valid date");
    return;
  }

  if (Age_at_year < 1971) {
    alert("Input valid year");
    return;
  }

  let Curr = new Date(`${Age_date} ${Age_months} ${Age_year}`);

  console.log(Curr.getFullYear());
  let AGE=Curr-DOB;
  if(Curr<DOB){
    alert("Person is not born yet!!");
    return;
  }
  console.log(AGE);
  document.getElementById("year").innerHTML=Math.floor(AGE/(1000*60*60*24*365))+" year";
  let AZ=Math.floor(AGE%(1000*60*60*24*365));
  document.getElementById("month").innerHTML=Math.floor(AZ/(1000*60*60*24*31))+" months";
   let DAYS = Math.floor(AZ % (1000 * 60 * 60 * 24 * 31));

  document.getElementById("days").innerHTML = DAYS / (1000 * 60 * 60 * 24);
}
