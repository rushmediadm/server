import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_CUSTOMER_INFORMATIONS } from "./Queries/CustomerInformation";
import { 
    CREATE_CUSTOMER_INFORMATIONS
} from "./Mutations/CustomerInformation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllCustomerInformations: GET_ALL_CUSTOMER_INFORMATIONS
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCustomerInformation: CREATE_CUSTOMER_INFORMATIONS
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});