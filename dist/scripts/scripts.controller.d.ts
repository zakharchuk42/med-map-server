import { ScriptsService } from './scripts.service';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';
export declare class ScriptsController {
    private readonly scriptsService;
    constructor(scriptsService: ScriptsService);
    getScript(scriptId: string, userId: number): Promise<import("./entities/script.entity").ScriptEntity>;
    addScript(visitId: string, script: CreateScriptDto, userId: number): Promise<{
        message: string;
    }>;
    editScript(scriptId: string, script: UpdateScriptDto, userId: number): Promise<{
        message: string;
    }>;
    removeScript(scriptId: string, userId: number): Promise<{
        message: string;
    }>;
}
