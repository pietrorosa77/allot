import { DmOutputBucketProfileEntity } from "./DmOutputBucketProfileEntity";

/**
 * pushEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface PushEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** PushMethodEnum|xsd:string|NONE,SFTP,FTP,COPY,SCP */
    method?: string;
    /** outputBucketProfileEntity */
    outputBucketProfileEntity?: DmOutputBucketProfileEntity;
    /** xsd:string */
    passw?: string;
    /** xsd:string */
    path?: string;
    /** xsd:string */
    server?: string;
    /** xsd:base64Binary */
    sshKey?: string;
    /** xsd:string */
    sshKeyPath?: string;
    /** xsd:string */
    userName?: string;
}
