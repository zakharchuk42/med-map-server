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
exports.ScriptsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const script_entity_1 = require("./entities/script.entity");
const typeorm_2 = require("@nestjs/typeorm");
const file_entity_1 = require("../files/entities/file.entity");
const fs = require("fs");
let ScriptsService = class ScriptsService {
    constructor(repository, repositoryFile) {
        this.repository = repository;
        this.repositoryFile = repositoryFile;
    }
    getScript(scriptId, userId) {
        return this.repository
            .createQueryBuilder('script')
            .leftJoinAndSelect('script.drugs', 'drugs')
            .leftJoinAndSelect('script.files', 'files')
            .where('script.id = :scriptId', { scriptId })
            .andWhere('script.userId = :userId', { userId })
            .getOne();
    }
    async addScript(visitId, script, userId) {
        await this.repository
            .createQueryBuilder('script')
            .insert()
            .values(Object.assign(Object.assign({}, script), { visit: { id: visitId }, userId }))
            .execute();
        return {
            message: 'Рецепт додано',
        };
    }
    async editScript(scriptId, script, userId) {
        await this.repository
            .createQueryBuilder('script')
            .update()
            .set(Object.assign({}, script))
            .where('id = :scriptId', { scriptId })
            .andWhere('userId = :userId', { userId })
            .execute();
        return { message: 'Рецепт успішно відредаговано' };
    }
    async removeScript(scriptId, userId) {
        const files = await this.repositoryFile
            .createQueryBuilder('files')
            .where('files.scriptId = :scriptId', { scriptId })
            .getMany();
        files.forEach((file) => fs.rmSync(`uploads/${file.filename}`));
        await this.repository
            .createQueryBuilder('script')
            .delete()
            .where('userId = :userId', { userId })
            .andWhere('id = :scriptId', { scriptId })
            .execute();
        return { message: 'Рецепт було віидалено' };
    }
};
ScriptsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(script_entity_1.ScriptEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ScriptsService);
exports.ScriptsService = ScriptsService;
//# sourceMappingURL=scripts.service.js.map