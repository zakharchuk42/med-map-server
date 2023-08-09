"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const visit_entity_1 = require("./entities/visit.entity");
const visits_controller_1 = require("./visits.controller");
const visits_service_1 = require("./visits.service");
const script_entity_1 = require("../scripts/entities/script.entity");
const file_entity_1 = require("../files/entities/file.entity");
let VisitsModule = class VisitsModule {
};
VisitsModule = __decorate([
    (0, common_1.Module)({
        controllers: [visits_controller_1.VisitsController],
        providers: [visits_service_1.VisitsService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([visit_entity_1.VisitEntity]),
            typeorm_1.TypeOrmModule.forFeature([script_entity_1.ScriptEntity]),
            typeorm_1.TypeOrmModule.forFeature([file_entity_1.FileEntity]),
        ],
        exports: [visits_service_1.VisitsService],
    })
], VisitsModule);
exports.VisitsModule = VisitsModule;
//# sourceMappingURL=visits.module.js.map