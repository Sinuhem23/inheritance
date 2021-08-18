var text = '<ul>';

var idnum = 0; //declared globally

class Employee {
  static count = 0;

  constructor(fname, lname) {
    //instance variables or object variables
    this.fname = fname;
    this.lname = lname;
    this.id = ++idnum;
  } //closing constuctor

  static countEmployees() {
    Employee.count++;
  }

  getFullName() {
    let fullname = this.fname + ' ' + this.lname;
    this.fullname = fullname;
  }

  getEmployeeDetails() {
    text = text + '<li>' + this.id + '  ' + this.fullname + '  ';
    return text;
  }
} //closing employee class

class SchoolEmployee extends Employee {
  static count = 0;
  constructor(fname, lname, schoolName, designation, salary) {
    super(fname, lname);
    this.schoolName = schoolName;
    this.designation = designation;
    this.salary = salary;
  }

  static countEmployees() {
    SchoolEmployee.count++;
  }

  displaySchoolEmp() {
    this.getEmployeeDetails();
    text =
      text +
      this.schoolName +
      '  ' +
      this.designation +
      '  ' +
      this.salary +
      '</li>';
    return text;
  }
} //closing SchoolEmployee

class EmployerOfMonth extends Employee {
  constructor(fname, lname, id, rating, month) {
    super(fname, lname, id);
    this.rating = rating;
    this.month = month;
    console.log(this.fname, this.lname, this.rating, this.month);
  }
  displayEmpOfMonth() {
    text = `<li>${this.id} Employer of the month goes to ${this.fname} ${this.lname} for the month of ${this.month} with a rating of ${this.rating}</li>`;
    return text;
  }
}
// End of EmployerOfMonth

let employee1 = new EmployerOfMonth('Sinuhe', 'M.', 1000, 'January');
SchoolEmployee.countEmployees();
employee1.displayEmpOfMonth();
console.log(employee1);
// console.log(employee1.winner());

const semp1 = new SchoolEmployee(
  'James',
  'Ford ',
  'RH School ',
  'Math Prof. ',
  5250
);
semp1.getFullName();
semp1.displaySchoolEmp();
SchoolEmployee.countEmployees();

const semp2 = new SchoolEmployee(
  'Alice',
  'Thompsan ',
  'WWP School ',
  'Science Prof. ',
  5700
);
semp2.getFullName();
semp2.displaySchoolEmp();
SchoolEmployee.countEmployees();

const semp3 = new SchoolEmployee(
  'John',
  'Smith ',
  'Hamilton School ',
  'Comp.Sci Prof. ',
  5700
);
semp3.getFullName();
semp3.displaySchoolEmp();
SchoolEmployee.countEmployees();

text = text + '</ul>';
document.getElementById('p1').innerHTML = text;
document.getElementById('p2').innerHTML =
  'Total number of school employees are ' + SchoolEmployee.count;
