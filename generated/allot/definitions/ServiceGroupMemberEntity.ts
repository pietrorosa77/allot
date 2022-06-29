import { ServiceGroupEntity } from "./ServiceGroupEntity";

/**
 * ServiceGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.service.catalog.nms.allot.com`
 */
export interface ServiceGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    groupId?: string;
    /** serviceGroupEntity */
    serviceGroupEntity?: ServiceGroupEntity;
    /** xsd:int */
    serviceId?: string;
    /** xsd:int */
    serviceLocalId?: string;
    /** xsd:string */
    serviceName?: string;
}
