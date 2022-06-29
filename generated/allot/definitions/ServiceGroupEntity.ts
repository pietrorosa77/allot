import { Return1 } from "./Return1";
import { ServiceGroupMemberEntities } from "./ServiceGroupMemberEntities";

/**
 * ServiceGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.service.catalog.nms.allot.com`
 */
export interface ServiceGroupEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    admin?: string;
    /** childServiceGroupEntities */
    childServiceGroupEntities?: Return1;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    parentId?: string;
    /** parentServiceGroupEntity */
    parentServiceGroupEntity?: ServiceGroupEntity;
    /** serviceGroupMemberEntities */
    serviceGroupMemberEntities?: ServiceGroupMemberEntities;
}
