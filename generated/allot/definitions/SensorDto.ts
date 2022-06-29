
/**
 * SensorDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface SensorDto {
    /** xsd:int */
    boardId?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    sensorId?: string;
    /** xsd:int */
    type?: string;
    /** SensorType|xsd:string|na,temperature,fan,powerSupply,cpu,memory,storage,voltage,telco,cpuPico,cer,noc,activeLines,activePipes,activeVcs,registerSubscr */
    typeName?: string;
    /** xsd:int */
    value?: string;
}
