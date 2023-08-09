"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const files_module_1 = require("./files/files.module");
const file_entity_1 = require("./files/entities/file.entity");
const visits_module_1 = require("./visits/visits.module");
const scripts_module_1 = require("./scripts/scripts.module");
const visit_entity_1 = require("./visits/entities/visit.entity");
const script_entity_1 = require("./scripts/entities/script.entity");
const drugs_module_1 = require("./drugs/drugs.module");
const drug_entity_1 = require("./drugs/entities/drug.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || 5432),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    user_entity_1.UserEntity,
                    file_entity_1.FileEntity,
                    visit_entity_1.VisitEntity,
                    script_entity_1.ScriptEntity,
                    drug_entity_1.DrugEntity,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            visits_module_1.VisitsModule,
            scripts_module_1.ScriptsModule,
            drugs_module_1.DrugsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map