import { RoutingMapEntity } from "./RoutingMapEntity";

/**
 * IpRangeEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface IpRangeEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ip1?: string;
    /** xsd:int */
    ip2?: string;
    /** xsd:string */
    ipv6From?: string;
    /** xsd:string */
    ipv6To?: string;
    /** xsd:string */
    label?: string;
    /** xsd:int */
    netMask?: string;
    /** xsd:int */
    oldSMPId?: string;
    /** routingMapEntity */
    routingMapEntity?: RoutingMapEntity;
    /** xsd:int */
    type?: string;
}
