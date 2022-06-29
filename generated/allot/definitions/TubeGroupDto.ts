import { TubeGroupMembers } from "./TubeGroupMembers";

/**
 * TubeGroupDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface TubeGroupDto {
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    groupType?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** tubeGroupMembers */
    tubeGroupMembers?: TubeGroupMembers;
    /** xsd:int */
    type?: string;
    /** xsd:int */
    userId?: string;
}
