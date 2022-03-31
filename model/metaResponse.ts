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
import { LinkedAccountStatus } from './linkedAccountStatus';

export class MetaResponse {
    'request_schema': { [key: string]: any; };
    'status'?: LinkedAccountStatus;
    'has_conditional_params': boolean;
    'has_required_linked_account_params': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "request_schema",
            "baseName": "request_schema",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "LinkedAccountStatus"
        },
        {
            "name": "has_conditional_params",
            "baseName": "has_conditional_params",
            "type": "boolean"
        },
        {
            "name": "has_required_linked_account_params",
            "baseName": "has_required_linked_account_params",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return MetaResponse.attributeTypeMap;
    }
}

