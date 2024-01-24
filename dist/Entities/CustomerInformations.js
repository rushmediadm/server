"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_Informations = void 0;
const typeorm_1 = require("typeorm");
let Customer_Informations = class Customer_Informations extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "CustomerID" }),
    __metadata("design:type", Number)
], Customer_Informations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "FirstName" }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "LastName" }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Birthdate", type: "date", nullable: true }),
    __metadata("design:type", Date)
], Customer_Informations.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Gender", type: "enum", enum: ['Male', 'Female', 'Other'], nullable: true }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Address", nullable: true }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Email", unique: true }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ContactNumber", nullable: true }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "PasswordHash" }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "qrCodePath", nullable: true }),
    __metadata("design:type", String)
], Customer_Informations.prototype, "qrCodePath", void 0);
Customer_Informations = __decorate([
    (0, typeorm_1.Entity)()
], Customer_Informations);
exports.Customer_Informations = Customer_Informations;
//# sourceMappingURL=CustomerInformations.js.map