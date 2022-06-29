import { TemplateInstanceId } from "./TemplateInstanceId";

/**
 * TubeGroupMemberDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.policy.nms.allot.com`
 */
export interface TubeGroupMemberDto {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    groupId?: string;
    /** xsd:int */
    id?: string;
    /** templateInstanceId */
    templateInstanceId?: TemplateInstanceId;
    /** xsd:int */
    tubeId?: string;
}
