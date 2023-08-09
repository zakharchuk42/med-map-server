import { VisitsService } from './visits.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { StatusEnum } from './entities/visit.entity';
export declare class VisitsController {
    private readonly visitsService;
    constructor(visitsService: VisitsService);
    getAll(id: number, status: StatusEnum): Promise<import("./entities/visit.entity").VisitEntity[]>;
    addVisit(userId: number, visit: CreateVisitDto): Promise<{
        message: string;
    }>;
    delete(userId: number, visitId: string): Promise<{
        message: string;
    }>;
    edit(userId: number, visitId: string, visit: UpdateVisitDto): Promise<{
        message: string;
    }>;
}
