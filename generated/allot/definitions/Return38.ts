import { AllowedHostDtoList } from "./AllowedHostDtoList";
import { Arg032 } from "./Arg032";
import { Arg024 } from "./Arg024";
import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";
import { SnmpWorkServerDtoList } from "./SnmpWorkServerDtoList";

/**
 * return
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Return38 {
    /** allowedHostDTOList */
    allowedHostDTOList?: AllowedHostDtoList;
    /** xsd:boolean */
    allowedHostDTOListChanged?: string;
    /** remoteNxEntityList */
    remoteNxEntityList?: Arg032;
    /** xsd:boolean */
    remoteNxEntityListChanged?: string;
    /** xsd:string */
    senderEmailId?: string;
    /** xsd:boolean */
    senderEmailIdChanged?: string;
    /** xsd:int */
    smtpPort?: string;
    /** xsd:boolean */
    smtpPortChanged?: string;
    /** smtpPrimaryWorkServerDTO */
    smtpPrimaryWorkServerDTO?: Arg024;
    /** xsd:boolean */
    smtpPrimaryWorkServerDTOChanged?: string;
    /** smtpWorkServerDTOList */
    smtpWorkServerDTOList?: SmtpWorkServerDtoList;
    /** xsd:boolean */
    smtpWorkServerDTOListChanged?: string;
    /** xsd:boolean */
    syslogServerDTOChanged?: string;
    /** syslogServerDTOList */
    syslogServerDTOList?: SnmpWorkServerDtoList;
}
