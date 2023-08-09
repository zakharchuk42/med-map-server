"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.UserIdDecorator = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.authorization;
    let base64Url = token.split('.')[1];
    let base64 = decodeURIComponent(atob(base64Url)
        .split('')
        .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
    const user = JSON.parse(base64);
    return (user === null || user === void 0 ? void 0 : user.id) ? Number(user.id) : null;
});
//# sourceMappingURL=user-id.decorator.js.map