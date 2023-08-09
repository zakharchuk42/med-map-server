import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        token: string;
    }>;
    register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
