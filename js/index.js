'use strict'

function Student (name, surname, age, rating) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.studentGradesArr = [];
  this.studentRatingsArr = rating;
}

Student.prototype.present = function () {
  if (this.studentGradesArr.length < 25 ) {
   this.studentGradesArr.push(true);
  }
  return this.studentGradesArr;
}

Student.prototype.absent = function() {
  if (this.studentGradesArr.length < 25 ) {
   this.studentGradesArr.push(false);
  }
  return this.studentGradesArr;
}

Student.prototype.studentsAge = function() {
  const currentYear = 2025;
  const newAge = currentYear - this.age;
  return newAge;
}

Student.prototype.averageScore = function() {
  let sum = 0;
  for (let i = 0; i < this.studentRatingsArr.length; i++) {
    sum += this.studentRatingsArr[i];
  }
  return sum / this.studentRatingsArr.length;
}

Student.prototype.summary = function() {
  const averageRating = this.averageScore(); // Середня оцінка
  let numberOfVisits = 0; // Кількість відвідин
  for (let i = 0; i < this.studentGradesArr.length; i++) {
    if (this.studentGradesArr[i] === true) {
      numberOfVisits += this.studentGradesArr[i];
    }
  }
  const numberOfClasses =  this.studentGradesArr.length; // Кількість занять
  const averageAttendance = numberOfVisits / numberOfClasses; // Середнє відвідування

  if ( averageRating > 90 && averageAttendance > 0.9) {
    console.log("Молодець!");
  } else if ( averageRating > 90 || averageAttendance > 0.9) {
    console.log("Добре, але можна краще");
} else {
    console.log("Редиска!");
  }
}


let stud = new Student('Alex', 'Johnson', '2017', [100, 90, 96, 84]);
stud.present();
stud.present();
stud.absent();
stud.absent();
stud.summary();
console.log(stud.studentsAge());
console.log(stud.averageScore());
console.log(stud);

let stud2= new Student('Mary', 'Smith', '2000', [90, 71, 88, 78]);
stud2.present();
stud2.present();
stud2.absent();
stud2.absent();
stud2.absent();
stud2.absent();
stud2.summary();
console.log(stud2.studentsAge());
console.log(stud2.averageScore());
console.log(stud2);

let stud3= new Student('John', 'Travolta', '1980', [100, 100, 99, 100, 100]);
stud3.present();
stud3.present();
stud3.present();
stud3.present();
stud3.present();
stud3.present();
stud3.summary();
console.log(stud3.studentsAge());
console.log(stud3.averageScore());
console.log(stud3);