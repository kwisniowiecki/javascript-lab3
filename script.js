"use strict";

// 1. Declare a variable named submissions that is initialized to an array with the following objects:

// also defined the array as "submissions"
let Objects = [{
        name: "Jane",
        score: 95,
        date: "2020 - 01 - 24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018 - 05 - 14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019 - 07 - 05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020 - 04 - 22",
        passed: true,
    }
];

// 2. Declare a function named addSubmission

const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore <= 60,
    };
    array.push(newSubmission);
};

// newScore in PASSED is a CONDITION

// addSubmission(objects, "Mitch", 10, "2020-01-24");
// console.log(objects);

// 3. Declare a function named deleteSubmissionByIndex

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

// 4. Declare a function named deleteSubmissionByName

const deleteSubmissionByName = (array, name) => {
    let index = array.deleteSubmissionByName((name) => {
        array.splice(index, 1);
    });
};

deleteSubmissionByName(objects, "Jack")
console.log(objects)

// 5. Declare a function named editSubmission ○ Parameter(s): array, index, score ○ Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
    array[index].score = score
    array[index].passed = score >= 60;
}

// 6. Declare a function named findSubmissionByName ○ Parameter(s): array, name ○ Functionality: return the object in the array that has the provided name. Use the find method.

const findSubmissionByName = (array, name) => {
    let found = array.find((student) => {
        return student.name === name;
    });
    return found;
};

console.log(findSubmissionByName(objects, "Jack"));

// 7. Declare a function named findLowestScore ○ Parameter(s): array ○ Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

const findLowestScore = (array) => {
    let lowScoreStudent;
    array.forEach((student) => {
        if (lowScoreStudent === undefined) {
            lowScoreStudent = student;
        } else if (lowScoreStudent.score > student.score) {
            lowScoreStudent = student;
        }
    });
    return lowScoreStudent;
};

// let lowestScore = array[0],
//     array.forEach((person) => {
//             if (person.score < lowestScore.score) {
//                 lowestScore = person;
//             });
//         return lowestScore;
//     };

// console.log(findLowestScore(submissions))

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

let sum = 0;
const findAverageScore = (array) => {
    for (let submission of submissions) {
        sum += submission.score;
    }
    let average = sum / array.length;
    return average;
};

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {
    let passed = array.filter((scores) => {
        return scores.passing === true;
    });
    return passed;
};

console.log(filterPassing(objects))

// 10. Declare a function named filter90AndAbove Parameter(s): array Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
    let scoresGreaterThan90 = array.filter((scores) => {
        return scores.score >= 90;
    });
    return scoresGreaterThan90;
};

console.log(filter90AndAbove(objects))

// USE PUSH TO ADD at the END of an ARRAY
// let numbers = [1,2,3];
// numbers.push(4);
// console.log (numbers);

// USE UN.SHIFT to add an element at the FRONT of an ARRAY
// numbers.unshift(9);
// console.log(numbers)

// Declare a function named addStringToBeginning
// Paramter(s)

// const addStringToBeginning = (array,string) => {
// array.unshift (string);
// };

// console.log(addStringToBeginning(strings, "Ann Arbor"))

// =

// => {}


const deleteALaptop = (array, nameOfComp, price) => {
    let index = array.findIndex((computer) => {
        return computer.brand === nameOfComp && computer.price === price;
    });
    array.splice(index, 1);
};


const findLowestScore = (array) => {
    let currentLowest = array[0];
    array.forEach((currentObj) => {
        if (currentObj.score < currentLowest.score) {
            currentLowest = currentObj;
        }
    });
}

// why do we have to define the variable as equal to the first index in the array

const findAverageScore = (array) => {
    let sum = 0;
    for (let item of array) {
        sum += item.score;
    }
    return sum / array.length;
};