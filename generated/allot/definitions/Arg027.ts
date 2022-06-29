import { BucketTypesForCollection } from "./BucketTypesForCollection";
import { CdcProperty } from "./CdcProperty";
import { CsDevicePropDto } from "./CsDevicePropDto";
import { DmProfileEntities } from "./DmProfileEntities";
import { DmProfileEntity } from "./DmProfileEntity";
import { Arg01 } from "./Arg01";
import { SourceUnits } from "./SourceUnits";

/**
 * arg0
 * @targetNSAlias `ns3`
 * @targetNamespace `http://dto.topology.nms.allot.com`
 */
export interface Arg027 {
    /** xsd:int */
    administrator?: string;
    /** xsd:int */
    backupId?: string;
    /** bucketTypesForCollection */
    bucketTypesForCollection?: BucketTypesForCollection;
    /** cdcProperty */
    cdcProperty?: CdcProperty;
    /** xsd:int */
    collectMode?: string;
    /** csProperty */
    csProperty?: CsDevicePropDto;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    deviceType?: string;
    /** dmProfileEntities */
    dmProfileEntities?: DmProfileEntities;
    /** dmProfileEntity */
    dmProfileEntity?: DmProfileEntity;
    /** xsd:int */
    haMode?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    mdType?: string;
    /** xsd:int */
    modelType?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:int */
    operational?: string;
    /** xsd:string */
    profileName?: string;
    /** xsd:int */
    routingEn?: string;
    /** smpUnitIds */
    smpUnitIds?: Arg01;
    /** sourceUnits */
    sourceUnits?: SourceUnits;
    /** xsd:boolean */
    ssl?: string;
    /** xsd:int */
    type?: string;
    /** xsd:string */
    uiName?: string;
    /** xsd:int */
    widebandEnabled?: string;
}
