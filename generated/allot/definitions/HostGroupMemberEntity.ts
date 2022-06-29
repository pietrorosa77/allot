import { HostEntity } from "./HostEntity";
import { HostGroupEntity } from "./HostGroupEntity";

/**
 * HostGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.host.catalog.nms.allot.com`
 */
export interface HostGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    groupId?: string;
    /** hostEntity */
    hostEntity?: HostEntity;
    /** hostGroupEntity */
    hostGroupEntity?: HostGroupEntity;
    /** xsd:int */
    hostId?: string;
    /** xsd:int */
    id?: string;
}
