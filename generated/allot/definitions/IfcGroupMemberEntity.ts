import { IfcGroupEntity } from "./IfcGroupEntity";
import { IfcPortEntity } from "./IfcPortEntity";

/**
 * IfcGroupMemberEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.ifc.catalog.nms.allot.com`
 */
export interface IfcGroupMemberEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** ifcGroup */
    ifcGroup?: IfcGroupEntity;
    /** xsd:int */
    ifcId?: string;
    /** ifcPort */
    ifcPort?: IfcPortEntity;
    /** xsd:dateTime */
    lastChange?: string;
}
