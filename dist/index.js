"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const graphqlHandlerPromise = main_1.bootstrap();
exports.teslaHandler = async function (...args) {
    const graphQlHandler = await graphqlHandlerPromise;
    return graphQlHandler.apply(this, args);
};
//# sourceMappingURL=index.js.map