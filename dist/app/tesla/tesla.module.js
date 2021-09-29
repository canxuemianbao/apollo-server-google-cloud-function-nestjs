"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const shortid = require("shortid");
class IResolvers {
}
let TeslaModule = class TeslaModule {
    static get resolvers() {
        return {
            Query: {
                Tesla: async (_, { model }, { headers, auth }, info) => this.tesla
            },
            Mutation: {
                pimpMyWheels: async (_, { model }, { headers, auth }, info) => this.tesla
            },
            Tesla: {
                wheels: (tesla) => this.wheel
            }
        };
    }
};
TeslaModule.tesla = {
    id: shortid.generate(),
    edition: 'Long range performance',
    model: 'Model 3',
    kwh: 74,
    range: 470
};
TeslaModule.wheel = {
    id: shortid.generate(),
    inch: 42,
    name: 'Nitrogen cold gas thruster'
};
TeslaModule = __decorate([
    common_1.Module({
        providers: [],
        exports: []
    })
], TeslaModule);
exports.TeslaModule = TeslaModule;
//# sourceMappingURL=tesla.module.js.map