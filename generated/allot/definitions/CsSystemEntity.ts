import { AggregationEntities } from "./AggregationEntities";
import { DataSourcesEntities } from "./DataSourcesEntities";
import { EtlGroups } from "./EtlGroups";
import { SnmpIpEntities } from "./SnmpIpEntities";
import { TimeIndication } from "./TimeIndication";

/**
 * CsSystemEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsSystemEntity {
    /** aggregationEntities */
    aggregationEntities?: AggregationEntities;
    /** xsd:int */
    biCollId?: string;
    /** xsd:int */
    biGroupId?: string;
    /** xsd:int */
    changeStatus?: string;
    /** xsd:boolean */
    connectionPropertiesChanged?: string;
    /** xsd:boolean */
    csAggregationsChanged?: string;
    /** xsd:boolean */
    csDataSourcesChanged?: string;
    /** xsd:boolean */
    csEtlGroupsChanged?: string;
    /** xsd:boolean */
    csSnmpIpsChanged?: string;
    /** dataSourcesEntities */
    dataSourcesEntities?: DataSourcesEntities;
    /** xsd:int */
    dmOutputProfileId?: string;
    /** xsd:string */
    dmOutputProfileName?: string;
    /** etlGroups */
    etlGroups?: EtlGroups;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    location?: string;
    /** xsd:int */
    maxPendingFiles?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    password?: string;
    /** xsd:boolean */
    realTimeAnalyticsEnable?: string;
    /** xsd:string */
    reportMode?: string;
    /** xsd:boolean */
    smartDataExportOnly?: string;
    /** snmpIpEntities */
    snmpIpEntities?: SnmpIpEntities;
    /** timeIndication */
    timeIndication?: TimeIndication;
    /** xsd:boolean */
    timeIndicationChanged?: string;
    /** xsd:int */
    transportMethod?: string;
    /** xsd:string */
    userName?: string;
    /** xsd:int */
    wspDeploymentMode?: string;
}
