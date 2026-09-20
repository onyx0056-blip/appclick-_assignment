class Student {
    constructor(name,age,gender,course,schoolFeeStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.course = course;
        this.schoolFeeStatus = schoolFeeStatus;
    }   

    introduceStudent() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old.`;
    }

    tellCourse() {
        return `I am currently enrolled in the ${this.course} course.`;
    }

    checkSchoolFeeStatus() {
        if (this.schoolFeeStatus === 'paid') {
            return `My school fee status is ${this.schoolFeeStatus}. I have paid my school fees.`;
        } else {
            return `My school fee status is ${this.schoolFeeStatus}. I have not paid my school fees.`;
        }
    }
    
}

    const student1 = new Student(
    'Farouk', 19, 'male', 'Front-End', 'unpaid'
);
const student2 = new Student(
    'Emmanuel', 26, 'male', 'Full-Stack', 'paid'
    );
    const student3 = new Student(
        'Ifedolapo', 18, 'male', 'Full-Stack', 'paid'
    );
     const student4 = new Student(
        'Samuel', 18, 'male', 'Full-Stack', 'unpaid'
    );
    const student5 = new Student(
        'Nifemi', 19, 'male', 'Full-Stack', 'paid'
    )

    console.log(student1.introduceStudent());
    console.log(student1.tellCourse());
    console.log(student1.checkSchoolFeeStatus());

    console.log(student2.introduceStudent())    ;
    console.log(student2.tellCourse());
    console.log(student2.checkSchoolFeeStatus());

    console.log(student3.introduceStudent());
    console.log(student3.tellCourse());
    console.log(student3.checkSchoolFeeStatus());

    console.log(student4.introduceStudent());
    console.log(student4.tellCourse());
    console.log(student4.checkSchoolFeeStatus());   

    console.log(student5.introduceStudent());
    console.log(student5.tellCourse());
    console.log(student5.checkSchoolFeeStatus());

