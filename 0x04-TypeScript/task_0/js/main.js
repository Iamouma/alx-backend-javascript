// Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    location: "California"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 20,
    location: "New York"
};
// Array containing the two students
var studentsList = [student1, student2];
// Rendering the table using vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    document.body.appendChild(table);
});
