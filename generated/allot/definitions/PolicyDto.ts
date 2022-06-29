import { Arg06 } from "./Arg06";

/**
 * PolicyDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface PolicyDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    extToIntOrder?: string;
    /** xsd:int */
    format?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    intToExtOrder?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** lines */
    lines?: Arg06;
    /** xsd:string */
    name?: string;
}
