
/**
 * supportTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface SupportTopicDto {
    /** xsd:boolean */
    areIfcsManageableInHostCatalog?: string;
    /** xsd:boolean */
    areMacAddressesAllowedInHostCatalog?: string;
    /** xsd:boolean */
    areSrcPortsAllowedInServiceCatalog?: string;
    /** xsd:boolean */
    isHalfDuplexAllowedInQosCatalog?: string;
    /** xsd:boolean */
    isRemoteRegistrationSupported?: string;
    /** xsd:boolean */
    isRemoteSnapshotSupported?: string;
    /** xsd:int */
    topicSupportMask?: string;
}
