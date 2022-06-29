import { Arg012 } from "./Arg012";

/**
 * arg0
 * @targetNSAlias `ns28`
 * @targetNamespace `http://dto.netawr.configuration.nms.allot.com`
 */
export interface Arg034 {
    /** NetUnitStatus|xsd:string|CONGESTED,CLEARED,UNKNOWN */
    inboundStatus?: string;
    /** netUnitNames */
    netUnitNames?: Arg012;
    /** NetUnitStatus|xsd:string|CONGESTED,CLEARED,UNKNOWN */
    outboundStatus?: string;
}
