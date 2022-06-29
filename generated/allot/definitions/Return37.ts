import { SnmpWorkServerDtoList } from "./SnmpWorkServerDtoList";

/**
 * return
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Return37 {
    /** xsd:string */
    asTrapIp?: string;
    /** xsd:boolean */
    asTrapIpChanged?: string;
    /** xsd:string */
    asTrapIpv6?: string;
    /** xsd:boolean */
    asTrapIpv6Changed?: string;
    /** xsd:string */
    authenticationPassphrase?: string;
    /** xsd:boolean */
    authenticationPassphraseChanged?: string;
    /** xsd:string */
    privacyPassphrase?: string;
    /** xsd:boolean */
    privacyPassphraseChanged?: string;
    /** xsd:int */
    requestTimeout?: string;
    /** xsd:boolean */
    requestTimeoutChanged?: string;
    /** xsd:int */
    securityLevel?: string;
    /** xsd:boolean */
    securityLevelChanged?: string;
    /** xsd:string */
    securityName?: string;
    /** xsd:boolean */
    securityNameChanged?: string;
    /** xsd:string */
    snmpAgentCommunity?: string;
    /** xsd:boolean */
    snmpAgentCommunityChanged?: string;
    /** xsd:int */
    snmpAgentPort?: string;
    /** xsd:boolean */
    snmpAgentPortChanged?: string;
    /** snmpWorkServerDTOList */
    snmpWorkServerDTOList?: SnmpWorkServerDtoList;
    /** xsd:boolean */
    snmpWorkServerDTOListChanged?: string;
    /** xsd:int */
    timeout?: string;
    /** xsd:boolean */
    timeoutChanged?: string;
}
