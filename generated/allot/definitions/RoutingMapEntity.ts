import { DeviceList } from "./DeviceList";
import { IpRanges } from "./IpRanges";
import { NetworkDomainEntity } from "./NetworkDomainEntity";

/**
 * RoutingMapEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface RoutingMapEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    a_right?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:string */
    description?: string;
    /** deviceList */
    deviceList?: DeviceList;
    /** ipRanges */
    ipRanges?: IpRanges;
    /** xsd:boolean */
    isDefault?: string;
    /** networkDomainEntity */
    networkDomainEntity?: NetworkDomainEntity;
    /** xsd:int */
    oldSMPDefaultRangeId?: string;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    unitId?: string;
}
