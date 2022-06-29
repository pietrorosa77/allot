import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";
import { LicenseHeader } from "./LicenseHeader";

/**
 * license
 * @targetNSAlias `ns11`
 * @targetNamespace `http://dto.license.admin.nms.allot.com`
 */
export interface License {
    /** attributes */
    attributes?: SmtpWorkServerDtoList;
    /** xsd:int */
    deviceId?: string;
    /** xsd:string */
    encryptedKey?: string;
    /** xsd:string */
    encryptedKeyForUpdateServer?: string;
    /** xsd:boolean */
    expired?: string;
    /** licenseHeader */
    licenseHeader?: LicenseHeader;
    /** limitParams */
    limitParams?: SmtpWorkServerDtoList;
    /** xsd:int */
    maxSmpSubscribers?: string;
}
