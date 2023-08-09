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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const storage_1 = require("./storage");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const file_service_1 = require("./file.service");
const update_file_dto_1 = require("./dto/update-file.dto");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    findAll(userId) {
        return this.filesService.findAll(userId);
    }
    create(files, scriptId, userId) {
        return this.filesService.create(files, userId, +scriptId);
    }
    remove(userId, file) {
        return this.filesService.remove(userId, file);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 2, {
        storage: storage_1.fileStorage,
    })),
    __param(0, (0, common_1.UploadedFiles)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 3 }),
        ],
    }))),
    __param(1, (0, common_1.Query)('scriptId')),
    __param(2, (0, user_id_decorator_1.UserIdDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, Number]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_id_decorator_1.UserIdDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_file_dto_1.UpdateFileDto]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "remove", null);
FilesController = __decorate([
    (0, common_1.Controller)('files'),
    (0, common_1.UseGuards)(jwt_guard_1.JWTAuthGuard),
    __metadata("design:paramtypes", [file_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map