import { HdrInputEntity } from "./HdrInputEntity";
import { SdrInputEntities } from "./SdrInputEntities";
import { UdrInputEntities } from "./UdrInputEntities";

/**
 * dmInputRecord
 * @targetNSAlias `ns14`
 * @targetNamespace `http://dto.datamediation.management.configuration.nms.allot.com`
 */
export interface DmInputRecord {
    /** xsd:int */
    cmdrFileClosureRecords?: string;
    /** xsd:boolean */
    cmdrFileClosureRecordsChanged?: string;
    /** xsd:int */
    cmdrFileClosureTimeInterval?: string;
    /** xsd:boolean */
    cmdrFileClosureTimeIntervalChanged?: string;
    /** hdrInputEntity */
    hdrInputEntity?: HdrInputEntity;
    /** xsd:boolean */
    hdrInputEntityChanged?: string;
    /** sdrInputEntities */
    sdrInputEntities?: SdrInputEntities;
    /** xsd:boolean */
    sdrInputEntitiesChanged?: string;
    /** xsd:int */
    sdrSubsessionLifetime?: string;
    /** xsd:boolean */
    sdrSubsessionLifetimeChanged?: string;
    /** udrInputEntities */
    udrInputEntities?: UdrInputEntities;
    /** xsd:boolean */
    udrInputEntitiesChanged?: string;
    /** vdrInputEntity */
    vdrInputEntity?: HdrInputEntity;
    /** xsd:boolean */
    vdrInputEntityChanged?: string;
}
