"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const CustomerInformation_1 = require("./Queries/CustomerInformation");
const CustomerInformation_2 = require("./Mutations/CustomerInformation");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllCustomerInformations: CustomerInformation_1.GET_ALL_CUSTOMER_INFORMATIONS
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCustomerInformation: CustomerInformation_2.CREATE_CUSTOMER_INFORMATIONS,
        // deleteUser: DELETE_CUSTOMER_INFORMATIONS,
        // updatePassword: UPDATE_CUSTOMER_INFORMATIONS,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
//# sourceMappingURL=index.js.map