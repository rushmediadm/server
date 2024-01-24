import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer_Informations } from "./Entities/CustomerInformations";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "bga54jzaj3tpewrsjztd-mysql.services.clever-cloud.com",
  port: 3306,
  username: "uoa29gvkarjvshzp",
  password: "mvm7OcK5TgvdaBLHSDR3",
  database: "bga54jzaj3tpewrsjztd",
  synchronize: true,
  logging: true,
  entities: [Customer_Informations],
  subscribers: [],
  migrations: [],
})