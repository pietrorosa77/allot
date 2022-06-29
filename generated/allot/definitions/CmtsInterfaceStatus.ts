
/**
 * CmtsInterfaceStatus
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.netawr.configuration.nms.allot.com`
 */
export interface CmtsInterfaceStatus {
    /** xsd:int */
    clearThreshold?: string;
    /** xsd:string */
    cmtsName?: string;
    /** CongestionAction|xsd:string|MONITORING,ENFORCE */
    congestionAction?: string;
    /** xsd:int */
    congestionThreshold?: string;
    /** CmtsDirection|xsd:string|DOWNSTREAM,UPSTREAM,BOTH */
    direction?: string;
    /** xsd:string */
    interfaceChannelId?: string;
    /** xsd:string */
    interfaceName?: string;
    /** xsd:long */
    interfaceSpeed?: string;
    /** CongestionStatus|xsd:string|CLEARED,CONGESTED */
    interfaceStatus?: string;
    /** CmtsInterfaceType|xsd:string|NA,BONDING_GROUP,CHANNEL,WIDEBAND */
    interfaceType?: string;
    /** xsd:long */
    interfaceUtilization?: string;
    /** xsd:int */
    macDomainIfIndex?: string;
    /** xsd:string */
    macDomainName?: string;
    /** xsd:long */
    netUnitId?: string;
}
