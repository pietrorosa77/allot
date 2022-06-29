
/**
 * systemLimitsTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface SystemLimitsTopicDto {
    /** xsd:long */
    linePerPolicy?: string;
    /** xsd:long */
    maxBW?: string;
    /** xsd:long */
    maxCer?: string;
    /** xsd:long */
    maxConn?: string;
    /** xsd:long */
    pipePerPolicy?: string;
    /** xsd:long */
    vcPerPipe?: string;
    /** xsd:long */
    vcPerPolicy?: string;
}
