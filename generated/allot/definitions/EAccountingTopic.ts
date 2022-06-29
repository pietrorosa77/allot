
/**
 * EAccountingTopic
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface EAccountingTopic {
    /** xsd:boolean */
    dataSrcChanged?: string;
    /** xsd:string */
    exportRootDir?: string;
    /** xsd:boolean */
    exportRootDirChanged?: string;
    /** xsd:int */
    interval?: string;
    /** xsd:boolean */
    intervalChanged?: string;
    /** xsd:int */
    mode?: string;
    /** xsd:boolean */
    modeChanged?: string;
    /** xsd:int */
    timeToKeepFiles?: string;
    /** xsd:boolean */
    timeToKeepFilesChanged?: string;
}
