let technology:string |number = "TypeScript";
technology = 11
console.log(technology);

// // Datatypes-----------------------------------------------

// // string
// let employeeName:string = "John";
// console.log(employeeName);

// // number
// let employeeSalary:number = 50000;
// console.log(`Salary : ${employeeSalary}`);

// // boolean
// let isManager:boolean = true;
// console.log(`IsManager : ${isManager}`);

// // objects

// interface Mobile {
//     brand : string;
//     color? : string; // optional
//     price : number;
// }
// const mobileOne:Mobile = {
//     brand : "Apple",
//     price : 45000
// };
// mobileOne.brand = "Lenovo";
// console.log(mobileOne);

// // arrays
// let techs:string[] = ["html", "css", "JavaScript"];
// techs.push("10")
// console.log(techs);

// Enum -> for const values
// enum Months {
//     JAN="JANUARY",
//     FEB="FEBRUARY",
//     MAR="MARCH"
// }
// console.log(Months.JAN);

// // any
// let abc:any = 10;
// abc = 20;
// abc = "test";
// abc = true;
// abc = {};
// abc = [];

// // Operators-----------------------------------------------

// let marks:number = 65;
// let results:string = "";
// if(marks <= 35){
//     results = "You failed the exam";
// }
// else{
//     results = "You Pass the exam";
// }
// console.log(results);

// // print numbers
// results = "";
// for(let i:number = 0; i<=10; i++){
//     results += `${i} `;
// }
// console.log(results);

// // Functions -----------------------------------------------

// let greet = ():void => {
//     console.log("Good Morning");
// };
// greet()

// let wishMsg = (name:string):string => {
//     let result:string = `Hello ${name} Good Morning`;
//     return result;
// };
// let greetMsg:string = wishMsg("John");
// console.log(greetMsg);

// // print obj
// interface Student{
//     name: string;
//     age: number;
//     course : string;
// }

// const printStudent = (student:Student):void => {
//     let msg:string = `Name : ${student.name} AGE : ${student.age} COURSE : ${student.course}`;
//     console.log(msg);
// };

// const studentOne:Student = {
//     name : "Rajan",
//     age : 21,
//     course : "FullStack"
// };
// printStudent(studentOne);

