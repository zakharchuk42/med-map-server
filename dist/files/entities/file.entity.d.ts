import { UserEntity } from '../../users/entities/user.entity';
import { ScriptEntity } from '../../scripts/entities/script.entity';
export declare class FileEntity {
    id: number;
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    user: UserEntity;
    script?: ScriptEntity;
}
