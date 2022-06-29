
/**
 * SourceUnitData
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.topology.nms.allot.com`
 */
export interface SourceUnitData {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:string */
    password?: string;
    /** xsd:int */
    port?: string;
    /** TransferProtocol|xsd:string|HTTPS,HTTP */
    protocol?: string;
    /** xsd:int */
    sourceUnitId?: string;
    /** xsd:string */
    sourceUnitIp?: string;
    /** SourceUnitTypes|xsd:string|NE,SMP_GROUP,WSP */
    type?: string;
    /** xsd:string */
    user?: string;
}
