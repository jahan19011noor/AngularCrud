export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string; //optional proerty
    phoneNumber?: number; //optional proerty
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string; //optional proerty
}