import { HdrInputEntity } from "./HdrInputEntity";

/**
 * DmAttrOverrideEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmAttrOverrideEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** dmInputBucketEntity */
    dmInputBucketEntity?: HdrInputEntity;
    /** xsd:int */
    length?: string;
}
