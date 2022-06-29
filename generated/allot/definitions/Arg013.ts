import { Arg012 } from "./Arg012";

/**
 * arg0
 * @targetNSAlias `ns28`
 * @targetNamespace `http://dto.netawr.configuration.nms.allot.com`
 */
export interface Arg013 {
    /** cmtsNames */
    cmtsNames?: Arg012;
    /** CongestionActionFilter|xsd:string|ALL,ENFORCE,MONITORING */
    congestionAction?: string;
    /** CongestionStatusFilter|xsd:string|ALL,CLEARED,CONGESTED */
    congestionState?: string;
    /** CmtsDirection|xsd:string|DOWNSTREAM,UPSTREAM,BOTH */
    direction?: string;
    /** CmtsInterfaceTypeFilter|xsd:string|ALL,BONDING_GROUP,CHANNEL,WIDEBAND */
    interfaceType?: string;
    /** macDomainNames */
    macDomainNames?: Arg012;
}
