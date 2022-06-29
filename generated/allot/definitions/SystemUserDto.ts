import { FailedLogins } from "./FailedLogins";

/**
 * SystemUserDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.users.admin.nms.allot.com`
 */
export interface SystemUserDto {
    /** xsd:boolean */
    blocked?: string;
    /** xsd:boolean */
    clearBlock?: string;
    /** xsd:int */
    clientIp?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    email?: string;
    /** failedLogins */
    failedLogins?: FailedLogins;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    password?: string;
    /** xsd:boolean */
    passwordInit?: string;
    /** xsd:string */
    phone?: string;
    /** xsd:int */
    role?: string;
}
