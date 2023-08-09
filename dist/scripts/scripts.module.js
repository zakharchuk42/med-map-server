"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const script_entity_1 = require("./entities/script.entity");
const scripts_controller_1 = require("./scripts.controller");
const scripts_service_1 = require("./scripts.service");
const file_entity_1 = require("../files/entities/file.entity");
let ScriptsModule = class ScriptsModule {
};
ScriptsModule = __decorate([
    (0, common_1.Module)({
        controllers: [scripts_controller_1.ScriptsController],
        providers: [scripts_service_1.ScriptsService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([script_entity_1.ScriptEntity]),
            typeorm_1.TypeOrmModule.forFeature([file_entity_1.FileEntity]),
        ],
        exports: [scripts_service_1.ScriptsService],
    })
], ScriptsModule);
exports.ScriptsModule = ScriptsModule;
//# sourceMappingURL=scripts.module.js.map