console.log("Welcome to Employee Wage Simulation")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }    
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empObjectArray = new Array();

while(totalEmpHrs < 160 && totalWorkingDays < 20) {
    let empCheck = Math.floor(Math.random() * 100) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    totalWorkingDays++;
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);

    empObjectArray.push(
        {
            day: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return "\nDay: " + this.day + ", EmpHours: " + this.dailyHours + ", EmpWage: " + this.dailyWage;
            }
        }
    );
}
    
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Daily Wage Array: " + empDailyWageArray.join(", "));
console.log("Total Hours: " + totalEmpHrs);
console.log("Employee Wage: " + empWage);
console.log("Total Working Days: " + totalWorkingDays);
console.log("---------------------------------------");

// Array helper function
// UC7a : totalEmpWage using forEach loop
{
    console.log("UC7a : TotEmpWage using forEach on empDailyWageArray")
    
    let totEmpWage = 0;
    function sum(empWage) {
        totEmpWage += empWage;
    }

    empDailyWageArray.forEach(sum);
    console.log("Daily Wage Array: " + empDailyWageArray.join(", "));
    console.log("Total Hours: " + totalEmpHrs);
    console.log("Employee Wage: " + totEmpWage);
    console.log("Total Working Days: " + totalWorkingDays);
    console.log("---------------------------------------");
}

// UC7a : totalEmpWage using reduce
{
    console.log("UC7a : TotEmpWage using reduce on empDailyWageArray")

    function totalWages(totWages, dailyWage) {
        return totWages + dailyWage;
    }

    console.log("Daily Wage Array: " + empDailyWageArray.join(", "));
    console.log("Total Hours: " + totalEmpHrs);
    console.log("Employee Wage: " + empDailyWageArray.reduce(totalWages, 0));
    console.log("Total Working Days: " + totalWorkingDays);
    console.log("---------------------------------------");
}

// UC7b : Show (day, dailyWage) using Array map helper function
console.log("UC7b : Daily Wage Map");

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
} 

let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map: " + mapDayWithWageArray.join(", "));
console.log("---------------------------------------");

// UC7c : Show days when full time wage of 160
console.log("UC7c : Daily Wage Filter When Full Time Wage Earned");

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Full Day Wage Array: " + fullDayWageArray.join(", "));
console.log("---------------------------------------");

// UC7d : Find the first occurence when full time wage was earned using find function
console.log("UC7d : First Day When Full Time Wage Was Earned");

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("First Full Time Wage Day: " + mapDayWithWageArray.find(findFullTimeWage));
console.log("---------------------------------------");

// UC7e : Check if every element of fullDayWageMap is truely holding full time wage
console.log("UC7e : Verify All Elements Of FullDayWageMap Using Every");

function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("FullDayWageMap contains full day wage elements: " + fullDayWageArray.every(isAllFullTimeWage));
console.log("---------------------------------------");

// UC7f : Check if mapDayWithWage contains any part time wage using some function
console.log("UC7f : Verify If MapDayWithWage Contains Part Time Wage");

function isSomePartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("MapDayWithWage contains any part time wage elements: " + mapDayWithWageArray.some(isSomePartTimeWage));
console.log("---------------------------------------");

// UC7g : Number of days employee actually worked using reduce function
console.log("UC7g : Number Of Days Employee Actually Worked");

function totalDaysWorked(totalDays, dailyWage) {
    if(dailyWage > 0)
        return totalDays + 1;
    return totalDays;
}

console.log("Total days worked: " + empDailyWageArray.reduce(totalDaysWorked, 0));
console.log("---------------------------------------");

// UC8 : Get total employee wage from a empDailyWageMap
{
    console.log("UC8: Total Employee Wage From EmpDailyWageMap");

    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }

    console.log("Total employee wage: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
    console.log("---------------------------------------");
}

// UC9a : Calculate total wage and total hours using arrow functions
{
    console.log("UC9a : Total Wage And Total Hours Using Arrow Functions");

    const findTotal = (totalVal, val) => {return totalVal + val;};
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalWage = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);
    console.log("Total hours: " + totalHours);
    console.log("Total wages: " + totalWage);
    console.log("---------------------------------------");
}

// UC9b : Show Full Working Days, Part Working Days And No Working Days
{
    console.log("UC9b : Show Full Working Days, Part Working Days And No Working Days");

    let fullWorkDaysArray = new Array();
    let partWorkDaysArray = new Array();
    let noWorkDaysArray = new Array();

    empDailyHrsMap.forEach( (value, key) => {
        if(value == 8)
            fullWorkDaysArray.push(key);
        else if(value == 4)
            partWorkDaysArray.push(key);
        else
            noWorkDaysArray.push(key);
    });

    console.log("Full time working days: " + fullWorkDaysArray.join(", "));
    console.log("Part time working days: " + partWorkDaysArray.join(", "));
    console.log("No time working days: " + noWorkDaysArray.join(", "));
    console.log("---------------------------------------");
}

// UC10 Store Day, Daily Hours And Daily Wage In An Object And Print
{
    console.log("UC10 : Display Employee Object Array Containing Day, Daily Hours And Daily Wage");
    console.log(empObjectArray.toString());
    console.log("---------------------------------------");
}

// UC11a - UC11d Using Object Functions Along With Arrow Functions
{
    console.log("UC11a - UC11d Using Object Functions Along With Arrow Functions")

    // UC11a Calculate Total Wages And Hours Using Object Functions And Arrow Functions
    console.log("\nUC11a : Calculate Total Wages And Hours Using Object Functions And Arrow Functions");
    let totWages = empObjectArray.filter(empObj => empObj.dailyWage > 0)
                                 .reduce((totalWages, empObject) => totalWages += empObject.dailyWage, 0);
    let totHours = empObjectArray.filter(empObj => empObj.dailyHours > 0)
                                 .reduce((totalHours, empObj) => totalHours += empObj.dailyHours, 0);
    console.log("Total Wages: " + totWages);
    console.log("Total Hours: " + totHours);

    // UC11b Show Full Working Days Using ForEach And Object Functions
    console.log("\nUC11b : Show Full Working Days Using ForEach And Object Functions");
    process.stdout.write("Full Working Days: ")
    empObjectArray.filter(empObj => empObj.dailyHours == 8)
                  .forEach(empObj => process.stdout.write(empObj.toString()));
    
    // UC11c Show Part Time Working Days Using Map And Object Functions
    console.log("\nUC11c : Show Part Time Working Days Using Map And Object Functions");
    process.stdout.write("Part Time Working Days: ");
    let partWorkingDaysArray = empObjectArray.filter(empObj => empObj.dailyHours == 4)
                  .map(empObj => empObj.toString());
    console.log(partWorkingDaysArray);

    // UC11d Show Non Working Days Using Map Function And Object Function
    console.log("\nUC11d : Show Non Working Days Using Map Function And Object Function")
    process.stdout.write("Non Working Days: ");
    let nonWorkingDaysArray = empObjectArray.filter(empObj => empObj.dailyHours == 0)
                                            .map(empObj => empObj.toString());
    console.log(nonWorkingDaysArray);
}