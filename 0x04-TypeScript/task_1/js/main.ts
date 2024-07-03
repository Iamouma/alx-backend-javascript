// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


// Define the Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}


// Create a Teacher object
const teacher1: Teacher = {
  firstName: 'James',
  lastName: 'Kamau',
  fullTimeEmployee: true,
  location: 'Nairobi',
  numberOfReports: 6,
  contract: true
};

const teacher2: Teacher = {
  firstName: 'Mary',
  lastName: 'Rose',
  fullTimeEmployee: false,
  location: 'Nakuru',
  numberOfReports: 12,
  contract: false
};


// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName: string,
lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define an Interdace for the Constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define an Interface for the Class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the Class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

