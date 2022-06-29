import { LicenseMonitoringDto } from "./LicenseMonitoringDto";

/**
 * licenseInfo
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface LicenseInfo {
    /** LicenseMonitoringDTO[] */
    LicenseMonitoringDTO?: Array<LicenseMonitoringDto>;
}
