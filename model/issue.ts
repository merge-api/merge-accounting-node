/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IssueStatusEnum } from './issueStatusEnum';

export class Issue {
    'id'?: string;
    'status'?: IssueStatusEnum;
    'error_description': string;
    'end_user'?: { [key: string]: any; };
    'first_incident_time'?: Date | null;
    'last_incident_time'?: Date | null;
    'is_muted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IssueStatusEnum"
        },
        {
            "name": "error_description",
            "baseName": "error_description",
            "type": "string"
        },
        {
            "name": "end_user",
            "baseName": "end_user",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "first_incident_time",
            "baseName": "first_incident_time",
            "type": "Date"
        },
        {
            "name": "last_incident_time",
            "baseName": "last_incident_time",
            "type": "Date"
        },
        {
            "name": "is_muted",
            "baseName": "is_muted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Issue.attributeTypeMap;
    }
}

