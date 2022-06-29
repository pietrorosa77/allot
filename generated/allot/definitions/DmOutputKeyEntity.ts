import { DmOutputBucketEntity } from "./DmOutputBucketEntity";
import { DmOutputKeyFieldEntities } from "./DmOutputKeyFieldEntities";

/**
 * DmOutputKeyEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputKeyEntity {
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
    /** dmOutputBucketEntity */
    dmOutputBucketEntity?: DmOutputBucketEntity;
    /** dmOutputKeyFieldEntities */
    dmOutputKeyFieldEntities?: DmOutputKeyFieldEntities;
}
