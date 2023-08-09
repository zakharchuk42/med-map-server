/// <reference types="multer" />
import { FilesService } from './file.service';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(userId: number): Promise<{
        withScript: import("./entities/file.entity").FileEntity[];
        withoutScript: import("./entities/file.entity").FileEntity[];
    }>;
    create(files: Express.Multer.File[], scriptId: string, userId: number): Promise<{
        message: string;
    }>;
    remove(userId: number, file: UpdateFileDto): Promise<{
        message: string;
    }>;
}
