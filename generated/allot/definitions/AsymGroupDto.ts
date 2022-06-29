import { Devices } from "./Devices";

/**
 * AsymGroupDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.asymmetric.configuration.nms.allot.com`
 */
export interface AsymGroupDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    asymGroupId?: string;
    /** xsd:string */
    description?: string;
    /** devices */
    devices?: Devices;
    /** xsd:int */
    healthCheckEnable?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    transportType?: string;
}
