import { User } from '../Builder Design Pattern/design';

export interface Employee extends User {

    completeTask(number: Number): void;
}

export class Seller extends User implements Employee {
    constructor(user: User) {
        // Directly pass the user data to the parent class (User)
        super(
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.gender,
            user.dob,
            user.telephone,
            user.age,
            user.salary,
            user.password,
            'Seller'  // Set the role as Seller for the Seller class
        );
    }

    completeTask(number: number): void {
        console.log(`Task ${number} completed`);
    }
}

export class ShopWorker extends User implements Employee {
    constructor(user: User) {
        // Directly pass the user data to the parent class (User)
        super(
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.gender,
            user.dob,
            user.telephone,
            user.age,
            user.salary,
            user.password,
            'Shop Worker'  // Set the role as Seller for the Seller class
        );
    }

    completeTask(number: number): void {
        console.log(`Task ${number} completed`);
    }
}

export class Cleaner extends User implements Employee {
    constructor(user: User) {
        // Directly pass the user data to the parent class (User)
        super(
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.gender,
            user.dob,
            user.telephone,
            user.age,
            user.salary,
            user.password,
            'Cleaner'  // Set the role as Seller for the Seller class
        );
    }

    completeTask(number: number): void {
        console.log(`Task ${number} completed`);
    }
}


export class Guard extends User implements Employee {
    constructor(user: User) {
        // Directly pass the user data to the parent class (User)
        super(
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.gender,
            user.dob,
            user.telephone,
            user.age,
            user.salary,
            user.password,
            'Guard'  // Set the role as Seller for the Seller class
        );
    }

    completeTask(number: number): void {
        console.log(`Task ${number} completed`);
    }
}

export class EmployeeFactory {

    getEmployee(user: User): Employee {
        switch (user.role) {
            case 'Seller':
                return new Seller(user);
            case 'ShopWorker':
                return new ShopWorker(user);
            case 'Cleaner':
                return new Cleaner(user);
            case 'Guard':
                return new Guard(user);
            default:
                throw new Error('Invalid role');
        }
    }
}