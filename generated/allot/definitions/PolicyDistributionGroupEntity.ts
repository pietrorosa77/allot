import { GroupDevices } from "./GroupDevices";

/**
 * PolicyDistributionGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.distributiongroups.configuration.nms.allot.com`
 */
export interface PolicyDistributionGroupEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** groupDevices */
    groupDevices?: GroupDevices;
}
