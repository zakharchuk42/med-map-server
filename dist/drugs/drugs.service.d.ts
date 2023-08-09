import { Repository } from 'typeorm';
import { DrugEntity } from './entities/drug.entity';
import { CreateDrugDto } from './dto/create-drug.dto';
export declare class DrugsService {
    private repository;
    constructor(repository: Repository<DrugEntity>);
    addDrugs(scriptId: number, drugs: CreateDrugDto): Promise<{
        message: string;
    }>;
    removeDrugs(drugsId: string): Promise<{
        message: string;
    }>;
}
