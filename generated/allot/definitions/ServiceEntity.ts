import { Service2ContentValueEntities } from "./Service2ContentValueEntities";
import { ServicePortEntities } from "./ServicePortEntities";

/**
 * serviceEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.service.catalog.nms.allot.com`
 */
export interface ServiceEntity {
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
    /** xsd:int */
    applicationId?: string;
    /** xsd:int */
    applicationLocalId?: string;
    /** xsd:int */
    definitionControl?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    groupAssignmentControl?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    parentId?: string;
    /** xsd:int */
    pdpi?: string;
    /** xsd:int */
    pdpiFalseNegativeMax?: string;
    /** xsd:int */
    pdpiFalsePositiveMax?: string;
    /** xsd:int */
    pdpiType?: string;
    /** service2ContentValueEntities */
    service2ContentValueEntities?: Service2ContentValueEntities;
    /** servicePortEntities */
    servicePortEntities?: ServicePortEntities;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    uds?: string;
}
