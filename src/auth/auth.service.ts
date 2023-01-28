import { Injectable } from '@nestjs/common';

// TODO: to be removed once db is setup
let temp = new Map();

@Injectable()
export class AuthService {
    login (email: string, password: string) {
        
        if (temp.has(email) && temp.get(email) == password){
            return { message: 'Logged In', error: false };
        }
        return { message: 'Incorrect credentials', error: false };
    }
    register (email: string, password: string) {
        
        temp.set(email, password);
        return { message: 'User Registered', error: false };
    }
}
