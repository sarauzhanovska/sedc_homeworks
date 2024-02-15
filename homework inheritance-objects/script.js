function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    this.getAcademy = function (student) {
        return student.academy;
    }
}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
    }
}

let student = new Student('Sara', 'Uzhanovska', 19, 'SEDC', 12);
console.log(student);
student.getFullName();
student.study();

let secondStudent = new Student('Simona', 'Uzhanovska', 21, 'Beauty Academy', 10);
console.log(secondStudent);
secondStudent.getFullName();
secondStudent.study();

secondStudent.getAcademy(secondStudent);

function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

let keti = new DesignStudent('Keti', 'Markovska', 30, 'SEDC', 12, true);
console.log(keti);
keti.attendAdobeExam();
// console.log(keti.isStudentOfTheMonth);

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function (type) {
        if (type === 'individual') {
            this.hasIndividualProject = true;
            this.hasGroupProject = false;
            console.log(`${this.firstName} is working on an individual project`);
        } else if (type === "group") {
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
            console.log(`${this.firstName} is working on a group project`);
        }
        //Ovaj del ne mi raboti kako sho treba 
    };
}
let simona = new CodeStudent('Simona', 'Uzhanovska', 22, 'Beauty Academy', 26, false, false);
console.log(simona);
simona.doProject('individual');
simona.doProject('group');

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.academyPart = academyPart;
    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a cisco exam`);
    }
}

let netStudent = new NetworkStudent('Radica', 'Shvigir', 30, 'SEDC', 2, 5);
console.log(netStudent);
netStudent.attendCiscoExam();