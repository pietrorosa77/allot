import { CsSystemEntity } from "./CsSystemEntity";
import { Device2WorkServers } from "./Device2WorkServers";
import { WorkServerParams1 } from "./WorkServerParams1";

/**
 * WorkServerEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.servers.configuration.nms.allot.com`
 */
export interface WorkServerEntity {
    /** xsd:int */
    changeStatus?: string;
    /** csSystemEntity */
    csSystemEntity?: CsSystemEntity;
    /** xsd:string */
    desc?: string;
    /** device2WorkServers */
    device2WorkServers?: Device2WorkServers;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ip?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:string */
    netName?: string;
    /** xsd:int */
    oper?: string;
    /** xsd:int */
    type?: string;
    /** workServerParams */
    workServerParams?: WorkServerParams1;
}
