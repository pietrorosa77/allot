import { CsSystemEntity } from "./CsSystemEntity";

/**
 * CsDataSourcesEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsDataSourcesEntity {
    /** xsd:int */
    changeStatus?: string;
    /** csSystemEntity */
    csSystemEntity?: CsSystemEntity;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    enabled?: string;
    /** xsd:base64Binary */
    fileContent?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:dateTime */
    lastUpload?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    sourcePath?: string;
    /** xsd:int */
    type?: string;
}
