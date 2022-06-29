import { WorkServerEntity } from "./WorkServerEntity";

/**
 * Device2WorkServerEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.servers.configuration.nms.allot.com`
 */
export interface Device2WorkServerEntity {
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    seqOrder?: string;
    /** server */
    server?: WorkServerEntity;
    /** xsd:int */
    serverId?: string;
}
