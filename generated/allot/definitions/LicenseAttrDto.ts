import { Params } from "./Params";

/**
 * LicenseAttrDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.license.admin.nms.allot.com`
 */
export interface LicenseAttrDto {
    /** xsd:int */
    attrType?: string;
    /** params */
    params?: Params;
    /** sortedParams */
    sortedParams?: Params;
}
