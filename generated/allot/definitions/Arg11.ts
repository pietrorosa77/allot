import { AllowedHosts } from "./AllowedHosts";

/**
 * arg1
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Arg11 {
    /** allowedHosts */
    allowedHosts?: AllowedHosts;
    /** xsd:boolean */
    allowedHostsChanged?: string;
    /** xsd:int */
    consoleTelnetTimeout?: string;
    /** xsd:boolean */
    consoleTelnetTimeoutChanged?: string;
    /** xsd:int */
    enhancedTcpSec?: string;
    /** xsd:boolean */
    enhancedTcpSecChanged?: string;
    /** xsd:int */
    http?: string;
    /** xsd:boolean */
    httpChanged?: string;
    /** xsd:int */
    isPingEnabled?: string;
    /** xsd:int */
    isTelnetEnabled?: string;
    /** xsd:int */
    lcdEnabled?: string;
    /** xsd:boolean */
    lcdEnabledChanged?: string;
    /** xsd:boolean */
    pingEnabledChanged?: string;
    /** xsd:int */
    ssh?: string;
    /** xsd:boolean */
    sshChanged?: string;
    /** xsd:int */
    ssl?: string;
    /** xsd:boolean */
    sslChanged?: string;
    /** xsd:boolean */
    telnetEnabledChanged?: string;
    /** xsd:boolean */
    unLimitedAccess?: string;
}
