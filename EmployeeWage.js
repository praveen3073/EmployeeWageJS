console.log("Welcome to Employee Wage Simulation")
// UC1 Check Employee Present Or Absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 100) % 2;
    if(empCheck == IS_ABSENT) {
        console.log("UC1- Employee is absent");
        return;
    }
    else
        console.log("UC1- Employee is present"); 
}

// UC2 Calculate Daily Wage Based On Part Time Or Full Time Work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 100) % 3;
switch(empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2- Employee Wage: " + empWage);