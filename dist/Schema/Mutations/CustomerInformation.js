"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_CUSTOMER_INFORMATIONS = void 0;
const graphql_1 = require("graphql");
const CustomerInformation_1 = require("../TypeDefs/CustomerInformation");
// import { MessageType } from "../TypeDefs/Messages";
const CustomerInformations_1 = require("../../Entities/CustomerInformations");
const qrcode_1 = __importDefault(require("qrcode"));
const GenderEnumType = new graphql_1.GraphQLEnumType({
    name: 'GenderMutations',
    values: {
        MALE: { value: 'Male' },
        FEMALE: { value: 'Female' },
        OTHER: { value: 'Other' },
    },
});
exports.CREATE_CUSTOMER_INFORMATIONS = {
    type: CustomerInformation_1.CustomerInformationsType,
    args: {
        firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        birthdate: { type: graphql_1.GraphQLString },
        gender: { type: GenderEnumType },
        address: { type: graphql_1.GraphQLString },
        email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        contactNumber: { type: graphql_1.GraphQLString },
        passwordHash: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    resolve(_, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, birthdate, gender, address, email, contactNumber, passwordHash } = args;
            const insertCustomerInformation = yield CustomerInformations_1.Customer_Informations.insert({ firstName, lastName, birthdate, gender, address, email, contactNumber, passwordHash });
            const insertedCustomer = (_a = insertCustomerInformation.generatedMaps) === null || _a === void 0 ? void 0 : _a[0];
            const customerId = insertedCustomer === null || insertedCustomer === void 0 ? void 0 : insertedCustomer.id;
            const qrCodeDir = `qrcodes/${customerId}.png`;
            yield qrcode_1.default.toFile(`public/${qrCodeDir}`, JSON.stringify(insertCustomerInformation));
            yield CustomerInformations_1.Customer_Informations.update({ id: customerId }, { qrCodePath: `public/${qrCodeDir}` });
            return args;
        });
    },
};