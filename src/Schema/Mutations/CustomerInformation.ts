import { GraphQLString, GraphQLNonNull, GraphQLEnumType } from "graphql";
import { CustomerInformationsType } from "../TypeDefs/CustomerInformation";
import { Customer_Informations } from "../../Entities/CustomerInformations";
import qrCode from 'qrcode'; 

const GenderEnumType = new GraphQLEnumType({
    name: 'GenderMutations',
    values: {
        MALE: { value: 'Male' },
        FEMALE: { value: 'Female' },
        OTHER: { value: 'Other' },
    },
});

interface CreateCustomerInformationArgs {
  firstName: string;
  lastName: string;
  birthdate?: string;
  gender: 'Male' | 'Female' | 'Other';
  address?: string;
  email: string;
  contactNumber?: string;
  passwordHash: string;
}

export const CREATE_CUSTOMER_INFORMATIONS = {
  type: CustomerInformationsType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    birthdate: { type: GraphQLString },
    gender: { type: GenderEnumType },
    address: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    contactNumber: { type: GraphQLString },
    passwordHash: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: any, args: CreateCustomerInformationArgs) {
    const { firstName, lastName, birthdate, gender, address, email, contactNumber, passwordHash } = args;
    const insertCustomerInformation = await Customer_Informations.insert({ firstName, lastName, birthdate, gender, address, email, contactNumber, passwordHash });
    const insertedCustomer = insertCustomerInformation.generatedMaps?.[0];
    const customerId = insertedCustomer?.id;
    const qrCodeDir = `qrcodes/${customerId}.png`;
    await qrCode.toFile(`public/${qrCodeDir}`, JSON.stringify(insertCustomerInformation));
    await Customer_Informations.update({ id: customerId } as Object, { qrCodePath: `${qrCodeDir}` } as Object);
    return args;
  },
};