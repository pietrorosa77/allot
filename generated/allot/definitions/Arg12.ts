import { EAccountingTopic } from "./EAccountingTopic";
import { Return14 } from "./Return14";
import { DateTopicDto } from "./DateTopicDto";
import { DeviceIdentificationTopicDto } from "./DeviceIdentificationTopicDto";
import { EnterpriseCsTopicDto } from "./EnterpriseCsTopicDto";
import { EnterpriseDmTopicDto } from "./EnterpriseDmTopicDto";
import { EnterpriseDataMediationTopicDto } from "./EnterpriseDataMediationTopicDto";
import { Arg015 } from "./Arg015";
import { EnterpriseMobileReportsTopicDto } from "./EnterpriseMobileReportsTopicDto";
import { EnterpriseNetAwarnessTopicDto } from "./EnterpriseNetAwarnessTopicDto";
import { Return38 } from "./Return38";
import { Return37 } from "./Return37";
import { EnterpriseSpDto } from "./EnterpriseSpDto";
import { Arg014 } from "./Arg014";
import { Return7 } from "./Return7";
import { NetworkingTopicDto } from "./NetworkingTopicDto";
import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";
import { Return27 } from "./Return27";
import { ProductIdKeyTopicDto } from "./ProductIdKeyTopicDto";
import { RedirectionTopicDto } from "./RedirectionTopicDto";
import { Arg11 } from "./Arg11";
import { SnmpTopicDto } from "./SnmpTopicDto";
import { StatusTopicDto } from "./StatusTopicDto";
import { SupportTopicDto } from "./SupportTopicDto";
import { SystemLimitsTopicDto } from "./SystemLimitsTopicDto";
import { SystemPropertyTopicDto } from "./SystemPropertyTopicDto";
import { WuConfDto } from "./WuConfDto";

/**
 * arg1
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Arg12 {
    /** EAccountingTopic */
    EAccountingTopic?: EAccountingTopic;
    /** cocTopic */
    cocTopic?: Return14;
    /** dateTopicDTO */
    dateTopicDTO?: DateTopicDto;
    /** deviceIdentificationTopicDTO */
    deviceIdentificationTopicDTO?: DeviceIdentificationTopicDto;
    /** enterpriseCsTopicDTO */
    enterpriseCsTopicDTO?: EnterpriseCsTopicDto;
    /** enterpriseDMTopicDTO */
    enterpriseDMTopicDTO?: EnterpriseDmTopicDto;
    /** enterpriseDataMediationTopicDTO */
    enterpriseDataMediationTopicDTO?: EnterpriseDataMediationTopicDto;
    /** enterpriseGeneralTopicDTO */
    enterpriseGeneralTopicDTO?: Arg015;
    /** enterpriseMobileReportsTopicDTO */
    enterpriseMobileReportsTopicDTO?: EnterpriseMobileReportsTopicDto;
    /** enterpriseNetAwarnessTopicDTO */
    enterpriseNetAwarnessTopicDTO?: EnterpriseNetAwarnessTopicDto;
    /** enterpriseServersTopicDTO */
    enterpriseServersTopicDTO?: Return38;
    /** enterpriseSnmpTopicDTO */
    enterpriseSnmpTopicDTO?: Return37;
    /** enterpriseSpDTO */
    enterpriseSpDTO?: EnterpriseSpDto;
    /** enterpriseWebSafeDTO */
    enterpriseWebSafeDTO?: Arg014;
    /** mobileTopicDTO */
    mobileTopicDTO?: Return7;
    /** networkingTopicDTO */
    networkingTopicDTO?: NetworkingTopicDto;
    /** nicTopicCollection */
    nicTopicCollection?: SmtpWorkServerDtoList;
    /** portsTopicDTO */
    portsTopicDTO?: Return27;
    /** productIDKeyTopicDTO */
    productIDKeyTopicDTO?: ProductIdKeyTopicDto;
    /** redirectionTopicDTO */
    redirectionTopicDTO?: RedirectionTopicDto;
    /** securityTopicDTO */
    securityTopicDTO?: Arg11;
    /** snmpTopicDTO */
    snmpTopicDTO?: SnmpTopicDto;
    /** statusTopicDTO */
    statusTopicDTO?: StatusTopicDto;
    /** supportTopicDTO */
    supportTopicDTO?: SupportTopicDto;
    /** systemLimitsTopicDTO */
    systemLimitsTopicDTO?: SystemLimitsTopicDto;
    /** systemPropertyTopicDTO */
    systemPropertyTopicDTO?: SystemPropertyTopicDto;
    /** wuConfDTO */
    wuConfDTO?: WuConfDto;
}
