import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserFormDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    login (@Body() body: UserFormDto) {
        return this.authService.login(body.email, body.password);
    }
    
    @Post('register')
    register (@Body() body: UserFormDto) {
        return this.authService.register(body.email, body.password);
    }
}
