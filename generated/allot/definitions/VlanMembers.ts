import { VlanGroupMemberEntity } from "./VlanGroupMemberEntity";

/**
 * vlanMembers
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.vlan.catalog.nms.allot.com`
 */
export interface VlanMembers {
    /** VlanGroupMemberEntity[] */
    VlanGroupMemberEntity?: Array<VlanGroupMemberEntity>;
}
