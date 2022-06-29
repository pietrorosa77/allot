import { CocApplicationDtOs } from "./CocApplicationDtOs";
import { L4Ports } from "./L4Ports";
import { VsMembers } from "./VsMembers";

/**
 * VirtualServiceEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.coc.catalog.nms.allot.com`
 */
export interface VirtualServiceEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    admin?: string;
    /** cocApplicationDTOs */
    cocApplicationDTOs?: CocApplicationDtOs;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    executionOrder?: string;
    /** FallbackSteeringModeEnum|xsd:string|NONE,BIDIRECTIONAL,CLIENT2SERVER,SERVER2CLIENT,IGNORE */
    fallbackSteeringMode?: string;
    /** xsd:int */
    isDynamicActivationEnabled?: string;
    /** L4ConnectionStateEnum|xsd:string|IGNORE,FIRST_PACKET,FIRST_SECOND_PACKET,ANY_PACKET */
    l4ConnectState?: string;
    /** l4Ports */
    l4Ports?: L4Ports;
    /** xsd:int */
    localId?: string;
    /** vsMembers */
    vsMembers?: VsMembers;
}
