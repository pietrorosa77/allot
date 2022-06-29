
/**
 * AlarmClientDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.events.nms.allot.com`
 */
export interface AlarmClientDto {
    /** xsd:int */
    ack?: string;
    /** xsd:int */
    actionType?: string;
    /** xsd:int */
    alertEntryId?: string;
    /** xsd:long */
    cardId?: string;
    /** xsd:int */
    collectorId?: string;
    /** xsd:int */
    collectorType?: string;
    /** xsd:long */
    date?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    deviceID?: string;
    /** xsd:int */
    eventID?: string;
    /** xsd:int */
    eventTypeID?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    isTrap?: string;
    /** xsd:int */
    lineId?: string;
    /** xsd:int */
    mdType?: string;
    /** xsd:int */
    pipeId?: string;
    /** xsd:int */
    severity?: string;
    /** xsd:long */
    sourceId?: string;
    /** xsd:string */
    sourceName?: string;
    /** xsd:long */
    tcaId?: string;
    /** xsd:int */
    tubeID?: string;
    /** xsd:int */
    vcId?: string;
}
