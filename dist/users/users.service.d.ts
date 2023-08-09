import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    editAvatar(id: any, avatar: UpdateUserDto['avatar']): Promise<{
        message: string;
    }>;
}
