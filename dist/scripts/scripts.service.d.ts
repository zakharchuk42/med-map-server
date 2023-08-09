import { Repository } from 'typeorm';
import { ScriptEntity } from './entities/script.entity';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';
import { FileEntity } from '../files/entities/file.entity';
export declare class ScriptsService {
    private repository;
    private repositoryFile;
    constructor(repository: Repository<ScriptEntity>, repositoryFile: Repository<FileEntity>);
    getScript(scriptId: string, userId: number): Promise<ScriptEntity>;
    addScript(visitId: number, script: CreateScriptDto, userId: any): Promise<{
        message: string;
    }>;
    editScript(scriptId: string, script: UpdateScriptDto, userId: number): Promise<{
        message: string;
    }>;
    removeScript(scriptId: string, userId: number): Promise<{
        message: string;
    }>;
}
