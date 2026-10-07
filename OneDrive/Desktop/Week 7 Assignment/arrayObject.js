//create student objects
const students = [
    {
        id : 1,
        name: "Alice John",
        age: 14,
        grades: [85, 92, 78]
    },
    {
        id : 2,
        name: "Adewale Prince",
        age: 16,
        grades: [65, 70, 58] 
    },
    {
        id : 3,
        name: "Carson Light",
        age: 18,
        grades: [95, 88, 92]
    },
    {
        id : 4,
        name: "Williams David",
        age: 15,
        grades: [45, 55, 50]
    },
    {
        id : 5,
        name: "Davis Victoria",
        age: 17,
        grades: [72, 75, 80]
    }
];
console.log(students);


//calculate Averages
function calculateAverage(grades){
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    
    return Number(average.toFixed(2));
}
console.log(calculateAverage([85, 92, 78]))
console.log(calculateAverage([81, 86, 79]))
    
const studentsWithAverage = students.map(student => {
    return{
        ...student,
        average: calculateAverage(student.grades)
    };
});
console.log(studentsWithAverage);


//filter passing students
function getPassingStudents(students){
    return students.filter(student => student.average >= 60);
}
const passing = getPassingStudents(studentsWithAverage);

console.log(passing);

//functions & callbacks
function processStudents(students, callback){
    return students.map(student => {
        return callback(student);
    });
}

function addLetterGrade(student){
    let letterGrade;

    if (student.average >= 90){
        letterGrade ="A";
    }else if (student.average >= 80){
        letterGrade = "B";
    }else if (student.average >= 70){
        letterGrade = "C";
    }else if (student.average >= 60){
        letterGrade = "D";
    }else{
        letterGrade = "F"
    }
    return {
        ...student,
        letterGrade: letterGrade
    };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);

console.log(studentsWithGrades);


function addStatus(student){
    const status = student.average >= 60 ? "Pass" : "Fail";

    return {
        ...student,
        status : status
    }
}
const studentsWithStatus = processStudents(
    studentsWithAverage, addStatus
);

console.log(studentsWithStatus);