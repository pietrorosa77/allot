import { WorkServerEntity } from "./WorkServerEntity";

/**
 * WorkServerParamEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.servers.configuration.nms.allot.com`
 */
export interface WorkServerParamEntity {
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** server */
    server?: WorkServerEntity;
    /** xsd:int */
    serverId?: string;
    /** xsd:string */
    value?: string;
}
