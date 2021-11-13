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
const posts_module_1 = require("./posts/posts.module");
const Joi = require("@hapi/joi");
const database_module_1 = require("./database/database.module");
const authentication_module_1 = require("./authentication/authentication.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [posts_module_1.PostsModule, config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    PORT: Joi.number(),
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                })
            }),
            database_module_1.DatabaseModule,
            authentication_module_1.AuthenticationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map