"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const main_1 = require("./main");
const app = express();
/**
 * This runs the CloudFunction handler locally in an express server, for testing purposes
 */
(async () => {
    // const graphqlHandler = await createGraphqlHandler(typeDefs, resolvers);
    const graphqlHandler = await main_1.bootstrap();
    app.use(bodyParser.json());
    app.use('/', graphqlHandler);
    app.listen(8080, () => console.log(`⚡️ Devserver listening on localhost:8080`));
})();
//# sourceMappingURL=dev-server.js.map