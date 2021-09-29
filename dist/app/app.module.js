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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tesla_module_1 = require("./tesla/tesla.module");
const fs = require("fs");
const glob = require("glob");
let AppModule = class AppModule {
    constructor() {
        this.typeDefs = [];
        this.resolvers = [];
        this.resolvers.push(tesla_module_1.TeslaModule.resolvers);
        this.typeDefs = this.getAllTypeDefs();
    }
    /**
     * Get all files ending in .graphql
     */
    getAllTypeDefs() {
        const typeDefs = [];
        const files = glob.sync('dist/**/*.graphql');
        files.forEach(file => {
            typeDefs.push(fs.readFileSync(file).toString());
        });
        return typeDefs;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            tesla_module_1.TeslaModule
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map