import { ScriptEntity } from '../../scripts/entities/script.entity';
import { UserEntity } from '../../users/entities/user.entity';
export declare enum StatusEnum {
    PLANNED = "planned",
    CONT = "continues",
    DONE = "done"
}
export declare class VisitEntity {
    id: number;
    status: string;
    doctors: string;
    spec: string;
    date: string;
    city: string;
    impression: string;
    hospital: string;
    efficiency: string;
    phone: string;
    online: string;
    diagnose: string;
    script: ScriptEntity;
    user: UserEntity;
}
