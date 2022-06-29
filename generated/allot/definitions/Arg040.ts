import { SnmpWorkServerDtoList } from "./SnmpWorkServerDtoList";
import { LdapConfiguration } from "./LdapConfiguration";
import { RadiusConfiguration } from "./RadiusConfiguration";
import { TacacsConfiguration } from "./TacacsConfiguration";

/**
 * arg0
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Arg040 {
    /** xsd:string */
    clientIdentifier?: string;
    /** xsd:boolean */
    clientIdentifierChanged?: string;
    /** xsd:int */
    extAuthEnable?: string;
    /** xsd:boolean */
    extAuthEnableChanged?: string;
    /** extServerList */
    extServerList?: SnmpWorkServerDtoList;
    /** xsd:boolean */
    extServerListChanged?: string;
    /** ldapConfiguration */
    ldapConfiguration?: LdapConfiguration;
    /** radiusConfiguration */
    radiusConfiguration?: RadiusConfiguration;
    /** xsd:int */
    requestRetries?: string;
    /** xsd:boolean */
    requestRetriesChanged?: string;
    /** tacacsConfiguration */
    tacacsConfiguration?: TacacsConfiguration;
}
