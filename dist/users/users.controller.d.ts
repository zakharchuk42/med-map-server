import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(id: number): Promise<import("./entities/user.entity").UserEntity>;
    editAvatar(id: number, avatar: UpdateUserDto['avatar']): Promise<{
        message: string;
    }>;
}
