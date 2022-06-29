import { LimitValues } from "./LimitValues";

/**
 * LicenseMonitoringDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface LicenseMonitoringDto {
    /** xsd:string */
    licenseAttrName?: string;
    /** xsd:int */
    licenseAttrType?: string;
    /** xsd:int */
    licenseStatus?: string;
    /** limitValues */
    limitValues?: LimitValues;
}
