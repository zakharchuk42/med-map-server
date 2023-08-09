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
exports.DrugEntity = void 0;
const typeorm_1 = require("typeorm");
const script_entity_1 = require("../../scripts/entities/script.entity");
let DrugEntity = class DrugEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DrugEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugEntity.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], DrugEntity.prototype, "startAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], DrugEntity.prototype, "endAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DrugEntity.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => script_entity_1.ScriptEntity, (script) => script.drugs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", script_entity_1.ScriptEntity)
], DrugEntity.prototype, "script", void 0);
DrugEntity = __decorate([
    (0, typeorm_1.Entity)('drugs')
], DrugEntity);
exports.DrugEntity = DrugEntity;
//# sourceMappingURL=drug.entity.js.map