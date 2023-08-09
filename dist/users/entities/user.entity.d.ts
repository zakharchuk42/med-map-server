import { FileEntity } from '../../files/entities/file.entity';
import { VisitEntity } from '../../visits/entities/visit.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    name: string;
    avatar: string;
    files: FileEntity[];
    visits: VisitEntity[];
}
