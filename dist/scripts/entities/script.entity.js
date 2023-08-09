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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptEntity = void 0;
const typeorm_1 = require("typeorm");
const visit_entity_1 = require("../../visits/entities/visit.entity");
const drug_entity_1 = require("../../drugs/entities/drug.entity");
const file_entity_1 = require("../../files/entities/file.entity");
let ScriptEntity = class ScriptEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ScriptEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScriptEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScriptEntity.prototype, "analyses", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScriptEntity.prototype, "otherNotes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScriptEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => drug_entity_1.DrugEntity, (drug) => drug.script),
    __metadata("design:type", Array)
], ScriptEntity.prototype, "drugs", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => visit_entity_1.VisitEntity, (visit) => visit.script, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", visit_entity_1.VisitEntity)
], ScriptEntity.prototype, "visit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.FileEntity, (files) => files.script),
    __metadata("design:type", Array)
], ScriptEntity.prototype, "files", void 0);
ScriptEntity = __decorate([
    (0, typeorm_1.Entity)('scripts')
], ScriptEntity);
exports.ScriptEntity = ScriptEntity;
//# sourceMappingURL=script.entity.js.map