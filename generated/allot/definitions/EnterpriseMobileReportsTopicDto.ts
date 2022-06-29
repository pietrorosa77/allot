import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";

/**
 * enterpriseMobileReportsTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface EnterpriseMobileReportsTopicDto {
    /** xsd:int */
    conversationExportIndicator?: string;
    /** xsd:boolean */
    conversationExportIndicatorChanged?: string;
    /** xsd:int */
    sdrExportIndicator?: string;
    /** xsd:boolean */
    sdrExportIndicatorChanged?: string;
    /** xsd:boolean */
    sessionUsageExportIndicatiorChanged?: string;
    /** xsd:int */
    sessionUsageExportIndicator?: string;
    /** sgsnList */
    sgsnList?: SmtpWorkServerDtoList;
    /** xsd:boolean */
    sgsnListChanged?: string;
    /** xsd:string */
    targetFileHostIp?: string;
    /** xsd:boolean */
    targetFileHostIpChanged?: string;
    /** xsd:int */
    vcStatisticExportIndicator?: string;
    /** xsd:boolean */
    vcStatisticExportIndicatorChanged?: string;
}
