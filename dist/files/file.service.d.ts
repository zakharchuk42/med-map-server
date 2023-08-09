/// <reference types="multer" />
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesService {
    private repository;
    constructor(repository: Repository<FileEntity>);
    findAll(userId: number): Promise<{
        withScript: FileEntity[];
        withoutScript: FileEntity[];
    }>;
    create(files: Express.Multer.File[], userId: number, scriptId: number): Promise<{
        message: string;
    }>;
    remove(userId: number, file: UpdateFileDto): Promise<{
        message: string;
    }>;
}
