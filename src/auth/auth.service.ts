import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login () {
        return { message: 'Logged In', error: false };
    }
    register () {
        return { message: 'User Registered', error: false };
    }
}
