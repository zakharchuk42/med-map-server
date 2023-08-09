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
exports.DrugsController = void 0;
const common_1 = require("@nestjs/common");
const drugs_service_1 = require("./drugs.service");
let DrugsController = class DrugsController {
    constructor(drugsService) {
        this.drugsService = drugsService;
    }
    addDrugs(scriptId, drugs) {
        return this.drugsService.addDrugs(+scriptId, drugs);
    }
    deleteDrugs(drugsId) {
        return this.drugsService.removeDrugs(drugsId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('scriptId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DrugsController.prototype, "addDrugs", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('drugsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DrugsController.prototype, "deleteDrugs", null);
DrugsController = __decorate([
    (0, common_1.Controller)('drugs'),
    __metadata("design:paramtypes", [drugs_service_1.DrugsService])
], DrugsController);
exports.DrugsController = DrugsController;
//# sourceMappingURL=drugs.controller.js.map