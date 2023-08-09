"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("./entities/file.entity");
const typeorm_2 = require("typeorm");
const fs = require("fs");
let FilesService = class FilesService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(userId) {
        const withScript = await this.repository
            .createQueryBuilder('files')
            .leftJoinAndSelect('files.script', 'script')
            .where('files.userId = :userId', { userId })
            .andWhere('files.scriptId is not null')
            .getMany();
        const withoutScript = await this.repository
            .createQueryBuilder('files')
            .leftJoinAndSelect('files.script', 'script')
            .where('files.userId = :userId', { userId })
            .andWhere('files.scriptId is null')
            .getMany();
        return { withScript, withoutScript };
    }
    async create(files, userId, scriptId) {
        await files.forEach((file) => {
            const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
            const script = !scriptId ? null : scriptId;
            this.repository
                .createQueryBuilder('files')
                .insert()
                .values(Object.assign(Object.assign({}, file), { originalName: originalName, script: { id: script }, user: { id: userId } }))
                .execute();
        });
        return { message: 'Файли успішно завантажені' };
    }
    async remove(userId, file) {
        await this.repository
            .createQueryBuilder('files')
            .delete()
            .where('userId = :userId', { userId })
            .andWhere('id = :id', { id: file.id })
            .execute();
        fs.rmSync(`uploads/${file.filename}`);
        return { message: 'Файл успішно видалено' };
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=file.service.js.map