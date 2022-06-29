import { DmBucketTypeEntity } from "./DmBucketTypeEntity";

/**
 * push
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface Push {
    /** bucketTypeEntity */
    bucketTypeEntity?: DmBucketTypeEntity;
    /** xsd:int */
    id?: string;
    /** xsd:boolean */
    isMethodChanged?: string;
    /** xsd:boolean */
    isPasswChanged?: string;
    /** xsd:boolean */
    isPathChanged?: string;
    /** xsd:boolean */
    isServerChanged?: string;
    /** xsd:boolean */
    isUserNameChanged?: string;
    /** xsd:int */
    method?: string;
    /** xsd:string */
    passw?: string;
    /** xsd:string */
    path?: string;
    /** xsd:string */
    server?: string;
    /** xsd:string */
    userName?: string;
}
