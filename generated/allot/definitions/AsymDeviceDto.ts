import { Peers } from "./Peers";

/**
 * AsymDeviceDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.asymmetric.configuration.nms.allot.com`
 */
export interface AsymDeviceDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    asymEnable?: string;
    /** xsd:int */
    asymId?: string;
    /** xsd:string */
    asymNetAddr?: string;
    /** xsd:int */
    dQoSEnable?: string;
    /** xsd:int */
    devId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** peers */
    peers?: Peers;
}
