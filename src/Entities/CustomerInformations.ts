import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer_Informations extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "CustomerID" })
  id!: number;

  @Column({ name: "FirstName" })
  firstName!: string;

  @Column({ name: "LastName" })
  lastName!: string;

  @Column({ name: "Birthdate", type: "date", nullable: true })
  birthdate?: Date;

  @Column({ name: "Gender", type: "enum", enum: ['Male', 'Female', 'Other'], nullable: true })
  gender?: 'Male' | 'Female' | 'Other';

  @Column({ name: "Address", nullable: true })
  address?: string;

  @Column({ name: "Email", unique: true })
  email!: string;

  @Column({ name: "ContactNumber", nullable: true })
  contactNumber?: string;

  @Column({ name: "PasswordHash" })
  passwordHash!: string;

  @Column({ name: "qrCodePath", nullable: true})
  qrCodePath?: string;
}
