"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugsModule = void 0;
const common_1 = require("@nestjs/common");
const drugs_controller_1 = require("./drugs.controller");
const drugs_service_1 = require("./drugs.service");
const typeorm_1 = require("@nestjs/typeorm");
const drug_entity_1 = require("./entities/drug.entity");
let DrugsModule = class DrugsModule {
};
DrugsModule = __decorate([
    (0, common_1.Module)({
        controllers: [drugs_controller_1.DrugsController],
        providers: [drugs_service_1.DrugsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([drug_entity_1.DrugEntity])],
        exports: [drugs_service_1.DrugsService],
    })
], DrugsModule);
exports.DrugsModule = DrugsModule;
//# sourceMappingURL=drugs.module.js.map