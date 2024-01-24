"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_CUSTOMER_INFORMATIONS = void 0;
const graphql_1 = require("graphql");
const CustomerInformation_1 = require("../TypeDefs/CustomerInformation");
const CustomerInformations_1 = require("../../Entities/CustomerInformations");
exports.GET_ALL_CUSTOMER_INFORMATIONS = {
    type: new graphql_1.GraphQLList(CustomerInformation_1.CustomerInformationsType),
    resolve() {
        return CustomerInformations_1.Customer_Informations.find();
    },
};
//# sourceMappingURL=CustomerInformation.js.map