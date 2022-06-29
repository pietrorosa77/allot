import { Arg024 } from "./Arg024";
import { DateTime } from "./DateTime";
import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";

/**
 * dateTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface DateTopicDto {
    /** primaryWorkServerDTO */
    primaryWorkServerDTO?: Arg024;
    /** xsd:boolean */
    primaryWorkServerDTOChanged?: string;
    /** xsd:boolean */
    secondaryWorkServerChanged?: string;
    /** secondaryWorkServerDTO */
    secondaryWorkServerDTO?: Arg024;
    /** xsd:boolean */
    tertiaryWorkServerChanged?: string;
    /** tertiaryWorkServerDTO */
    tertiaryWorkServerDTO?: Arg024;
    /** dateTime */
    dateTime?: DateTime;
    /** ntpWorkServerDTOList */
    ntpWorkServerDTOList?: SmtpWorkServerDtoList;
    /** xsd:boolean */
    ntpWorkServerDTOListChanged?: string;
    /** xsd:boolean */
    timeChanged?: string;
    /** xsd:string */
    timeZone?: string;
    /** xsd:boolean */
    timeZoneChanged?: string;
    /** xsd:boolean */
    updateAllow?: string;
}
