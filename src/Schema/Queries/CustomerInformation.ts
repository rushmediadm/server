import { GraphQLList } from "graphql";
import { CustomerInformationsType } from "../TypeDefs/CustomerInformation";
import { Customer_Informations } from "../../Entities/CustomerInformations";

export const GET_ALL_CUSTOMER_INFORMATIONS = {
  type: new GraphQLList(CustomerInformationsType),
  resolve() {
    return Customer_Informations.find();
  },
};