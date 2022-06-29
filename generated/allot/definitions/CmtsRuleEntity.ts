
/**
 * CmtsRuleEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.netawr.configuration.nms.allot.com`
 */
export interface CmtsRuleEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    basicServicePlanId?: string;
    /** xsd:int */
    congestionBothSPId?: string;
    /** xsd:int */
    congestionDownSPId?: string;
    /** xsd:int */
    congestionUpSPId?: string;
}
