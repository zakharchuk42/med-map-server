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
exports.ScriptsController = void 0;
const common_1 = require("@nestjs/common");
const scripts_service_1 = require("./scripts.service");
const create_script_dto_1 = require("./dto/create-script.dto");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const update_script_dto_1 = require("./dto/update-script.dto");
let ScriptsController = class ScriptsController {
    constructor(scriptsService) {
        this.scriptsService = scriptsService;
    }
    getScript(scriptId, userId) {
        return this.scriptsService.getScript(scriptId, userId);
    }
    addScript(visitId, script, userId) {
        return this.scriptsService.addScript(+visitId, script, userId);
    }
    editScript(scriptId, script, userId) {
        return this.scriptsService.editScript(scriptId, script, userId);
    }
    removeScript(scriptId, userId) {
        return this.scriptsService.removeScript(scriptId, userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('scriptId')),
    __param(1, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "getScript", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('visitId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_script_dto_1.CreateScriptDto, Number]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "addScript", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Query)('scriptId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_script_dto_1.UpdateScriptDto, Number]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "editScript", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('scriptId')),
    __param(1, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "removeScript", null);
ScriptsController = __decorate([
    (0, common_1.Controller)('scripts'),
    __metadata("design:paramtypes", [scripts_service_1.ScriptsService])
], ScriptsController);
exports.ScriptsController = ScriptsController;
//# sourceMappingURL=scripts.controller.js.map