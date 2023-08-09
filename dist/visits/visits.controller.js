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
exports.VisitsController = void 0;
const common_1 = require("@nestjs/common");
const visits_service_1 = require("./visits.service");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const create_visit_dto_1 = require("./dto/create-visit.dto");
const update_visit_dto_1 = require("./dto/update-visit.dto");
const visit_entity_1 = require("./entities/visit.entity");
let VisitsController = class VisitsController {
    constructor(visitsService) {
        this.visitsService = visitsService;
    }
    getAll(id, status) {
        return this.visitsService.getAll(id, status);
    }
    addVisit(userId, visit) {
        return this.visitsService.addVisit(userId, visit);
    }
    delete(userId, visitId) {
        return this.visitsService.remove(userId, visitId);
    }
    edit(userId, visitId, visit) {
        return this.visitsService.edit(userId, visit, visitId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_visit_dto_1.CreateVisitDto]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "addVisit", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __param(1, (0, common_1.Query)('visitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __param(1, (0, common_1.Query)('visitId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, update_visit_dto_1.UpdateVisitDto]),
    __metadata("design:returntype", void 0)
], VisitsController.prototype, "edit", null);
VisitsController = __decorate([
    (0, common_1.Controller)('visits'),
    __metadata("design:paramtypes", [visits_service_1.VisitsService])
], VisitsController);
exports.VisitsController = VisitsController;
//# sourceMappingURL=visits.controller.js.map