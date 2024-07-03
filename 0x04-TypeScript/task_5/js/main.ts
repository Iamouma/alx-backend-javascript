interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Unique identifier for MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Unique identifier for MinorCredits
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MinorCredits' };
}

// Example usage
const subject1Major: MajorCredits = { credits: 40, brand: 'MajorCredits' };
const subject2Major: MajorCredits = { credits: 30, brand: 'MajorCredits' };

const subject1Minor: MinorCredits = { credits: 15, brand: 'MinorCredits' };
const subject2Minor: MinorCredits = { credits: 10, brand: 'MinorCredits' };

console.log(sumMajorCredits(subject1Major, subject2Major));
console.log(sumMinorCredits(subject1Minor, subject2Minor));
