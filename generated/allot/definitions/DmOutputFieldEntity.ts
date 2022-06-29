import { FormatParameterEntities } from "./FormatParameterEntities";
import { DmOutputBucketEntity } from "./DmOutputBucketEntity";
import { OutputFieldVersions } from "./OutputFieldVersions";
import { SourceFieldEntities } from "./SourceFieldEntities";

/**
 * DmOutputFieldEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputFieldEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    exportEnable?: string;
    /** xsd:boolean */
    extend?: string;
    /** xsd:string */
    field?: string;
    /** xsd:string */
    format?: string;
    /** formatParameterEntities */
    formatParameterEntities?: FormatParameterEntities;
    /** xsd:boolean */
    formatParameterEntitiesChanged?: string;
    /** xsd:int */
    index?: string;
    /** ObfuscationEnum|xsd:string|NO,HASH,ENCRYPT */
    obfuscation?: string;
    /** OutputFieldOperatorEnum|xsd:string|COPY,MIN,MAX,SUM,AVE,CONCAT */
    operator?: string;
    /** outputBucketEntity */
    outputBucketEntity?: DmOutputBucketEntity;
    /** outputFieldVersions */
    outputFieldVersions?: OutputFieldVersions;
    /** xsd:boolean */
    persistent?: string;
    /** BucketTypeEnum|xsd:string|MANIFEST,HDR,VDR,BDR,UDR,SDR,GENERIC,CONV,VC,HDRA,CMDR,CMCS,CMBM,MMDR,HTTP,CONV_RTS,CONV_RTU,WSPREDIRECTION,WSPMAIL,WSPINTERNAL,WSPLCBLMAINTENANCE,WSPADSFREE,WSPFIREWALL,WSPNOTIFICATIONS,WSPSSLTRAFFIC,WSPPERFORMANCE,WSPWEBPROXY,WSPAUDITLOGIN,WSPAUDITUSERS,WSPAUDITMASTERTABLES,WSPFTPPROXY,WSPWEBNAVIGATION,WSPBGP,WSPSEARCHENGINES,WSPCACHE,WSPTRAFFIC,WSPREQUEST,WSPWEBTRAFFIC,WSPWEBQOS,WSPWEBBANDWIDTH,WSPCONNECT,WSPCUSTOMTRANS,WSPSERVICEACTIVATION,WSPUSERACTIVATION,WSPACTIVATIONGUI,WSPACTIVATIONGUIDATA,URDR,WSPTRACKING */
    source?: string;
    /** sourceFieldEntities */
    sourceFieldEntities?: SourceFieldEntities;
    /** xsd:boolean */
    sourceFieldEntitiesChanged?: string;
    /** xsd:boolean */
    textDecoding?: string;
}
