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
exports.VisitEntity = exports.StatusEnum = void 0;
const typeorm_1 = require("typeorm");
const script_entity_1 = require("../../scripts/entities/script.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["PLANNED"] = "planned";
    StatusEnum["CONT"] = "continues";
    StatusEnum["DONE"] = "done";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
let VisitEntity = class VisitEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VisitEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "doctors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "spec", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "impression", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "hospital", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "online", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VisitEntity.prototype, "diagnose", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => script_entity_1.ScriptEntity, (script) => script.visit),
    __metadata("design:type", script_entity_1.ScriptEntity)
], VisitEntity.prototype, "script", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.visits, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], VisitEntity.prototype, "user", void 0);
VisitEntity = __decorate([
    (0, typeorm_1.Entity)('visits')
], VisitEntity);
exports.VisitEntity = VisitEntity;
//# sourceMappingURL=visit.entity.js.map