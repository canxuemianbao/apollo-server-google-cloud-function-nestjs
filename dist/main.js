"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const apollo_server_cloud_functions_1 = require("apollo-server-cloud-functions");
async function bootstrap() {
    exports.context = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule); // Initialize Nest without starting a server (because we're running in GCloud functions)
    const app = exports.context.get(app_module_1.AppModule);
    const server = new apollo_server_cloud_functions_1.ApolloServer({
        typeDefs: app.typeDefs,
        resolvers: app.resolvers,
        playground: true,
        introspection: true
    });
    return server.createHandler();
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=main.js.map