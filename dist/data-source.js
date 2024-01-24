"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const CustomerInformations_1 = require("./Entities/CustomerInformations");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "bga54jzaj3tpewrsjztd-mysql.services.clever-cloud.com",
    port: 3306,
    username: "uoa29gvkarjvshzp",
    password: "mvm7OcK5TgvdaBLHSDR3",
    database: "bga54jzaj3tpewrsjztd",
    synchronize: true,
    logging: true,
    entities: [CustomerInformations_1.Customer_Informations],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map