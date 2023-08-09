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
exports.VisitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const visit_entity_1 = require("./entities/visit.entity");
const typeorm_2 = require("@nestjs/typeorm");
const script_entity_1 = require("../scripts/entities/script.entity");
const fs = require("fs");
const file_entity_1 = require("../files/entities/file.entity");
let VisitsService = class VisitsService {
    constructor(repository, repositoryScript, repositoryFile) {
        this.repository = repository;
        this.repositoryScript = repositoryScript;
        this.repositoryFile = repositoryFile;
    }
    getAll(userId, visitStatus) {
        if (visitStatus) {
            return this.repository
                .createQueryBuilder('visits')
                .leftJoinAndSelect('visits.script', 'scripts')
                .where('visits.userId = :userId', { userId })
                .andWhere('visits.status = :visitStatus', { visitStatus })
                .orderBy({
                date: 'DESC',
            })
                .getMany();
        }
        return this.repository
            .createQueryBuilder('visit')
            .leftJoinAndSelect('visit.script', 'scripts')
            .where('visit.userId = :userId', { userId })
            .orderBy({
            date: 'DESC',
        })
            .getMany();
    }
    async addVisit(userId, visit) {
        await this.repository
            .createQueryBuilder('visit')
            .insert()
            .values(Object.assign(Object.assign({}, visit), { user: { id: userId } }))
            .execute();
        return { message: 'Візит добавлено' };
    }
    async remove(userId, visitId) {
        const script = await this.repositoryScript
            .createQueryBuilder('script')
            .where('script.visitId = :visitId', { visitId })
            .getOne();
        if (script !== null) {
            const files = await this.repositoryFile
                .createQueryBuilder('files')
                .where('files.scriptId = :id', { id: script.id })
                .getMany();
            files.length &&
                files.forEach((file) => fs.rmSync(`uploads/${file.filename}`));
        }
        await this.repository
            .createQueryBuilder('visit')
            .delete()
            .where('id = :visitId', { visitId })
            .andWhere('userId = :userId', { userId })
            .execute();
        return { message: 'Візит видалено' };
    }
    async edit(userId, visit, visitId) {
        await this.repository
            .createQueryBuilder('visit')
            .update()
            .set(Object.assign({}, visit))
            .where('id = :visitId', { visitId })
            .andWhere('userId = :userId', { userId })
            .execute();
        return { message: 'Візит відредаговано' };
    }
};
VisitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(visit_entity_1.VisitEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(script_entity_1.ScriptEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], VisitsService);
exports.VisitsService = VisitsService;
//# sourceMappingURL=visits.service.js.map