/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(passedStudents)
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(passedStudents);
}

function passedStudents(student) {
  if(student.marks > 50) {
    console.log(student);
  }
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i=0; i<arr.length; i++) {
    if(arr[i].marks < 50) {
      delete arr[i];
    }
  }

  for(let i=0; i<arr.length; i++) {
    if(arr[i] != undefined) {
      console.log(arr[i]);
    }
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  let students = [
    { id: 10, name: "Rohan", age: "8", marks: 75 },
    { id: 11, name: "Roshan", age: "12", marks: 95 },
    { id: 12, name: "Rohit", age: "9", marks: 37 },
  ];
  console.log(students);
}
