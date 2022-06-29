import { WorkServerEntity } from "./WorkServerEntity";

/**
 * snmpIpEntities
 * @targetNSAlias `ns2`
 * @targetNamespace `http://ejb.servers.configuration.nms.allot.com`
 */
export interface SnmpIpEntities {
    /** WorkServerEntity[] */
    WorkServerEntity?: Array<WorkServerEntity>;
}
