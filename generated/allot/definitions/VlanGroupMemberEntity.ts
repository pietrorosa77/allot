import { VlanEntity } from "./VlanEntity";
import { VlanGroup } from "./VlanGroup";

/**
 * VlanGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.vlan.catalog.nms.allot.com`
 */
export interface VlanGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** vlan */
    vlan?: VlanEntity;
    /** vlanGroup */
    vlanGroup?: VlanGroup;
    /** xsd:int */
    vlanId?: string;
}
