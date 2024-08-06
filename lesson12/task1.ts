// 1. Create an interface for objects
interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];