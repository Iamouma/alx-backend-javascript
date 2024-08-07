// Define the interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    location: "California"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 20,
    location: "New York"
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Rendering the table using vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");

    studentsList.forEach(student => {
        const row = table.insertRow();
	const cell1 = row.insertCell();
	const cell2 = row.insertCell();
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
    });

    document.body.appendChild(table);
});
