import { Repository } from 'typeorm';
import { StatusEnum, VisitEntity } from './entities/visit.entity';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { ScriptEntity } from '../scripts/entities/script.entity';
import { FileEntity } from '../files/entities/file.entity';
export declare class VisitsService {
    private repository;
    private repositoryScript;
    private repositoryFile;
    constructor(repository: Repository<VisitEntity>, repositoryScript: Repository<ScriptEntity>, repositoryFile: Repository<FileEntity>);
    getAll(userId: number, visitStatus: StatusEnum): Promise<VisitEntity[]>;
    addVisit(userId: number, visit: CreateVisitDto): Promise<{
        message: string;
    }>;
    remove(userId: number, visitId: string): Promise<{
        message: string;
    }>;
    edit(userId: number, visit: UpdateVisitDto, visitId: string): Promise<{
        message: string;
    }>;
}
