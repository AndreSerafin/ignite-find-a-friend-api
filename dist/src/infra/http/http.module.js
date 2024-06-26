"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const authenticate_org_1 = require("../../domain/application/use-cases/org/authenticate-org");
const register_org_1 = require("../../domain/application/use-cases/org/register-org");
const common_1 = require("@nestjs/common");
const cryptography_module_1 = require("../cryptography/cryptography.module");
const database_module_1 = require("../database/database.module");
const authenticate_controller_1 = require("./modules/session/authenticate.controller");
const pet_module_1 = require("./modules/pet/pet.module");
const account_module_1 = require("./modules/account/account.module");
let HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule;
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cryptography_module_1.CryptographyModule, pet_module_1.PetModule, account_module_1.AccountModule],
        controllers: [authenticate_controller_1.AuthenticateContoller],
        providers: [register_org_1.RegisterOrgUseCase, authenticate_org_1.AuthenticateOrgUseCase],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map