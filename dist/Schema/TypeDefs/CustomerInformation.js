"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerInformationsType = void 0;
const graphql_1 = require("graphql");
const GenderEnumType = new graphql_1.GraphQLEnumType({
    name: 'GenderTypeDefs',
    values: {
        MALE: { value: 'Male' },
        FEMALE: { value: 'Female' },
        OTHER: { value: 'Other' },
    },
});
exports.CustomerInformationsType = new graphql_1.GraphQLObjectType({
    name: "Customer_Information",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        birthdate: { type: graphql_1.GraphQLString },
        gender: { type: GenderEnumType },
        address: { type: graphql_1.GraphQLString },
        email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        contactNumber: { type: graphql_1.GraphQLString },
        passwordHash: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        qrCodePath: { type: graphql_1.GraphQLString }
    }),
});
//# sourceMappingURL=CustomerInformation.js.map