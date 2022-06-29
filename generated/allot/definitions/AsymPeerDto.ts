
/**
 * AsymPeerDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.asymmetric.configuration.nms.allot.com`
 */
export interface AsymPeerDto {
    /** xsd:int */
    admin?: string;
    /** xsd:int */
    dAsymStatus?: string;
    /** xsd:int */
    dQosStatus?: string;
    /** xsd:int */
    healthCheckStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    oper?: string;
    /** xsd:int */
    peerAsymId?: string;
    /** xsd:int */
    peerId?: string;
    /** xsd:int */
    port?: string;
    /** xsd:int */
    vlanId?: string;
}
