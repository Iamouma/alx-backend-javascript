function sumMajorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'MajorCredits' };
}
function sumMinorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'MinorCredits' };
}
// Example usage
var subject1Major = { credits: 40, brand: 'MajorCredits' };
var subject2Major = { credits: 30, brand: 'MajorCredits' };
var subject1Minor = { credits: 15, brand: 'MinorCredits' };
var subject2Minor = { credits: 10, brand: 'MinorCredits' };
console.log(sumMajorCredits(subject1Major, subject2Major));
console.log(sumMinorCredits(subject1Minor, subject2Minor));
