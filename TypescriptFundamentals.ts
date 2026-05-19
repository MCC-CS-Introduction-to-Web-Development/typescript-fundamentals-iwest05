// Basic Types
const age: number = 39;
const name: string = "Iain West";
const isEmployed: boolean = true;
const scores: number[] = [90, 85, 92];
const ratings: Array<number> = [4, 5, 3];

// Interface
interface Person {
    name: string;
    age: number;
    email: string | undefined;
}

// Class implementing interface
class Employee implements Person {
    name: string;
    age: number;
    email: string | undefined;

    constructor(name: string, age: number, email: string | undefined) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email ?? "N/A"}`);
    }
}

// Generic class
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

// Usage
const employee = new Employee("Iain West", 39, "iain@example.com");
employee.displayInfo();

const numberBox = new Box<number>(42);
console.log(numberBox.getValue());
numberBox.setValue(100);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());
