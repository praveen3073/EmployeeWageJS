class EmployeePayrollData {
    // properties
    id;
    salary;

    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Koko", 20000);
console.log(employeePayrollData.toString());