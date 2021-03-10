class Course {
 constructor(courseTitle, courseLength, coursePrice) {
  this.courseTitle = courseTitle;
  this.courseLength = courseLength;
  this.coursePrice = coursePrice;
 }

 courseValueMethod() {
  const valueResult = parseInt(this._coursePrice) / parseInt(this.courseLength);
  console.log(
   `this course has the worth of $ ${valueResult} per hour of lessons`
  );
 }

 courseSummaryMethod() {
  console.log(`this course is named ${this.courseTitle}, it has ${this.courseLength}, and is priced at ${this.coursePrice}`);
 }

 set coursePrice(coursePrice) {
  if (parseInt(coursePrice) <= 0) {
   throw new Error("Price can't be set to negative values");
  }
  this._coursePrice = coursePrice;
 } //lesson 4 code
 // when setting a get/set and referring it as a property/field of the class it's a ecma rule
 // to put a _ on the property as referred.

 get coursePrice() {
  return `$ ${this._coursePrice}`;
 }
}

let course1 = new Course("the best course", "8", 59.99);
console.log(course1);
let course2 = new Course("the second best course", "6 hours", 49.99);
console.log(course2);
//end of task 1

const course1Worth = course1.courseValueMethod();
const course2worth = course2.courseValueMethod();

const course1Summary = course1.courseSummaryMethod();
const course2Summary = course2.courseSummaryMethod();

// end of task 2

class PraticalCourse extends Course {

 constructor(courseTitle, courseLength, coursePrice, numofExercises) {
  super(courseTitle, courseLength, coursePrice);
  this.numofExercises = numofExercises;
 }

 courseSummaryMethod() {
    console.log(`this course is named ${this.courseTitle}, it has ${this.courseLength}, and is priced at ${this.coursePrice} and has ${this.numofExercises}`);
 }
}

class TheoreticalCourse extends Course {
    
  theoreticalCoursePublishMethod(courseTitle) {
  const theoreticalcoursepublish = courseTitle;
  return console.log(
   `${theoreticalcoursepublish} will encourage you to publish a paper on the subject of the course`
  );
 }

 constructor(courseTitle, courseLength, coursePrice) {
  super();
  this.courseTitle = courseTitle;
  this.courseLength = courseLength;
  this._coursePrice = coursePrice;
 }
}

let course3 = new PraticalCourse(
 "the best pratical course in the market",
 "10 hours",
 "100 dollars",
 "25 exercises"
);
let course4 = new TheoreticalCourse(
 "the best theoretical course in the market",
 "20 hours",
 "120"
);

const course3Summary = course3.courseSummaryMethod();
const course3Worth = course3.courseValueMethod();

const course4Summary = course4.courseSummaryMethod();
const course4worth = course4.courseValueMethod();
const course4theoretical = course4.theoreticalCoursePublishMethod(
 course4.courseTitle
);
//end of lesson 3
