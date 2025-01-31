/**
 * Remove excess elements form the array.
 */


const studenName = ['abul', 'jamal', 'kabul', 'abul', 'kabul', 'rahim', 'karim', 'jamal'];
const numbers = [22, 12, 33, 40, 33, 22, 12, 50, 60, 40];


function removeElement(students) {
    const unique = [];

    for (const student of students) {
        if (unique.includes(student) === false) {
            unique.push(student);
        }
    }
    return unique;
}

console.log(removeElement(studenName));