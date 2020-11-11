console.log("Welcome to Employee Wage Simulation")

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 100) % 2;
if(empCheck == IS_ABSENT)
    console.log("Employee is absent");
else
    console.log("Employee is present");