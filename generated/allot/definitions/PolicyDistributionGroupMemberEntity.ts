import { PolicyDistributionGroupEntity } from "./PolicyDistributionGroupEntity";

/**
 * PolicyDistributionGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.distributiongroups.configuration.nms.allot.com`
 */
export interface PolicyDistributionGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    groupId?: string;
    /** xsd:int */
    id?: string;
    /** policyDistributionGroup */
    policyDistributionGroup?: PolicyDistributionGroupEntity;
}
