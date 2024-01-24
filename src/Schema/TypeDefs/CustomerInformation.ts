import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLEnumType } from "graphql";

const GenderEnumType = new GraphQLEnumType({
  name: 'GenderTypeDefs',
  values: {
    MALE: { value: 'Male' },
    FEMALE: { value: 'Female' },
    OTHER: { value: 'Other' },
  },
});

export const CustomerInformationsType = new GraphQLObjectType({
  name: "Customer_Information",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    birthdate: { type: GraphQLString },
    gender: { type: GenderEnumType },
    address: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    contactNumber: { type: GraphQLString },
    passwordHash: { type: new GraphQLNonNull(GraphQLString) },
    qrCodePath: { type: GraphQLString }
  }),
});
