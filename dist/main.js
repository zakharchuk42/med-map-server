"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });
    app.use('/uploads', express.static((0, path_1.join)(__dirname, '..', '/uploads')));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map