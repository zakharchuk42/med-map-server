import { VisitEntity } from '../../visits/entities/visit.entity';
import { DrugEntity } from '../../drugs/entities/drug.entity';
import { FileEntity } from '../../files/entities/file.entity';
export declare class ScriptEntity {
    id: number;
    name: string;
    analyses: string;
    otherNotes: string;
    userId: string;
    drugs: DrugEntity[];
    visit: VisitEntity;
    files: FileEntity[];
}
