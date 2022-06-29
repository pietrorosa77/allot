import { SensorDto } from "./SensorDto";

/**
 * sensors
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface Sensors {
    /** SensorDTO[] */
    SensorDTO?: Array<SensorDto>;
}
