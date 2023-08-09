import { DrugsService } from './drugs.service';
import { CreateDrugDto } from './dto/create-drug.dto';
export declare class DrugsController {
    private readonly drugsService;
    constructor(drugsService: DrugsService);
    addDrugs(scriptId: string, drugs: CreateDrugDto): Promise<{
        message: string;
    }>;
    deleteDrugs(drugsId: string): Promise<{
        message: string;
    }>;
}
