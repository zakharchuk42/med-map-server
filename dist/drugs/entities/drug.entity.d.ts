import { ScriptEntity } from '../../scripts/entities/script.entity';
export declare class DrugEntity {
    id: number;
    name: string;
    amount: string;
    days: string;
    startAt: Date;
    endAt: Date;
    time: string;
    script: ScriptEntity;
}
